import { TProductCart } from "@/utils/type";
import { openAxiosInstance } from "./axios";

class CartService {
  //Add product to cart
  async addProductToCart({ listProducts }: { listProducts: TProductCart[] }) {
    const userString = localStorage.getItem("user");

    if (!userString) throw new Error("User not logged in");
    const user = JSON.parse(userString);
    const response = await openAxiosInstance.post("/carts/add", {
      userId: user.id,
      products: listProducts,
    });

    return response;
  }
  //Get cart
  async getCart() {
    const userString = localStorage.getItem("user");
    if (!userString) throw new Error("User not logged in");
    const user = JSON.parse(userString);
    const response = await openAxiosInstance.get(`/carts/${user.id}`);
    return response;
  }

  //Update product to cart
  async updatingProductToCart({
    listProducts,
    idProduct,
  }: {
    listProducts: TProductCart[];
    idProduct: number;
  }) {
    const response = await openAxiosInstance.put(`/carts/${idProduct}`, {
      products: listProducts,
      merge: true,
    });

    return response;
  }

  //Delete product to cart
  async deleteProductToCart({ idProduct }: { idProduct: number }) {
    const response = await openAxiosInstance.delete(`/carts/${idProduct}`);
    return response;
  }
}

const cartService = new CartService();
export { cartService };
