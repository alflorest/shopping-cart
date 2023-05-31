import { useContext, useEffect, useState } from 'react';
import { DataProductsContext } from '../dataContext/DataProductsContext';
import { CategoryGridComponent } from './CategoryGridComponent';

export const SearchBarComponent =()=>{
    return  (
        <div>
            <input type="text" placeholder="Search products"  
                className="round rounded-md text py-3 pl-4 bg-white flex w-full h-12 m-10 border 
                outline-none focus:bg-white focus: border-indigo-600 "/>
            {
                <CategoryGridComponent/>
            }
        </div>
    )
}