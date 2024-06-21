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
import { useEffect, useState } from "react";
import { productService } from "@/services/product";

const BigProductCarousel = async () => {
    const Router = useRouter()
    const navigateToDetail = (id: number) => {
        Router.push(`/product/${id}`)
    }
    const [productsTop, setproductsTop] = useState<TGetDataCategory>()
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {

        const getData = async () => {
            const productsTop: TGetDataCategory = await productService.getProductsByCategory({
                name: "tops",
            });
            setproductsTop(productsTop)
            return productsTop
        };
        // Fonction de gestionnaire de redimensionnement
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Ajout de l'écouteur d'événement de redimensionnement
        window.addEventListener('resize', handleResize);

        // Appel initial du gestionnaire de redimensionnement pour définir la taille initiale
        handleResize();
        getData()

        // Nettoyage de l'écouteur d'événement lors du démontage du composant
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // [] assure que useEffect ne s'exécute qu'une seule fois à l'initialisation


    return (
        <div className=" border border-blue-400 rounded-[10px]">
            <div>
                {windowSize.width}
            </div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={windowSize.width <= 898 ? 2 : 3}
                centeredSlides={true}
                autoplay
                navigation
                loop
                pagination={{ clickable: true }}
                //onSwiper={(swiper) => console.log(swiper)}
                preventClicksPropagation={true}
                onSlideChange={() => null}
            >
                {productsTop?.products.map((products) => (

                    <SwiperSlide key={products.id} className=" md:p-11" onClick={() => navigateToDetail(products.id)}>
                        <ProductCard data={products} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BigProductCarousel;
