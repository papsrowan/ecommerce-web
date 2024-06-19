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
type TCartByUser = {
    data: {
        carts: any[]
        total: number,
        skip: number,
        limit: number
    }
}
type User = {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
    refreshToken: string;
};

type TCArt ={
    id: number;
    products: TProduct[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}

interface MyContextProps {
    ListProduct: TGetDataCategory | null;
    setListProduct: Dispatch<SetStateAction<TGetDataCategory>>
    Category: string
    currentUser: User
    setCurrentUser: Dispatch<SetStateAction<User>>
    setCategory: Dispatch<SetStateAction<string>>
}
export type { TProductCart, TProduct, TGetDataCategory, MyContextProps, User, TCartByUser, TCArt };

