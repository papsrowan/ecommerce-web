"use client"
import "swiper/css";
import { TGetDataCategory } from "@/utils/type";
import 'swiper/css/effect-fade';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./productCard";
import { useRouter } from "next/navigation";

const BigProductCarousel = async ({ productsTop }: { productsTop: TGetDataCategory }) => {
    const Router = useRouter()
    const navigateToDetail = (id: number) => {
        Router.push(`/product/${id}`)
    }

    return (
        <div className=" border border-blue-400 rounded-[10px]">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={100}
                slidesPerView={3}
                centeredSlides={true}
                autoplay
                navigation
                loop

                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                preventClicksPropagation={true}
                onSlideChange={() => null}
                className="mx-auto"
            >
                {productsTop.products.map((products) => (

                    <SwiperSlide key={products.id} className=" p-11 cursor-pointer" onClick={() => navigateToDetail(products.id)}>
                        <ProductCard data={products} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BigProductCarousel;
