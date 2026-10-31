import { ArrowRightIcon, DiamondsFourIcon } from "@phosphor-icons/react";


export function FloatingFooter() {
    return (
        <div
            className="rounded-full px-2 fixed bottom-2 left-1/2 -translate-x-1/2 flex place-content-between items-center w-[95%] max-w-lg z-50"
            style={{
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(12, 12, 15, 0.92)",
            }}
        >
            <div className="flex gap-2">
                <DiamondsFourIcon
                    weight="fill"
                    size={15}
                    color="#fbbf24"
                />
                <p className="text-[10px]" style={{ color: "#a3a3a3" }}>Powered by <span className="font-bold" style={{ color: "#fafafa" }}>Studio Index</span></p>
            </div>
            <button
                className="rounded-[7px] text-[10px] font-bold py-0.5 ml-[clamp(1.3px,5vw,10px)] my-1 flex flex-1 justify-center"
                style={{
                    color: "#fbbf24",
                    background: "rgba(251, 191, 36, 0.14)",
                    border: "2px solid rgba(251, 191, 36, 0.4)",

                }}
            >Launch Your Store <ArrowRightIcon
                    size={20}
                    color="#fbbf24"
                    className="inline"
                />
            </button>
        </div>
    )
}