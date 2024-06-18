"use client"
import { productService } from "@/services/product";
import { MyContextProps, TGetDataCategory } from "@/utils/type";
import { createContext, ReactElement, useContext, useEffect, useState } from "react";


export const AppContext = createContext<MyContextProps>({
    ListProduct: null,
    setListProduct: () => { },
    Category: "tops",
    setCategory: () => { }
});

export const AppProvider = ({ children }: { children: ReactElement }) => {
    const [ListProduct, setListProduct] = useState<TGetDataCategory>({
        limit: 0,
        skip: 0,
        products: [],
        total: 0
    });
    const [Category, setCategory] = useState<string>('tops');

    useEffect(() => {
        async function getProducts() {
            const ProductsByCategory: TGetDataCategory = await productService.getProductsByCategory({
                name: Category,
            });
            setListProduct(ProductsByCategory)
        }
        getProducts()
    }, [])

    return (
        <AppContext.Provider value={{ ListProduct, setListProduct, Category, setCategory }}>
            {children}
        </AppContext.Provider>
    );
};

export const useListProduct = () => {

    const { ListProduct, setListProduct } = useContext(AppContext)
    if (ListProduct) throw new Error("ListProduct est utilisée sans provider")
    return { ListProduct, setListProduct }
}
