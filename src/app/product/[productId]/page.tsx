import SectionHeader from '@/components/shared/SectionHeader'
import { productService } from '@/services/product'
import { TProduct } from '@/utils/type'
import { Image } from '@nextui-org/react'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const page = async (ctx: any) => {
    const idProduct = ctx.params.productId
    console.log(ctx.params.productId)
    const product = await getProduct(idProduct)
    return (
        <div className=" h-screen flex flex-col p-10 gap-7">
            <SectionHeader title="Shop cam" />
            <div className="grid grid-cols-2 gap-5 h-96">
                <div className=' flex items-start justify-center border border-blue-400 rounded-[10px]'>
                    <Image
                        isZoomed={true}
                        shadow="sm"
                        radius="lg"
                        alt={product.title}
                        className="w-full object-cover h-[100%]"
                        src={product.thumbnail}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <h1 className=' font-bold text-2xl'>{product.title}</h1>
                    <p>{product.description}</p>
                    <div className=' flex mt-5 mb-5 items-center gap-10'><div className=' flex items-center gap-3 font-bold'>Rating: {product.rating}  <FaStar size={'30px'} className=' text-yellow-500' /></div> <div className=' flex items-center gap-3 font-bold'>Caterory: {product.category} </div></div>
                </div>
            </div>
        </div>
    )
}
async function getProduct(id: number) {
    const reponse: TProduct = await productService.getProductById(id)
    return reponse
}
export default page
