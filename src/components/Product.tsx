export function Product({ ProductsArray }: { ProductsArray: any[] }) {
    return (
        <div className="w-full gap-5 flex flex-wrap justify-center">
            {ProductsArray.map((ProductProp: any) => {
                return (
                    <div
                        key={ProductProp.id}
                        className="flex flex-col items-center mb-2 w-[95%] px-2 pt-2 fmq:w-[46%] smq:w-[31%] smq:max-w-[240px] rounded-2xl"
                        style={{
                            background: "rgba(115, 107, 77, 0.13)",
                            border: "2px solid rgba(78, 73, 54, 0.59)",
                        }}
                    >
                        <div
                            className="w-full h-64 bg-top bg-cover bg-no-repeat rounded-2xl relative overflow-hidden p-1 inline"
                            style={{ backgroundImage: `url(${ProductProp.image_url || ProductProp.img})` }}
                        >
                            <div className="relative inline-flex items-center justify-center px-2 animate-pulse py-1 text-center ">
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
                        <p className="py-2 text-center w-45" style={{ color: "#fafafa" }}>{ProductProp.name}</p>
                        <button
                            className="rounded-[5px] py-1 w-[90%] my-2 font-semibold text-sm"
                            style={{ background: "white", color: "#0a0a0a" }}
                        >+ add to cart</button>

                    </div>
                )

            })}

        </div>
    );
}