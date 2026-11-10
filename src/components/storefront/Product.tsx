import { PlusIcon } from "@phosphor-icons/react";
import { addToCart } from "../../services/storefront/cartService";

export function Product({ ProductsArray }: { ProductsArray: any[] }) {
    return (
        <div className="w-full gap-5 flex flex-wrap justify-center">
            {ProductsArray.map((ProductProp: any) => {
                return (
                    <div
                        key={ProductProp.id}
                        className="group flex flex-col items-center mb-2 w-[95%] px-2 pt-2 fmq:w-[46%] smq:w-[31%] smq:max-w-[240px] rounded-2xl transition-colors duration-200 md:transition-all md:duration-300 md:hover:scale-[1.03] md:hover:shadow-xl hover:border-amber-400/60"
                        style={{
                            background: "rgba(115, 107, 77, 0.13)",
                            border: "2px solid rgba(78, 73, 54, 0.59)",
                        }}
                    >
                        <div
                            className="w-full h-64 rounded-2xl relative overflow-hidden p-1"
                        >
                            <img
                                src={ProductProp.image_url || ProductProp.img}
                                alt={ProductProp.name}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 ease-out md:group-hover:scale-110"
                            />
                            <div className="absolute top-2 left-2 inline-flex items-center justify-center px-2 py-1 text-center pointer-events-none">
                                {/* SVG background: Top & bottom curve inward, left & right edges are rounded-full */}
                                <svg
                                    className="absolute inset-0 w-full h-full top-0.5 "
                                    viewBox="0 0 160 40"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        /* 
                                          M 20 0         -> Starts top-left after the rounded curve
                                          Q 80 10 140 0  -> Top horizontal line dips inward at center (x:80, y:10)
                                          A 20 20 0 0 1 140 40 -> Perfectly rounded right cap (like rounded-full)
                                          Q 80 30 20 40  -> Bottom horizontal line dips inward at center (x:80, y:30)
                                          A 20 20 0 0 1 20 0   -> Perfectly rounded left cap (like rounded-full)
                                        */
                                        d="M 20 0 Q 80 10 140 0 A 20 20 0 0 1 140 40 Q 80 30 20 40 A 20 20 0 0 1 20 0 Z"
                                        fill="#39341f"
                                        stroke="#fbbf24"
                                        strokeWidth="1"
                                    />
                                </svg>

                                {/* Price Text */}
                                <span className="relative z-10 font-medium text-[13px] tracking-wide" style={{ color: "#fbbf24" }}>
                                    ₦{ProductProp.price.toLocaleString()}
                                </span>
                            </div>
                        </div>
                        <p
                            className="my-2 h-12 text-center w-45 line-clamp-2"
                            style={{ color: "#fafafa" }}
                            title={ProductProp.name}
                        >
                            {ProductProp.name}
                        </p>
                        <button
                            onClick={() => { addToCart(ProductProp, 'add') }}
                            className="cart-btn rounded-[5px] py-1.5 w-[90%] my-2 font-semibold text-sm transition-colors duration-200 cursor-pointer bg-white text-[#0a0a0a] hover:bg-[#fbbf24] flex items-center justify-center gap-1.5"
                        >
                            <PlusIcon size={20} weight="bold" className="rotate-element shrink-0" />
                            <span className="leading-none">add to cart</span>
                        </button>

                    </div>
                )

            })}

        </div>
    );
}