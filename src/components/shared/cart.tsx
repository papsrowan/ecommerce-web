import { FaBeer, FaShoppingBasket } from "react-icons/fa";
export default function Cart() {
    return (
        <div className=" flex justify-center items-center">
            <div className=" absolute top-2 right-3 rounded-full h-5 w-5 bg-red-600 text-center">
                <span className=" text-zinc-50">4</span>
            </div>
            <div className=" text-5xl">
                <FaShoppingBasket size={"30px"} />
                
            </div>
        </div>
    );
}

