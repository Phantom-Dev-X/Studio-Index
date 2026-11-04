import { useParams } from "react-router-dom"
import { Header } from "../components/storefront/header"
import { SellersInfo } from "../components/storefront/SellersInfo";
import { Products } from "../components/storefront/Products";
import { FloatingBag } from "../components/storefront/FloatingBag";
import { FloatingFooter } from "../components/storefront/FloatingFooter";
import { Footer } from "../components/storefront/footer/Footer";
import { useState, useEffect } from "react";
import { getStoreByUserName } from '../services/storefront/getStoreByUsername';
import BagPage from "../components/storefront/BagPage";


export default function Storefront() {
  const [ProductsArray, setProductsArray] = useState<any[] | null>(null);
  const [isBagOpen, setIsBagOpen] = useState<boolean>(false);
  const { username } = useParams();
  const [count, setCount] = useState(0)


  function updateCount() {
    const finalCount = JSON.parse(localStorage.getItem('cart'));
    if (!finalCount) {
      setCount(0)
    } else {
      let localCount = 0
      finalCount.map((item: { quantity?: number }) => localCount += item.quantity)
      setCount(localCount)
    }
    return (() => {
      window.removeEventListener('cartUpdated', updateCount)
    })
  }

  useEffect(() => {

    getStoreByUserName(setProductsArray, username)

  }, [])


  return (
    (ProductsArray ?
      <div className="flex flex-col relative w-full">
        <Header />

        {/* Main centered container for the storefront */}
        <div className="w-[95%] max-w-[1180px] mx-auto flex flex-col items-center pt-16 relative">
          <SellersInfo username={username} setIsBagOpen={setIsBagOpen} count={count} />
          <Products ProductsArray={ProductsArray} />

          {/* Floating actions container pinned relative to the max-w-[1180px] content div */}
          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[95%] max-w-[1180px] pointer-events-none z-45 h-0">
            <FloatingBag onClick={() => setIsBagOpen(true)} count={count} updateCount={updateCount} />
          </div>

          <FloatingFooter />
        </div>
        <Footer />
        <BagPage isOpen={isBagOpen} onClose={() => setIsBagOpen(false)} />
      </div> : (
        <div
          className='flex w-screen h-screen text-center justify-center items-center text-amber-50 animate-pulse'
        >
          loading StoreFront...
        </div>)

    )

  )
}