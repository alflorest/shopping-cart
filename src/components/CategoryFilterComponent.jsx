import React, { useEffect } from "react"
import { DataProductsContext } from "../dataContext/DataProductsContext";
import { useContext, useState } from "react";
export const CategoryFilterComponent = ()=> {
    const {setData, Cdata} = useContext(DataProductsContext);
    const [dataSelect, setDataSelect] = useState([]);

    useEffect(()=>{
        const filterCategories = [];
        Cdata.forEach(element => {
           const index = filterCategories.findIndex( (f)=> f.category===element.category);
           if(index===-1){
            filterCategories.push(element);
           }
        });

        setDataSelect(filterCategories);

    }, [Cdata])

    const onChangeSelect =({target})=>{
        const dataSelect = target.value;
        const dataFilter = Cdata.filter((item) => item.category === dataSelect);
        setData(dataFilter);
    }



    return (
        <select className="rounded-md text pl-4 bg-white flex w-38 h-12 m-10 border 
        outline-none focus:bg-white focus: border-indigo-600"  onChange={onChangeSelect}>
        <option value="">All Categories</option>    
        
        {
            dataSelect.map((data)=>(
                <option key={data.category} value={data.category} >
                    {data.category}
                </option>
            ))
            
        }
        </select>
    )

}