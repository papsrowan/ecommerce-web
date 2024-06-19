import { cartService } from '@/services/cart';
import { productService } from '@/services/product';
import { TProduct } from '@/utils/type';
import { Image } from '@nextui-org/react';
import { FaStar } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const PopCart = ({ handleClose }: { handleClose: () => void }) => {
  const handleClosed = () => {
    handleClose();
  };
  const productsCart = cartService.getCart().then((value) => {
    if (value != undefined) {
      return value
    }
  })
  return (
    <div onClick={(e) => {
      if (e.target === e.currentTarget) {
        handleClosed()
      }
    }} className=' fixed top-0 left-0 h-screen w-screen bg-black/50 z-50 flex items-center justify-center'>
      {productsCart.then((value) => {
        const product = value?.data.carts
        if (product != undefined) {
           product.map((product) => 
            <div className=" flex flex-col p-10 gap-7 bg-white">
              <div className="grid grid-cols-2 gap-5 h-96 w-1/2">
                <div className=' flex items-center justify-center border border-blue-400 rounded-[10px]'>
                  <Image
                    isZoomed
                    shadow="sm"
                    radius="lg"
                    alt={product?.l}
                    className="w-full object-cover h-[100%]"
                    src={`${product.thumbnail}`}
                  //https://app.requestly.io/delay/5000/
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h1 className=' font-bold text-2xl'>{product.title}</h1>
                  <p>{product.description}</p>
                  <div className=' flex mt-5 mb-5 items-center gap-10'>
                    <div className=' flex items-center gap-3 font-bold'>Rating: {product.rating}  <FaStar size={'30px'} className=' text-yellow-500' />
                    </div> <div className=' flex items-center gap-3 font-bold'>Caterory: {product.category} </div>
                    <div className=' flex items-center gap-3 font-bold'>Stock: {product.stock} </div>
                  </div>
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
          )
        }else {
          return (<div>
            <h1>Votre panier est vide</h1>
          </div>)
        }


      })}
    </div>
  )
}
async function getProduct(id: number) {
  const reponse: TProduct = await productService.getProductById(id)
  return reponse
}
export default PopCart
