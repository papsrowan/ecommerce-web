import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { TProduct } from "@/utils/type";

export default function ProductCard({ data }: { data: TProduct }) {


    return (
        // <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        <div>
            <Card shadow="lg" onPress={() => console.log("item pressed")}>
                <CardBody className="overflow-visible p-0">
                    <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        alt={data.title}
                        className="w-full object-cover h-[250px]"
                        src={data.thumbnail}
                    />
                </CardBody>
                <CardFooter className="text-small justify-between">
                    <b>{data.title}</b>
                    <p className="text-default-500">{data.price}</p>
                </CardFooter>
            </Card>
        </div>
    );
}
