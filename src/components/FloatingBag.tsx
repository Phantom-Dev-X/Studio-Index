import { BagIcon } from "@phosphor-icons/react";

export function FloatingBag() {
    return (
        <div
            className="fixed bottom-12 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg cursor-pointer transition-all"
            style={{
                background: "#18181c",
                color: "#fafafa",
                border: "1px solid #fbbf24",
            }}
            onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.background = "#78350f";
                (e.currentTarget as HTMLDivElement).style.transform = "scale(1.1)";
            }}
            onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.background = "#18181c";
                (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
            }}
        >
            <BagIcon size={15} weight="bold" color="#fbbf24" />
            <span className="text-[10px] font-medium">Bag</span>
            <span
                className="w-4 h-4 text-xs font-bold rounded-full flex items-center justify-center"
                style={{ background: "#fbbf24", color: "#78350f" }}
            >
                0
            </span>
        </div>
    );
}
