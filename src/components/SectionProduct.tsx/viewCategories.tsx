"use client"
import React, { useState } from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "../shared/ListboxWrapper";
import { TGetDataCategory } from "@/utils/type";
import { productService } from "@/services/product";

export default async function ViewCategories({onCategorieSelected}:{onCategorieSelected: (category: string) => void}) {
    const [appState, setappState] = useState(null)
    const handleCategoryClick = (category: any) => {
        onCategorieSelected(category)
    }
    const categories = await getData();
    return (
        <ListboxWrapper>
            <Listbox
                items={categories}
                shouldSelectOnPressUp={false}
                onAction={(key) => {
                    handleCategoryClick(key)
                    alert(appState)
                }}
            >
                {(categories) => (
                    <ListboxItem
                        key={categories.name}

                        color={categories.name === "delete" ? "danger" : "default"}
                        className={categories.name === "delete" ? "text-danger" : " border-none"}
                    >
                        {categories.name}
                    </ListboxItem>
                )}
            </Listbox>
        </ListboxWrapper>
    );
}


const getData = async () => {
    const categories = await productService.getAllProdutsCategories();
    return categories
};

