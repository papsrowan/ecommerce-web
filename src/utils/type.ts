import { Dispatch, SetStateAction } from "react";

type TProductCart = {
    id: number;
    quantity: number;
}

type TProduct = {
    id: 1,
    title: string,
    description: string,
    category: string,
    image: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    thumbnail: string
}

type TGetDataCategory = {
    products: any[],
    total: number,
    skip: number,
    limit: number
}

interface MyContextProps {
    ListProduct: TGetDataCategory | null;
    setListProduct: Dispatch<SetStateAction<TGetDataCategory>>
    Category:string
    setCategory:Dispatch<SetStateAction<string>>
  }
export type { TProductCart, TProduct,TGetDataCategory, MyContextProps };

