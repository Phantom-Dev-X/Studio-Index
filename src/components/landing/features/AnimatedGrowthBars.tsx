import type { CSSProperties } from "react";

export interface GrowthBarItem {
    h: number;
    t: number;
}

interface AnimatedGrowthBarsProps {
    bars: GrowthBarItem[];
    className?: string;
    gapClass?: string;
}

export function AnimatedGrowthBars({
    bars,
    className = "h-[110px] sm:h-[130px] w-full",
    gapClass = "gap-2 sm:gap-[10px]",
}: AnimatedGrowthBarsProps) {
    return (
        <div className={`flex items-end ${gapClass} ${className}`}>
            {bars.map((bar, index) => (
                <i
                    key={index}
                    className="flex-1 bg-gradient-to-b from-[#ffd65f] to-[#a86a0866] origin-bottom rounded-t-lg rounded-b-[3px] animate-growth-bar"
                    style={{
                        height: `${bar.h}%`,
                        ["--bar-delay" as string]: `${bar.t}s`,
                    } as CSSProperties}
                />
            ))}
        </div>
    );
}
