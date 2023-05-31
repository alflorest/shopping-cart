import React, { useState, useEffect } from 'react'
import { DataProductsContext } from './DataProductsContext';
import { getData } from '../data/getData';

export const DataProductsProvider = ({children}) => {
    const [data, setdata] = useState([]);
    const fetchData = async()=>{
        const response = await getData();
        setdata(response);
    }
    
    useEffect(() => {
        fetchData();
    }, [])

  return (
        <DataProductsContext.Provider value={data}> 
            {children}
        </DataProductsContext.Provider>
    )
}
