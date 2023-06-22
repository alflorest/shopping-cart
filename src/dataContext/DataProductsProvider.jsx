import React, { useState, useEffect } from 'react'
import { DataProductsContext } from './DataProductsContext';
import { getData } from '../data/getData';

export const DataProductsProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [Cdata, setCData] = useState([]);    

    const fetchData = async()=>{
        const response = await getData();
        setData(response);
        setCData(response);
    }
    
    useEffect(() => {
        fetchData();
    }, []);
      
  return (
        <DataProductsContext.Provider value={{data, setData, Cdata}}> 
            {children}
        </DataProductsContext.Provider>
    )
}
