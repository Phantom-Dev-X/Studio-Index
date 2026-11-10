import { DiamondsFourIcon } from "@phosphor-icons/react";


export function Header() {
    const icon = () => {
        return (
            <DiamondsFourIcon
                weight="fill"
                color="#a3a3a3"
                size={20}
                className="inline-flex "
            />
        )
    }

    const headerText = () => {
        return (
            <h4 className="text-[10px] tracking-[2.4px] font-bold uppercase leading-none scale-y-110" style={{ color: "#d4d4d8" }}>Studio Index</h4>

        )
    }

    return (
        <header
            className="flex justify-center text-xs gap-2.5 py-4 items-center w-full fixed top-0 left-0 right-0 z-40 bg-[#0a0a0a]/95 md:bg-[#0a0a0a]/82 md:backdrop-blur-md"
            style={{
                color: "#a3a3a3",
                borderBottom: "1px solid rgba(38, 38, 38, 0.85)",
            }}
        >
            {icon()}
            {headerText()}
        </header>
    )
}