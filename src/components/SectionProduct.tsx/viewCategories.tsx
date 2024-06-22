"use client"
import { AppContext } from "@/context/appContext";
import { productService } from "@/services/product";
import { useContext, useState } from "react";

export default function ViewCategories({ categories }: { categories: any[] }) {
    const { ListProduct, setListProduct, Category, setCategory, setIsLoadingProduct } = useContext(AppContext)
    const [isSelected, setisSelected] = useState(17)
    return (
        <div className="md:flex md:flex-col md:gap-5  ">
            <span className=' font-bold text-2xl'>Categories</span>
            <ul className=" rounded-lg p-2 shadow shadow-slate-500">
                {
                    categories.map((categorie, idx) => {

                        return (
                            <li key={idx}
                                className={idx == isSelected ? "cursor-pointer text-white bg-blue-300" : "cursor-pointer "}
                                onClick={() => {
                                    setIsLoadingProduct(true)
                                    setisSelected(idx)

                                    productService.getProductsByCategory({
                                        name: Category,
                                    }).then((value) => {
                                        setCategory(categorie.name)
                                        console.log(categorie.name)
                                        setListProduct(value)
                                        console.log(ListProduct)

                                    });
                                }}>{categorie.name}</li>
                        )
                    })
                }
            </ul>
        </div>

        // <ListboxWrapper>
        //     <Listbox
        //         items={categories}
        //         aria-labelledby="e"
        //         onAction={async (key) => {
        //             setCategory(key as string)
        //             const ProductsByCategory: TGetDataCategory = await productService.getProductsByCategory({
        //                 name: Category,
        //             });
        //             setListProduct(ProductsByCategory)
        //             console.log(ListProduct)
        //         }}
        //     >
        //         {(categories) => (
        //             <ListboxItem
        //                 key={categories.name}

        //                 color={categories.name === "delete" ? "danger" : "default"}
        //                 className={categories.name === "delete" ? "text-danger" : " border-none"}
        //             >
        //                 {categories.name}
        //             </ListboxItem>
        //         )}
        //     </Listbox>
        // </ListboxWrapper>
    );
}




