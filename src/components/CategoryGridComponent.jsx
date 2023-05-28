import { useEffect, useState } from "react";
import { getData } from "../services/getData"
import { DataGridItemComponent } from "./DataGridItemComponent";

export const CategoryGridComponent =({category})=>{
    const [data, setdata] = useState([]);
    useEffect(() => {
        async function fetchData (){
            const response = await getData();
            setdata(response); 
        }
        fetchData();
    }, [])
    
return (<>
            <input type="select"></input>
               
               <div className="flex flex-row flex-wrap justify-center">
                    {
                        data.map((data) => (
                        <DataGridItemComponent key={data.id} {...data}/>
    
                        ))
                    }
                </div>
        
            </>)
}