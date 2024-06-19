"use client"
import { FaUserCircle } from "react-icons/fa";
import Cart from "./cart";

function SectionHeader({
  title,
}: {
  title: string;
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
