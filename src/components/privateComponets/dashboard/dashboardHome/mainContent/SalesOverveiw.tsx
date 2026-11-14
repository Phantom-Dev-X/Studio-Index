import {
  ArrowRightIcon,
  CaretDownIcon,
  ChartLineUpIcon,
  RocketLaunchIcon,
} from "@phosphor-icons/react";

export default function SalesOverveiw() {
  return (
    <div className="lg:col-span-7 xl:col-span-8 rounded-2xl bg-[#110f0c] border border-[#231e15] p-5 sm:p-6 md:p-8 lg:p-9 flex flex-col justify-between min-h-[380px] sm:min-h-[440px] md:min-h-[480px] lg:min-h-[520px]">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#1c1811]">
        <div className="flex items-center gap-3">
          <span className="text-[#f6b91c]">
            <ChartLineUpIcon size={26} weight="bold" />
          </span>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white tracking-tight">
            Sales Overview
          </h2>
        </div>

        <div className="flex items-center gap-3.5 text-xs sm:text-sm md:text-base">
          <div className="flex items-center gap-2 text-[#e5e5e5] font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f6b91c]" />
            <span>This Week</span>
          </div>
          <button
            type="button"
            className="flex items-center gap-1.5 text-[#88837a] hover:text-[#d4cfc5] transition-colors cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#3a3830]" />
            <span>Last Week</span>
            <CaretDownIcon size={14} className="text-[#88837a]" />
          </button>
        </div>
      </div>

      {/* Empty State */}
      <div className="flex-1 flex flex-col items-center justify-center py-6 sm:py-8 lg:py-10 text-center relative">
        {/* Subtle Grid BG */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none rounded-xl"
          style={{
            backgroundImage:
              "linear-gradient(#2a2415 1px, transparent 1px), linear-gradient(90deg, #2a2415 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            backgroundPosition: "center center",
          }}
        />

        {/* Graphic with golden glow - ~40% width scaling nicely */}
        <div className="relative z-10 mb-4 sm:mb-5 flex items-center justify-center w-full">
          <div className="absolute w-[45%] h-[45%] min-w-[160px] min-h-[160px] bg-[#f6b91c]/15 rounded-full blur-3xl pointer-events-none" />
          <img
            src="nosalesicons.png"
            alt="No sales yet"
            className="w-[42%] max-w-[280px] min-w-[130px] lg:max-w-[340px] xl:max-w-[380px] h-auto object-contain relative z-10 drop-shadow-[0_10px_25px_rgba(246,185,28,0.22)]"
          />
        </div>

        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white relative z-10">
          No sales yet!
        </h3>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#88837a] mt-1.5 max-w-[280px] sm:max-w-md lg:max-w-lg relative z-10 leading-relaxed">
          Your sales activity will appear here once you start selling.
        </p>

        <button
          type="button"
          className="mt-5 sm:mt-6 inline-flex items-center gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-3.5 rounded-full bg-gradient-to-r from-[#ffd35c] to-[#f6b91c] hover:from-[#ffe082] hover:to-[#f7c033] text-[#161100] font-bold text-xs sm:text-sm md:text-base lg:text-lg shadow-[0_4px_20px_rgba(246,185,28,0.25)] hover:shadow-[0_6px_25px_rgba(246,185,28,0.35)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer relative z-10"
        >
          <RocketLaunchIcon size={20} weight="fill" />
          <span>Add Your First Product</span>
          <ArrowRightIcon size={16} weight="bold" />
        </button>
      </div>
    </div>
  );
}
