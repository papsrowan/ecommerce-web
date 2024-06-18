"use client"
import { productService } from "@/services/product";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { useContext, useState } from "react";
import { ListboxWrapper } from "../shared/ListboxWrapper";
import { TGetDataCategory } from "@/utils/type";
import { AppContext } from "@/context/appContext";

export default function ViewCategories({ categories }: { categories: any[] }) {
    const { ListProduct, setListProduct, Category, setCategory } = useContext(AppContext)

    return (
        <ListboxWrapper>
            <Listbox
                items={categories}
                shouldSelectOnPressUp={false}
                aria-labelledby="e"
                onAction={async (key) => {
                    setCategory(key as string)
                    const ProductsByCategory: TGetDataCategory = await productService.getProductsByCategory({
                        name: Category,
                    });
                    setListProduct(ProductsByCategory)
                    console.log(ListProduct)
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




