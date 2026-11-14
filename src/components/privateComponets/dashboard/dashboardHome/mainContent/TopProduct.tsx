import { ArrowRightIcon, TrophyIcon } from "@phosphor-icons/react";

export default function TopProduct() {
  return (
    <div className="@container lg:col-span-5 xl:col-span-4 rounded-2xl bg-[#110f0c] border border-[#231e15] p-5 sm:p-6 lg:p-7 flex flex-col justify-between min-h-[380px] sm:min-h-[440px] md:min-h-[480px] lg:min-h-[520px]">
      {/* Header */}
      <div className="flex items-center justify-between gap-2.5 pb-4 border-b border-[#1c1811]">
        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
          <span className="text-[#f6b91c] shrink-0">
            <TrophyIcon
              size={24}
              weight="fill"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </span>
          <h2 className="font-bold text-white tracking-tight whitespace-nowrap text-[clamp(0.95rem,4.2cqw,1.5rem)]">
            Top Products
          </h2>
        </div>
        <button
          type="button"
          className="shrink-0 flex items-center gap-1.5 text-xs sm:text-sm md:text-base font-semibold text-[#f6b91c] hover:text-[#ffd35c] transition-colors cursor-pointer group whitespace-nowrap"
        >
          <span>View All</span>
          <ArrowRightIcon
            size={16}
            weight="bold"
            className="transition-transform group-hover:translate-x-0.5"
          />
        </button>
      </div>

      {/* Empty State with Glowing Open Box - ~40% width scaling nicely */}
      <div className="flex-1 flex flex-col items-center justify-center py-6 sm:py-8 text-center">
        <div className="relative mb-4 flex items-center justify-center w-full">
          <div className="absolute w-[45%] h-[45%] min-w-[130px] min-h-[130px] bg-[#f6b91c]/12 rounded-full blur-2xl pointer-events-none" />
          <img
            src="Glowing Golden Open Box.png"
            alt="No products"
            className="w-[40%] max-w-[220px] min-w-[120px] lg:max-w-[260px] xl:max-w-[290px] h-auto object-contain relative z-10 drop-shadow-[0_8px_20px_rgba(246,185,28,0.18)]"
          />
        </div>
        <h3 className="font-bold text-white whitespace-nowrap text-[clamp(1rem,4.5cqw,1.65rem)]">
          No products yet
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-[#88837a] mt-1.5 max-w-[220px] sm:max-w-[280px] leading-relaxed">
          Start adding products to see your top performers here.
        </p>
        <button
          type="button"
          className="mt-5 sm:mt-6 inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-[#ffd35c] to-[#f6b91c] hover:from-[#ffe082] hover:to-[#f7c033] text-[#161100] font-bold text-xs sm:text-sm md:text-base shadow-[0_4px_16px_rgba(246,185,28,0.2)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          <span>Add Products</span>
          <ArrowRightIcon size={15} weight="bold" />
        </button>
      </div>
    </div>
  );
}
