import React, { useContext, useState } from 'react';
import { DataProductsContext } from '../dataContext/DataProductsContext';
export const SearchBarComponent =()=>{
    const {setData, Cdata} = useContext(DataProductsContext);
    const [inputValue, setInputValue]=useState('');

    const onChangeInput =({target})=>{
        setInputValue(target.value);
    }

    const onSubmit =(event)=>{
        event.preventDefault();
        const data = Cdata.filter((item) => item.title.toLowerCase().includes(inputValue.toLowerCase()));
        setData(data);
        console.log('15',Cdata);
    }   

    return  (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Search products"  
                className="rounded-md text py-3 pl-4 bg-white flex w-11/12 h-12 m-10 border 
                outline-none focus:bg-white focus: border-indigo-600" value={inputValue} onChange={onChangeInput}/>
       
        </form>
    )
}