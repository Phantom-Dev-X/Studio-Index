import { CheckIcon, ShieldCheckIcon } from "@phosphor-icons/react";
import { ProgressRing } from "./progressRing";

interface StoreStatusItem {
  id: string;
  label: string;
  completed: boolean;
}

interface StoreStatusProps {
  storeStatusItems: StoreStatusItem[];
}

export default function StoreStatus({ storeStatusItems }: StoreStatusProps) {
  return (
    <div className="min-[529px]:col-span-1 min-[1492px]:col-span-4 rounded-2xl bg-[#110f0c] border border-[#231e15] p-5 sm:p-6 lg:p-7 flex flex-col justify-between min-h-[300px] sm:min-h-[340px] lg:min-h-[380px]">
      {/* Header */}
      <div className="flex items-center gap-2.5 pb-3.5 border-b border-[#1c1811]">
        <span className="text-[#22c55e]">
          <ShieldCheckIcon size={24} weight="fill" />
        </span>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white tracking-tight">
          Your Store Status
        </h2>
      </div>

      {/* Content: Ring on Left, Status Checklist on Right */}
      <div className="flex-1 flex items-center justify-between sm:justify-around min-[1492px]:justify-between gap-5 sm:gap-8 min-[1492px]:gap-4 py-4 sm:py-6 w-full max-w-[320px] sm:max-w-none mx-auto">
        {/* Left: Progress Ring + Label */}
        <div className="flex flex-col items-center justify-center gap-2.5 shrink-0">
          <ProgressRing progress={0} />
          <span className="text-xs sm:text-sm font-medium text-[#88837a] tracking-tight">
            Store Health
          </span>
        </div>

        {/* Right: Checklist Items */}
        <div className="flex flex-col gap-3 sm:gap-3.5 justify-center">
          {storeStatusItems.map((item) => (
            <div key={item.id} className="flex items-center gap-2.5 sm:gap-3">
              {item.completed ? (
                <span className="w-4 h-4 sm:w-[18px] sm:h-[18px] rounded-full bg-[#22c55e] text-white flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.35)]">
                  <CheckIcon size={11} weight="bold" />
                </span>
              ) : (
                <span className="w-4 h-4 sm:w-[18px] sm:h-[18px] rounded-full bg-[#26221a] text-[#555043] flex items-center justify-center shrink-0">
                  <CheckIcon size={11} weight="bold" />
                </span>
              )}
              <span
                className={`text-xs sm:text-sm font-medium tracking-tight whitespace-nowrap ${
                  item.completed ? "text-[#d4cfc5]" : "text-[#7a756c]"
                }`}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
