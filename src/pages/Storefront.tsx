import { useParams } from "react-router-dom"
import { Header } from "../components/header"
import { SellersInfo } from "../components/SellersInfo";
import { Products } from "../components/Products";
import { FloatingBag } from "../components/FloatingBag";
import { FloatingFooter } from "../components/FloatingFooter";
import { Footer } from "../components/footer/Footer";


export default function Storefront({ ProductsArray }: { ProductsArray: any[] }) {
  const { username } = useParams();
  console.log(username);
  return (
    <div className="flex flex-col">
      <div className="w-[95%]  mx-auto flex flex-col items-center overflow-x-hidden">
        <Header />
        <SellersInfo />
        <Products ProductsArray={ProductsArray} />
        <FloatingBag />
        <FloatingFooter />

      </div>
      <Footer />
    </div>

  )
}