import React, { useState, useEffect } from 'react'
import { DataProductsContext } from './DataProductsContext';
import { getData } from '../data/getData';

export const DataProductsProvider = ({children}) => {
    const [data, setData] = useState([]);

    const fetchData = async()=>{
        const response = await getData();
        setData(response);
    }
    
    useEffect(() => {
        fetchData();
    }, [])
    
    const updateData = (newData) => {
        setData(newData);
      };

  return (
        <DataProductsContext.Provider value={{data, updateData}}> 
            {children}
        </DataProductsContext.Provider>
    )
}
