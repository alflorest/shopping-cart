import React, { useContext, useState , useEffect} from "react";
import { DataProductsContext } from "../dataContext/DataProductsContext";
import {DataCardComponent} from "./DataCardComponent";
export const ListComponent=()=>{
    const {data, updateData} = useContext(DataProductsContext);
    
    const  [resp, setResp]= useState([]);
    useEffect(() => {
        setResp(data);
    }, [data])
    
    const ejemplo = [{
        id:25, 
        title:'Hola Mundo',
        price: 80.25,
        Category: 'Proof'
    }]
    
    
    const addCategory = () => {
        updateData([...data, ...ejemplo]);   
    }


return  <>
            <div className="flex flex-row flex-wrap justify-center">
            <button onClick={()=>addCategory()} >Agregar</button>
            {resp.map((dataContext) => (
                
            <DataCardComponent key={dataContext.id} {...dataContext} />
            ))
        }
        </div>
        

    </>
        
}