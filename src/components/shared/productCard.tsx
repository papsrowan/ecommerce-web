import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { TProduct } from "@/utils/type";

export default function ProductCard({ data }: { data: TProduct }) {


    return (
        // <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        <div className=" cursor-pointer w-[100%] overflow-visible">
            <Card shadow="lg" onPress={() => console.log("item pressed")} className=" overflow-visible">
                <CardBody className="overflow-visible p-0 flex items-center justify-center">
                    <Image
                        shadow="sm"
                        radius="lg"
                        alt={data.title}
                        className="w-full object-cover h-[250px]"
                        src={data.thumbnail}
                    />
                </CardBody>
                <CardFooter className="text-small justify-center gap-5">
                    <b>{data.title}</b>
                    <p className="text-default-500">{data.price}</p>
                </CardFooter>
            </Card>
        </div>
    );
}
