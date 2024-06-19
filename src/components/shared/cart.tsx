"user client"
import { useEffect } from "react";
import { FaShoppingBasket } from "react-icons/fa";
const Cart = () => {

    useEffect(() => {
        const usercurrent = localStorage.getItem("user")
        console.log(usercurrent)


    }, [])

    return (
        <div className=" flex justify-center items-center">
            <div className=" absolute top-2 right-3 rounded-full h-5 w-5 bg-red-600 text-center">
                <span className=" text-zinc-50">4</span>
            </div>
            <div className=" text-5xl">
                <FaShoppingBasket size={"30px"} onClick={() => {
                }} />

            </div>
        </div>
    );
}

export default Cart
