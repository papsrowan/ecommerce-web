import React from "react";
import Cart from "./cart";

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
       <div className=" gap-4 grid grid-cols-2 rounded-md justify-center">
          <div className="p-4 ">{title}</div>
          <div className=" relative flex justify-end items-end gap-4">
            <div className="p-4 ">Cart</div>
            <Cart/>
          </div>

        </div>
    </div>
  );
}

export default SectionHeader;
