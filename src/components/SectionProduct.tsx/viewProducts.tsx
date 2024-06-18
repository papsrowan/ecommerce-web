"use client"
import { AppContext } from '@/context/appContext'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { useContext, useEffect } from 'react'
import Skelleton from '../shared/skelleton'

const ViewProducts = () => {

    const { ListProduct, Category } = useContext(AppContext)
    let loading: boolean = true
    useEffect(() => {
        setTimeout(() => {
            loading = false
        }, 2000);

    }, [ListProduct])

    return (

        <div>
            <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
                {loading ? ListProduct?.products.map((item, index) => (
                    <Card shadow="sm" key={index} onPress={() => {
                    }} className=' border border-blue-400 rounded p-5 cursor-pointer hover:bg-blue-200 transition-all ease-in-out'>
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
                )) : Array.from({ length: 8 }).map((_, key) => <Skelleton key={key} />)
                }
            </div>
        </div>
    )
}



export default ViewProducts
