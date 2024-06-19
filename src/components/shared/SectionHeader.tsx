"use client"
import { FaUserCircle } from "react-icons/fa";
import Cart from "./cart";
import { useContext, useEffect, useState } from "react";
import { Image } from "@nextui-org/react";
import { AppContext } from "@/context/appContext";
import { useRouter } from "next/navigation";

function SectionHeader({
  title,
}: {
  title: string;
}) {
  const { currentUser } = useContext(AppContext)
  const Router = useRouter()
  return (
    <div>
      <div className=" gap-4 grid grid-cols-2 rounded-md justify-center bg-blue-400 border">
        <div className="p-4 font-bold text-2xl text-white">{title}</div>
        <div className=" relative flex justify-end items-end gap-4">
          <div className="p-4 flex gap-2 items-center">{currentUser.firstName}
            {currentUser.image != '' ? <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={currentUser.firstName}
              className="w-full object-cover h-[30px] rounded-full bg-slate-500"
              src={currentUser.image}
            /> :  <FaUserCircle size={"30px"} className=" cursor-pointer" onClick={()=>Router.push('/login')} />}
            <Cart />
          </div>
        </div>

      </div>
    </div>
  );
}

export default SectionHeader;
