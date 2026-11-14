import { ArrowUpIcon } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { Sparkline } from "../dashboardHome/mainContent/sparklinesGraph";

export interface StatCardData {
  label: string;
  value: string;
  change: string;
  color: string;
  icon: Icon;
  sparkData: number[];
  gradientId: string;
}

export function StatCard({
  label,
  value,
  change,
  color,
  icon: IconComp,
  sparkData,
  gradientId,
}: StatCardData) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-[#110f0c] border border-[#231e15] p-4 sm:p-5 md:p-6 flex flex-col justify-between min-h-[120px] sm:min-h-[140px] md:min-h-[150px] group transition-all duration-300"
      style={{
        borderColor: undefined,
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderColor = `${color}66`)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = "#231e15")
      }
    >
      <div className="flex items-start gap-3 sm:gap-4 relative z-10">
        <div
          className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0"
          style={{
            backgroundColor: `${color}26`,
            borderWidth: 1,
            borderColor: `${color}40`,
            boxShadow: `0 0 14px ${color}33`,
          }}
        >
          <IconComp
            className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6"
            weight="fill"
            style={{ color }}
          />
        </div>
        <div className="min-w-0 flex-1">
          <span className="text-xs sm:text-sm font-medium text-[#88837a] block truncate">
            {label}
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight mt-0.5 truncate">
            {value}
          </h3>
          <div
            className="flex items-center gap-1 text-xs sm:text-sm font-medium mt-0.5"
            style={{ color: `${color}cc` }}
          >
            <ArrowUpIcon size={12} weight="bold" />
            <span>{change}</span>
          </div>
        </div>
      </div>

      {/* Bottom sparkline */}
      <div className="absolute right-0 bottom-0 w-[55%] sm:w-[50%] h-[40px] sm:h-[50px] md:h-[60px] pointer-events-none overflow-hidden">
        <Sparkline data={sparkData} color={color} gradientId={gradientId} />
      </div>
    </div>
  );
}

