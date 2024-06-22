"use client"
import PopCart from '@/components/shared/popCart'
import SectionHeader from '@/components/shared/SectionHeader'
import Skelleton from '@/components/shared/skelleton'
import { AppContext } from '@/context/appContext'
import { productService } from '@/services/product'
import { TProduct } from '@/utils/type'
import { Image } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'

const page = (ctx: any) => {
    const idProduct = ctx.params.productId
    console.log("idProduit", ctx.params.productId)
    console.log(idProduct)
    const [product, setProducts] = useState<TProduct>()
    const [openCartPopUp, setOpenCartPopUp] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const { setListCart, currentUser, setCurrentUser} = useContext(AppContext)
    const Router = useRouter()
    const handleClose = () => {
        setOpenCartPopUp(true)
    }
    useEffect(() => {
        getProduct(idProduct).then((value) => {

            setProducts(value)
            setIsLoading(false)
        })

    }, [])

    return (

        <div className=" h-screen flex flex-col p-10 gap-7">
            {openCartPopUp ? <PopCart handleClose={() => setOpenCartPopUp(false)} /> : ''}
            <SectionHeader title="Shop cam" />
            <div className="grid grid-cols-2 gap-5 h-96">
                <div className=' flex items-center justify-center border border-blue-400 rounded-[10px]'>
                    {!isLoading ? <Image
                        isZoomed
                        shadow="sm"
                        radius="lg"
                        alt={product?.title}
                        className="w-full object-cover h-[100%]"
                        src={`${product?.thumbnail}`}
                    //https://app.requestly.io/delay/5000/
                    /> : <div className=' h-full w-full'><Skelleton /></div>}
                </div>

                {!isLoading? <div className="flex flex-col gap-2">
                    <h1 className=' font-bold text-2xl'>{product?.title}</h1>
                    <p>{product?.description}</p>
                    <div className=' flex mt-5 mb-5 items-center gap-10'>
                        <div className=' flex items-center gap-3 font-bold'>Rating: {product?.rating}  <FaStar size={'30px'} className=' text-yellow-500' />
                        </div> <div className=' flex items-center gap-3 font-bold'>Caterory: {product?.category} </div>
                        <div className=' flex items-center gap-3 font-bold'>Stock: {product?.stock} </div>
                    </div>
                    <div className='  self-center'>
                        <p className=' text-4xl font-bold'>{product?.price} $</p>
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        <button className=' bg-blue-500 px-4 py-2 rounded-full text-white hover:bg-blue-600 transition-all ease-in-out'>Buy</button>
                        <button onClick={() => {
                            if (currentUser.email=='') {
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
                                Router.push('/login')
                            }
                            setListCart((prev) => {
                                const tempCart = prev
                                if (product) {
                                    tempCart.push(product)
                                    setOpenCartPopUp(true)
                                }
                                return tempCart
                            })
                        }} className=' bg-blue-500 px-4 py-2 rounded-full text-white hover:bg-blue-600 transition-all ease-in-out'>Add Cart</button>
                    </div>
                </div>: <div className=' h-full w-full'><Skelleton /></div> }
            </div>
        </div>
    )
}
async function getProduct(id: number) {
    const reponse: TProduct = await productService.getProductById(id)
    return reponse
}

export default page