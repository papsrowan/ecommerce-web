"use client"
import { AppContext } from '@/context/appContext'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useContext, useEffect } from 'react'
import Skelleton from '../shared/skelleton'

const ViewProducts = () => {
    const router = useRouter()

    const navigatoDetail = (id: number) => {
        router.push(`/product/${id}`)
    }
    const { ListProduct, Category } = useContext(AppContext)
    

    return (

        <div>
            <div className=" gap-4 grid grid-cols-2 sm:grid-cols-4">
                {ListProduct?.products.map((item, index) => (
                    <div onClick={() => navigatoDetail(item.id)}>
                        <Card shadow="sm" key={index} className=' border border-blue-400 rounded p-5 cursor-pointer hover:bg-blue-200 transition-all ease-in-out'>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    isZoomed
                                    shadow="sm"
                                    radius="lg"
                                    width="100%"
                                    alt={item.title}
                                    className="w-full object-cover h-[140px]"
                                    src={item.thumbnail}
                                    //https://app.requestly.io/delay/5000/
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-between">
                                <b>{item.title}</b>
                                <p className="text-default-500">{item.price}</p>
                            </CardFooter>
                        </Card>
                    </div>

                ))
                }
            </div>
        </div>
    )
}



export default ViewProducts
