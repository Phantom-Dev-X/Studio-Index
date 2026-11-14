import { SquaresFourIcon } from "@phosphor-icons/react";

export function ProductHeader({ itemCount = 0 }: { itemCount?: number }) {
    return (
        <div className="flex w-[90%] mb-3 justify-between">
            <div className="flex w-fit">
                <SquaresFourIcon size={20} color="#fbbf24" />
                <p className="text-gray-50 font-medium pl-1 text-[15px]">Collections</p>
            </div>
            <p className="border text-[#a3a3a3] text-[12px] border-[#a3a3a350] rounded-4xl px-3.5 ">{itemCount} items</p>
        </div>

    )
}