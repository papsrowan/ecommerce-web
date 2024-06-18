import React from "react";
import Cart from "./cart";
import { FaPersonBooth, FaShoppingBasket, FaUser, FaUserCircle } from "react-icons/fa";

function SectionHeader({
  abstract,
  description,
  title,
}: {
  title: string;
  abstract?: string;
  description?: string;
}) {
  return (
    <div>
       <div className=" gap-4 grid grid-cols-2 rounded-md justify-center bg-blue-400 border">
          <div className="p-4 font-bold text-2xl text-white">{title}</div>
          <div className=" relative flex justify-end items-end gap-4">
            <div className="p-4 flex gap-5"><FaUserCircle size={"30px"} />
            <Cart/>
            </div>
          </div>

        </div>
    </div>
  );
}

export default SectionHeader;
