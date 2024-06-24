import ProductComments from "@/views/ProductComments";
import AppAppBar from "../views/AppAppBar";
import AppFooter from "../views/AppFooter";
import ComienzaTuRuta from "../views/ComienzaTuRuta";
import ProductHero from "../views/ProductHero";
import ProductHowItWorks from "../views/ProductHowItWorks";
import ProductPacks from "../views/ProductPacks";

export default function Home() {
  return (
    <>
      <AppAppBar />
      <ProductHero />
      <ComienzaTuRuta />
      <ProductPacks />
      <ProductHowItWorks />
      <ProductComments />
      <AppFooter />
    </>
  )
}
