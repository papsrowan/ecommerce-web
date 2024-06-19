"use client"
import { AppContext } from "@/context/appContext";
import { productService } from "@/services/product";
import { useContext } from "react";

export default function ViewCategories({ categories }: { categories: any[] }) {
    const { ListProduct, setListProduct, Category, setCategory } = useContext(AppContext)
    return (
        <ul>
            {
                categories.map((categorie, idx) => {

                    return (
                        <li key={idx}
                            className=" cursor-pointer"
                            onClick={() => {

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




