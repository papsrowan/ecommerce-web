import { TGetDataCategory, TProduct } from '@/utils/type'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import React from 'react'
import SectionCategories from './viewCategories'
import { productService } from '@/services/product'

const ViewProducts = async ({ nameCategory }: { nameCategory: string }) => {

    const ProductsByCategory = await getData(nameCategory);


    return (

        <div>
            <div className="gap-5 grid grid-cols-2 sm:grid-cols-4">
                {ProductsByCategory.products.map((item, index) => (
                    <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
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
                ))}
            </div>
        </div>
    )
}
const getData = async (nameCategories: string) => {
    const ProductsByCategory: TGetDataCategory = await productService.getProductsByCategory({
        name: nameCategories,
    });
    return ProductsByCategory;

};


export default ViewProducts
