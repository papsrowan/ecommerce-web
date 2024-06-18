import Accueil from "@/components/pages/accueil";
import SectionProducts from "@/components/SectionProduct.tsx/sectionProducts";
import BigProductCarousel from "@/components/shared/bigProductCarousel";
import Cart from "@/components/shared/cart";
import SectionHeader from "@/components/shared/SectionHeader";
import { AppProvider } from "@/context/appContext";
import { productService } from "@/services/product";
import { TGetDataCategory } from "@/utils/type";

export default async function Home() {

  return (
    <AppProvider >
      <Accueil />
    </AppProvider>
  );



};
