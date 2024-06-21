"use client"
import SectionProducts from "@/components/SectionProduct.tsx/sectionProducts";
import BigProductCarousel from "@/components/shared/bigProductCarousel";
import SectionHeader from "@/components/shared/SectionHeader";
import { productService } from "@/services/product";
import { TGetDataCategory } from "@/utils/type";
import { Flex, Text } from "@radix-ui/themes";

export default function Accueil() {
  return (
    <div>
      <div className=" flex flex-col p-10 gap-7">
        <SectionHeader title="Shop cam" />
        <div className=" mx-auto container font-bold text-2xl"> <Flex>
          <Text>Meilleurs produits en boutique</Text>
        </Flex></div>
        <BigProductCarousel/>
        <p className=" mx-auto container text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas quas quae doloribus consequatur? Sapiente placeat illum quibusdam pariatur. Exercitationem harum praesentium officiis. Doloribus quasi veniam repudiandae, fugit et eligendi!</p>

      </div>
      <div className=" p-10   flex flex-col gap-5">
        <SectionProducts />
      </div>
    </div>

  );
}

