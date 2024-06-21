"use client"
import { cartService } from '@/services/cart';
import { useState, useContext } from 'react';
import { Image } from '@nextui-org/react'
import { AppContext } from '@/context/appContext';
import { FaStar } from 'react-icons/fa';


const PopCart = ({ handleClose }: { handleClose: () => void }) => {
  const handleClosed = () => {
    handleClose();
  };
  const { listCart } = useContext(AppContext)
  return (
    <div onClick={(e) => {
      if (e.target === e.currentTarget) {
        handleClosed()
      }
    }} className=' fixed top-0 left-0 h-screen w-screen bg-black/50 z-50 flex items-center justify-center'>
      <div className=' w-1/2 h-1/2 overflow-y-auto bg-white rounded-lg flex flex-col gap-5'>
        { listCart.length !=0?
          listCart.map((product) =>
            <div className=" flex flex-col p-10 gap-7">
              <div className="grid grid-cols-2 gap-5">
                <div className=' flex items-center justify-center border border-blue-400 rounded-[10px]'>
                  <Image
                    isZoomed
                    shadow="sm"
                    radius="lg"
                    alt={product.title}
                    className="w-full object-cover h-[100%]"
                    src={`${product.thumbnail}`}
                  //https://app.requestly.io/delay/5000/
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h1 className=' font-bold text-2xl'>{product.title}</h1>
                  <p>{product.description}</p>
                  
                  <div className='  self-center'>
                    <p className=' text-4xl font-bold'>{product.price} $</p>
                  </div>
                  <div className='grid grid-cols-2 gap-5'>
                    <button className=' bg-blue-500 px-4 py-2 rounded-full text-white hover:bg-blue-600 transition-all ease-in-out'>Buy</button>
                    <button className=' bg-blue-500 px-4 py-2 rounded-full text-white hover:bg-blue-600 transition-all ease-in-out'>Add Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ):<div className=' flex items-center justify-center h-[100%]'>Aucun produit dans votre cart</div>
        }
      </div>

    </div>
  )
}
export default PopCart
