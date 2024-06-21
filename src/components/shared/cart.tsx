"user client"
import { AppContext } from "@/context/appContext";
import { useContext, useState } from "react";
import { FaShoppingBasket, FaSignOutAlt } from "react-icons/fa";
import PopCart from "./popCart";
import { useRouter } from "next/navigation";
const Cart = () => {
    const { setCurrentUser, currentUser } = useContext(AppContext)
    const [openCartPopUp, setOpenCartPopUp] = useState(false)
    const Router = useRouter()
    const handleClose = () => {
        if (currentUser.email == "") {
            return Router.push('/login')
        }
        setOpenCartPopUp(true)
    }
    const { listCart, setListCart } = useContext(AppContext)
    return (
        <div className=" flex justify-center items-center gap-5">
            <div className=" absolute top-2 right-12 rounded-full h-5 w-5 bg-red-600 text-center">
                <span className=" text-zinc-50 text-sm">{listCart.length}</span>
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

                    setListCart([])
                    localStorage.removeItem("user")
                }} />

            </div>
        </div>
    );
}

export default Cart
