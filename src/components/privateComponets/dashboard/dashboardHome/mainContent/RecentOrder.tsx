import { ArrowRightIcon, BagIcon } from "@phosphor-icons/react";

export default function RecentOrder() {
  return (
    <div className="min-[529px]:col-span-1 min-[1492px]:col-span-4 rounded-2xl bg-[#110f0c] border border-[#231e15] p-5 sm:p-6 lg:p-7 flex flex-col justify-between min-h-[300px] sm:min-h-[340px] lg:min-h-[380px]">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-[#1c1811]">
        <div className="flex items-center gap-2.5">
          <span className="text-[#f6b91c]">
            <BagIcon size={24} weight="fill" />
          </span>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white tracking-tight">
            Recent Orders
          </h2>
        </div>
        <button
          type="button"
          className="flex items-center gap-1.5 text-xs sm:text-sm md:text-base font-semibold text-[#f6b91c] hover:text-[#ffd35c] transition-colors cursor-pointer group"
        >
          <span>View All</span>
          <ArrowRightIcon
            size={15}
            weight="bold"
            className="transition-transform group-hover:translate-x-0.5"
          />
        </button>
      </div>

      {/* Empty State - ~40% width scaling nicely */}
      <div className="flex-1 flex flex-col items-center justify-center py-4 text-center">
        <div className="relative mb-3 flex items-center justify-center w-full">
          <div className="absolute w-[45%] h-[45%] min-w-[110px] min-h-[110px] bg-[#f6b91c]/10 rounded-full blur-xl pointer-events-none" />
          <img
            src="Glowing Golden Open Box.png"
            alt="No orders"
            className="w-[40%] max-w-[200px] min-w-[110px] lg:max-w-[240px] xl:max-w-[260px] h-auto object-contain relative z-10 drop-shadow-[0_8px_18px_rgba(246,185,28,0.15)]"
          />
        </div>
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
          No orders yet
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-[#88837a] mt-1 max-w-[220px] sm:max-w-[260px] leading-relaxed">
          Orders from customers will appear here.
        </p>
      </div>
    </div>
  );
}
