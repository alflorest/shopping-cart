import React, { useEffect } from "react";
import { NavBarComponent } from "./components/NavBarComponent";
import { SearchBarComponent } from "./components/SearchbarComponent";
import { CategoryGridComponent } from "./components/CategoryGridComponent";
import { DataProductsProvider } from "./dataContext/dataProductsProvider";
export const ShoppingCartApp = () => {
    return (
        <DataProductsProvider>
            <NavBarComponent/>
            <SearchBarComponent/>
            <CategoryGridComponent/>
        </DataProductsProvider>
        )};
