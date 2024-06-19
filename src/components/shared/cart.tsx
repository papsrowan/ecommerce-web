"user client"
import { AppContext } from "@/context/appContext";
import { useContext, useEffect, useState } from "react";
import { FaLongArrowAltRight, FaShoppingBasket, FaSignOutAlt } from "react-icons/fa";
import PopCart from "./popCart";
import { cartService } from "@/services/cart";
const Cart = () => {
    const { setCurrentUser } = useContext(AppContext)
    const [openCartPopUp, setOpenCartPopUp] = useState(false)
    const [lenghtCart, setlenghtCart] = useState(0)
    const handleClose = () => {
        setOpenCartPopUp(true)
    }
    cartService.getCart().then((value) => {
        if (value) {
            setlenghtCart(value.data.carts.length)
        }
    })
    return (
        <div className=" flex justify-center items-center gap-5">
            <div className=" absolute top-2 right-12 rounded-full h-5 w-5 bg-red-600 text-center">
                <span className=" text-zinc-50 text-sm">{lenghtCart}</span>
            </div>
            <div className=" text-5xl">
                <FaShoppingBasket size={"25px"} onClick={handleClose} className=" cursor-pointer" />

            </div>
            {openCartPopUp ? <PopCart handleClose={() => setOpenCartPopUp(false)} /> : ''}
            <div className=" text-5xl">
                <FaSignOutAlt className=" cursor-pointer" size={"20px"} onClick={() => {
                    setCurrentUser({
                        email: '',
                        firstName: '',
                        gender: '',
                        id: 0,
                        image: '',
                        lastName: '',
                        username: '',
                        refreshToken: '',
                        token: ''
                    })

                    localStorage.removeItem("user")
                }} />

            </div>
        </div>
    );
}

export default Cart
