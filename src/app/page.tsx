import Accueil from "@/components/pages/accueil";
import { AppProvider } from "@/context/appContext";

export default async function Home() {

  return (
    <AppProvider >
      <Accueil />
    </AppProvider>
  );



};
