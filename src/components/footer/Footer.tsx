import { ArrowRightIcon, ShieldCheckIcon } from "@phosphor-icons/react/dist/ssr";
import { AnonymousCard } from "./AnonymousCard";


export function Footer() {
    return (
        <div className="w-screen bg-footer-glow  tmq:border-t-2  tmq:border-[#362f2f] mt-9 flex justify-center">
            <div className="w-full max-w-[1000px] py-8 rounded-2xl relative flex flex-col items-center gap-6">

                <div
                    className="flex flex-col items-start gap-2 pt-7 rounded-2xl w-[95%] overflow-hidden"
                    style={{ background: "rgba(22, 22, 27, 0.9)", border: "1px solid rgba(255,255,255,0.09)" }}
                >
                    <p
                        className="text-[10.5px] px-5 inline-flex tracking-[1.26px]"
                        style={{ color: "#10b981" }}
                    >● 60-DAY PRO REVERSE TRIAL OPEN</p>


                    <div className="flex flex-col tmq:place-content-between tmq:flex-row tmq:items-center w-full">


                        <div className="px-4 tmq:max-w-[400px] tmq:px-2 sm:px-8 mb-6 tmq:w-[50%] w-full">
                            <p className="text-[18px] tmq:text-[15px] font-extrabold tracking-tight" style={{ color: "#fafafa" }}>Have A Lucrative Business In Mind? Claim Your Luxury Link.</p>
                            <p className="text-[13px] mt-1" style={{ color: "#a3a3a3" }}>Turn chaotic DMs into structured Whatapp Invioce in 60 seconds.</p>
                        </div>


                        <div className="px-3 justify-center flex-wrap tmq:max-w-[450px] tmq:px-0 tmq:pr-2 sm:px-6 w-full">
                            <div
                                className="flex flex-wrap sm:flex-nowrap flex-1 rounded-[10px] p-1 gap-1 items-center w-full"
                                style={{ border: "1px solid #fbbf24", background: "#0e0e12" }}
                            >
                                <div className="flex items-center pl-2 min-w-[210px] flex-1">
                                    <span className="text-[13px] shrink-0" style={{ color: "#737373" }}>studioindex.ng/</span>
                                    <input
                                        type="text"
                                        placeholder="your_brand_name"
                                        className="border-0 h-8 text-[13px] inline px-1 w-full min-w-0 bg-transparent focus:outline-none"
                                        style={{ color: "#a3a3a3" }}
                                    />
                                </div>
                                <div className="w-full flex">
                                    <button
                                        className="w-full flex-1 sm:w-auto px-4 py-2 sm:py-1.5 rounded-[8px] font-bold text-[12.5px] whitespace-nowrap shrink-0"
                                        style={{
                                            background: "#f59e0b", color: "#0a0a0a",
                                        }}
                                    >Reserve Handle <ArrowRightIcon color="#0a0a0a" className="inline ml-1" /></button>
                                </div>
                            </div>
                            <div className="text-xs pb-6 pt-2 px-4 sm:px-8" style={{ color: "#10b981" }}>
                                ✓ studioindex.ng/your_brand is available! 60-Day Pro Trial ready to activate.
                            </div>
                        </div>

                    </div>


                </div>

                {/* Left Bento Card: Merchant Infrastructure & Settlement Node */}
                <div className=" flex flex-col items-center tmq:flex-row gap-5 tmq:items-start tmq:justify-center w-full ">
                    <div
                        className="w-[95%] rounded-[22px] p-6 flex flex-col justify-between gap-5"
                        style={{ background: "rgba(16, 16, 20, 0.78)", border: "1px solid rgba(255,255,255,0.07)" }}
                    >

                        {/* Header Row */}
                        <div
                            className="flex items-center justify-between gap-3 pb-3.5"
                            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                        >
                            <span className="text-[11px] font-mono uppercase tracking-widest font-bold" style={{ color: "#d4d4d8" }}>
                                VERIFIED COMMERCE ARCHITECTURE
                            </span>
                            <span
                                className="font-mono text-[7px] w-[90px] flex justify-center py-2 rounded-[9px]"
                                style={{
                                    color: "#fbbf24",
                                    background: "rgba(251, 191, 36, 0.1)",
                                    border: "1px solid rgba(251, 191, 36, 0.25)",
                                }}
                            >
                                RLS SECURED
                            </span>
                        </div>

                        {/* Live Status / Metrics Grid */}
                        <div className="flex gap-5">
                            <div
                                className="h-fit p-1.5 rounded-[7px]"
                                style={{ border: "1px solid rgba(16, 185, 129, 0.3)", background: "rgba(16, 185, 129, 0.14)" }}
                            >
                                <ShieldCheckIcon size={15} weight="fill" color="#10b981" />
                            </div>
                            <div>
                                <p className="text-[14px] font-bold" style={{ color: "#fafafa" }}>Instant Invoice</p>
                                <p className="text-[10px]" style={{ color: "#a3a3a3" }}>Auto-formats cart items, Naira totals & delivery zones into one WhatsApp dispatch.</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div
                                className="h-fit p-1.5 rounded-[7px]"
                                style={{ border: "1px solid rgba(16, 185, 129, 0.3)", background: "rgba(16, 185, 129, 0.14)" }}
                            >
                                <ShieldCheckIcon size={15} weight="fill" color="#10b981" />
                            </div>
                            <div>
                                <p className="text-[14px] font-bold" style={{ color: "#fafafa" }}> Human Trust First</p>
                                <p className="text-[10px]" style={{ color: "#a3a3a3" }}>Buyers verify availability & delivery directly with the merchant before paying..</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div
                                className="h-fit p-1.5 rounded-[7px]"
                                style={{ border: "1px solid rgba(16, 185, 129, 0.3)", background: "rgba(16, 185, 129, 0.14)" }}
                            >
                                <ShieldCheckIcon size={15} weight="fill" color="#10b981" />
                            </div>
                            <div>
                                <p className="text-[14px] font-bold" style={{ color: "#fafafa" }}>0% Middleman Cut</p>
                                <p className="text-[10px]" style={{ color: "#a3a3a3" }}>Merchants keep 100% of every Naira earned with instant local bank settlement.</p>
                            </div>
                        </div>

                        {/* Bottom Feature List */}
                        <div
                            className="flex flex-col gap-2.5 pt-3.5"
                            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                        >

                            <div className="flex items-center justify-between text-xs">
                                <span className="flex items-center text-[10px] gap-2" style={{ color: "#a3a3a3" }}>
                                    <span className="w-1.25 h-1.25 rounded-full" style={{ background: "#fbbf24" }}></span>
                                    WhatsApp Webhook Dispatch Engine
                                </span>
                                <span className="font-mono text-[10.5px]" style={{ color: "#10b981" }}>ONLINE</span>
                            </div>

                            <div className="flex items-center text-[10px] justify-between text-xs">
                                <span className="flex items-center gap-2" style={{ color: "#a3a3a3" }}>
                                    <span className="w-1.25 h-1.25 rounded-full" style={{ background: "#fbbf24" }}></span>
                                    Whatapp Multipurpose Bot
                                </span>
                                <span className="font-mono text-[10.5px]" style={{ color: "#10b981" }}>ACTIVE</span>
                            </div>

                        </div>
                    </div>
                    <AnonymousCard />
                </div>
                <div
                    className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] font-sans"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.06)", color: "#737373" }}
                >
                    <p>© {new Date().getFullYear()} Studio Index Inc. All rights reserved.</p>
                    <p className="font-mono text-[10px]" style={{ color: "#a3a3a3" }}>
                        CRAFTED WITH REACT &amp; TAILWIND <span style={{ color: "#fbbf24" }}>◆</span> LAGOS, NG
                    </p>
                </div>
            </div>



        </div>
    )
}