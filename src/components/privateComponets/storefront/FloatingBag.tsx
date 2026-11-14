import { BagIcon } from "@phosphor-icons/react";
import { useEffect } from "react";

export function FloatingBag({ onClick, updateCount, count }: { onClick?: () => void, updateCount?: () => void, count?: number, setCount?: () => void } = {}) {

    useEffect(() => {
        if (updateCount) {
            window.addEventListener('cartUpdated', updateCount)
            updateCount()
            return () => {
                window.removeEventListener('cartUpdated', updateCount)
            }
        }
    }, [updateCount])
    return (
        <button
            type="button"
            onClick={onClick}
            className="absolute bottom-16 right-2 sm:right-6 pointer-events-auto flex items-center gap-2.5 px-4 py-2.5 rounded-full w-fit max-w-xs whitespace-nowrap cursor-pointer transition-all duration-300 ease-out"
            style={{
                background: "linear-gradient(135deg, #18181c 0%, #0a0a0c 100%)",
                color: "#fafafa",
                border: "1px solid #fbbf24",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.85), 0 0 20px rgba(251, 191, 36, 0.2)",
            }}
            onMouseEnter={e => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.transform = "translateY(-4px) scale(1.08)";
                el.style.boxShadow = "0 20px 42px rgba(0, 0, 0, 0.95), 0 0 28px rgba(251, 191, 36, 0.4)";
            }}
            onMouseLeave={e => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.transform = "translateY(0) scale(1)";
                el.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.85), 0 0 20px rgba(251, 191, 36, 0.2)";
            }}
            aria-label="View Shopping Bag"
        >
            <BagIcon size={18} weight="bold" color="#fbbf24" />
            <span className="text-[12px] font-bold">Bag</span>
            <span
                className="min-w-5 h-5 px-1.5 text-[11px] font-mono font-bold rounded-full flex items-center justify-center"
                style={{ background: "#fbbf24", color: "#0a0a0a" }}
            >
                {count}
            </span>
        </button>
    );
}
