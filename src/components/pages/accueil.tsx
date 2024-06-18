"user client";
import SectionProducts from "@/components/SectionProduct.tsx/sectionProducts";
import BigProductCarousel from "@/components/shared/bigProductCarousel";
import Cart from "@/components/shared/cart";
import SectionHeader from "@/components/shared/SectionHeader";
import { productService } from "@/services/product";
import { TGetDataCategory } from "@/utils/type";

export default function Accueil() {
  return (
    <div>
      <div className=" h-screen flex flex-col bg-slate-600 p-10 gap-7">
        <SectionHeader title="Shop cam" />
        <div className=" mx-auto container font-bold text-2xl">Meilleurs produits en boutique</div>
        <BigProductCarousel/>
        <p className=" mx-auto container text-center text-slate-800">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas quas quae doloribus consequatur? Sapiente placeat illum quibusdam pariatur. Exercitationem harum praesentium officiis. Doloribus quasi veniam repudiandae, fugit et eligendi!</p>

      </div>
      <div className=" p-10  bg-gray-700 flex flex-col gap-5">
        <span>Products Top</span>
        <SectionProducts/>
      </div>
    </div>

  );
}

