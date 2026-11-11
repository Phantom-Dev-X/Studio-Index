import { CrownSimpleIcon } from "@phosphor-icons/react";
import { useViewportAnimation } from "../../../hooks/useViewportAnimation";

export function AnonymousCard() {
    const cardRef = useViewportAnimation<HTMLDivElement>();

    return (
        <div
            ref={cardRef}
            className="relative isolate w-full max-w-[456px] min-h-[250px] rounded-2xl border border-[#ffd23060] p-[2px] overflow-hidden [clip-path:inset(0_round_1rem)] shadow-md md:shadow-[0_0_28px_rgba(251,191,36,0.12)]"
            style={{
                background: "radial-gradient(circle at 85% 15%, rgba(251, 191, 36, 0.12) 0%, #09090c 65%)",
            }}
        >
            {/* Rotating Conic Beam (clipped cleanly inside rounded card on all screen sizes) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                    className="w-[560px] h-[560px] shrink-0 animate-beam-spin keep-anim"
                    style={{
                        background:
                            "conic-gradient(from 0deg, transparent 0%, transparent 65%, #fbbf24 82%, #10b981 95%, transparent 100%)",
                    }}
                />
            </div>

            {/* Inner Card Content */}
            <div
                className="relative z-10 flex flex-col w-full px-7 py-5 rounded-[14px]"
                style={{
                    background: "radial-gradient(circle at 85% 15%, rgba(251, 191, 36, 0.12) 0%, #09090c 65%)",
                }}
            >
                <div className="flex place-content-between items-center">
                    <div
                        className="p-3 rounded-2xl"
                        style={{
                            background: "rgba(74, 86, 82, 0.1)",
                            border: "1px solid rgba(251, 191, 36, 0.45)",
                        }}
                    >
                        <CrownSimpleIcon size={20} weight="fill" color="#fbbf24" />
                    </div>
                    <p className="text-[12px] h-fit" style={{ color: "#737373" }}>Edition // v1</p>
                </div>
                <div>
                    <p className="mt-6 mb-3 tracking-widest text-[9px]" style={{ color: "#fbbf24" }}>Courtesy of Anonymous Devs Official</p>
                    <h2
                        className="text-[15px] font-extrabold text-2xl w-[70%] mb-1"
                        style={{
                            background: "linear-gradient(to right, #ffffff, #fde68a, #fbbf24)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            display: "inline-block",
                        }}
                    >Created by Anonymous Himself</h2>
                    <p className="font-bold text-[10px]" style={{ color: "#a3a3a3" }}>Precision-engineered storefront infrastructure built for Nigeria's top-tier social commerce founders.</p>
                </div>
                <div
                    className="h-[0.5px] mt-5 w-[80%]"
                    style={{ background: "linear-gradient(to right, transparent, #737373, transparent)" }}
                ></div>
                <div className="flex place-content-between mt-6">
                    <p className="font-bold text-[10px]" style={{ color: "#d4d4d4" }}>AUTHENTIC BUILD</p>
                    <p className="font-bold text-[10px]" style={{ color: "#fbbf24" }}>★ VERIFIED ORIGIN</p>
                </div>
            </div>
        </div>
    );
}
