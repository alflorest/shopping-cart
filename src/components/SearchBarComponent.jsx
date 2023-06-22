import { useContext, useState } from 'react';
import { DataProductsContext } from '../dataContext/DataProductsContext';
export const SearchBarComponent =()=>{
    const {setData, Cdata} = useContext(DataProductsContext);
    const [inputValue, setInputValue]=useState('');
    const dataFilter = Cdata.map((item) => item);

    const onChangeInput =({target})=>{
        setInputValue(target.value);
    }

    const onSubmit =(event)=>{
        event.preventDefault();
        const data = dataFilter.filter((item) => item.title.toLowerCase().includes(inputValue.toLowerCase()));
        setData(data);

    }   

    return  (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Search products"  
                className="round rounded-md text py-3 pl-4 bg-white flex w-full h-12 m-10 border 
                outline-none focus:bg-white focus: border-indigo-600" value={inputValue} onChange={onChangeInput}/>
       
        </form>
    )
}