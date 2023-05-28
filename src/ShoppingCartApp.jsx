import React, { useEffect } from "react";
import {useState} from "react";
import { NavBarComponent } from "./components/NavBarComponent";
import { SearchBarComponent } from "./components/SearchbarComponent";
import { getData } from "./services/getData";
import { CategoryGridComponent } from "./components/CategoryGridComponent";
export const ShoppingCartApp = () => {
    const [categories, setCategories] = useState([getData]);

    
    const addCategory=()=>{
        setCategories([...categories, '     ']);
    }    

    return (<>
            <NavBarComponent/>
            <SearchBarComponent/>
            
            {
                categories.map( (category) =>(
                    <CategoryGridComponent key={category} category={category}/>
                ))
            }
            
            <button onClick={addCategory}>Agregar</button>
            </>);
};
