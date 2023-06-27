import React from "react";
import { NavBarComponent } from "./components/NavBarComponent";
import { SearchBarComponent } from "./components/SearchbarComponent";
import { CategoryGridComponent } from "./components/CategoryGridComponent";
import { DataProductsProvider } from "./dataContext/dataProductsProvider";
import { CategoryFilterComponent } from "./components/CategoryFilterComponent";

export const ShoppingCartApp = () => {
    return (
        <DataProductsProvider>
            <NavBarComponent/>
            <SearchBarComponent/>
            <CategoryFilterComponent/>
            <CategoryGridComponent/>
        </DataProductsProvider>
        )};
