import { useContext, useEffect, useState } from "react";
import { DataCardComponent } from "./DataCardComponent";
import { DataProductsContext } from "../dataContext/DataProductsContext";
export const CategoryGridComponent =()=>{
    const data = useContext(DataProductsContext);
    return (<>
        <div className="flex flex-row flex-wrap justify-center">
            {                    
                data.map(({...data}) => (
                    <DataCardComponent key={data.id} {...data} />
                ))
            }
        </div>
                
    </>)
}