"use client"
import { AppContext } from '@/context/appContext'
import { TGetDataCategory } from '@/utils/type'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { useContext, useEffect, useState } from 'react'
import Skelleton from '../shared/skelleton'

const ViewProducts = () => {

    const { ListProduct, Category } = useContext(AppContext)
    const [loading, setloading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setloading(false)
        }, 2000);

    }, [Category])

    return (

        <div>
            <div className="gap-5 grid grid-cols-2 sm:grid-cols-4">
                {ListProduct?.products.length != 0? ListProduct?.products.map((item, index) => (
                    <Card shadow="sm" key={index} isPressable onPress={() => {
                    }}>
                        <CardBody className="overflow-visible p-0">
                            <Image
                                isZoomed
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={item.title}
                                className="w-full object-cover h-[140px]"
                                src={item.thumbnail}
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-between">
                            <b>{item.title}</b>
                            <p className="text-default-500">{item.price}</p>
                        </CardFooter>
                    </Card>
                )):Array.from({length:8}).map((_, key)=><Skelleton/>) 
                }
            </div>
        </div>
    )
}



export default ViewProducts
