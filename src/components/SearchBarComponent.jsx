import { useContext, useEffect, useState } from 'react';
import { DataProductsContext } from '../dataContext/DataProductsContext';
export const SearchBarComponent =()=>{
    const {updateData} = useContext(DataProductsContext);
    // 1. guardar datos originales
    // 2. capturar el evento onChange y valor
    // 3. filtro a los datos de onChange
    // 4. seteo de datos del resultado de filtro
    // 5. si no hay valor en busqueda setear datos originales

    const [inputValue, setInputValue]=useState('');
    const onChangeInput =({target})=>{
        setInputValue(target.value);
    }
    const onSubmit =(event)=>{
        event.preventDefault();
        updateData(data => [inputValue, ...data]);
        setInputValue('');
    }


    return  (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Search products"  
                className="round rounded-md text py-3 pl-4 bg-white flex w-full h-12 m-10 border 
                outline-none focus:bg-white focus: border-indigo-600" value={inputValue} onChange={onChangeInput}/>
       
        </form>
    )
}