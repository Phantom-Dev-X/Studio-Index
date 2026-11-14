import {
  ArrowRightIcon,
  CheckCircleIcon,
  CrownIcon,
} from "@phosphor-icons/react";

export default function BuyProCard() {
  return (
    <div className="hidden min-[529px]:flex lg:hidden min-[529px]:col-span-1 rounded-2xl bg-[#110f0c] border border-[#231e15] p-5 sm:p-6 md:p-7 flex-col justify-between min-h-[220px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[360px] relative overflow-hidden group hover:border-[#f6b91c]/40 transition-all duration-300">
      {/* Golden ambient glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#f6b91c]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3 md:mb-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#f6b91c]/15 border border-[#f6b91c]/25 flex items-center justify-center text-[#f6b91c] shrink-0">
            <CrownIcon className="w-5 h-5 md:w-6 md:h-6" weight="fill" />
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#f6b91c]/15 text-[#f6b91c] border border-[#f6b91c]/25 uppercase tracking-wide">
            Pro Store
          </span>
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight">
          Upgrade to Studio Pro
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-[#88837a] mt-1.5 leading-relaxed">
          Scale your store with 0% transaction fees and unlimited AI credits.
        </p>

        <div className="mt-3 md:mt-4 space-y-2">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#d4cfc5]">
            <CheckCircleIcon
              size={16}
              weight="fill"
              className="text-[#f6b91c] shrink-0"
            />
            <span>0% transaction fees on all orders</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#d4cfc5]">
            <CheckCircleIcon
              size={16}
              weight="fill"
              className="text-[#f6b91c] shrink-0"
            />
            <span>Unlimited AI product generator</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#d4cfc5]">
            <CheckCircleIcon
              size={16}
              weight="fill"
              className="text-[#f6b91c] shrink-0"
            />
            <span>Custom domain & priority support</span>
          </div>
        </div>
      </div>

      <div className="pt-4 md:pt-5 relative z-10">
        <button
          type="button"
          className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#ffd35c] to-[#f6b91c] hover:from-[#ffe082] hover:to-[#f7c033] text-[#161100] font-bold rounded-full py-2.5 sm:py-3 px-4 text-xs sm:text-sm md:text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(246,185,28,0.25)] active:scale-95 cursor-pointer"
        >
          <span>Upgrade Store</span>
          <ArrowRightIcon size={16} weight="bold" />
        </button>
      </div>
    </div>
  );
}
