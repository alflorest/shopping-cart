import React, { useContext, useState , useEffect} from "react";
import { DataProductsContext } from "../dataContext/DataProductsContext";
import {DataCardComponent} from "./DataCardComponent";
export const ListComponent=()=>{
    const {data} = useContext(DataProductsContext);   
    const  [resp, setResp]= useState([]);
    useEffect(() => {
        setResp(data);
    }, [data])
    
    return  <>
                <div className="flex flex-row flex-wrap justify-center">
                {resp.map((dataContext) => (
                    
                <DataCardComponent key={dataContext.id} {...dataContext} />
                ))
            }
            </div>
            

        </>
        
}