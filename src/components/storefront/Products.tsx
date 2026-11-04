import { Product } from "./Product";
import { ProductHeader } from "./ProductHeader";



export function Products({ ProductsArray }: { ProductsArray: any[] }) {
    return (
        <div className="w-full max-w-[1600px] flex flex-col items-center justify-center">
            <ProductHeader />
            <Product ProductsArray={ProductsArray} />

        </div>
    )
}