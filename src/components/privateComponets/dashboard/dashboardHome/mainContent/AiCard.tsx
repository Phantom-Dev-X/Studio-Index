import { ArrowRightIcon, SparkleIcon } from "@phosphor-icons/react";

export default function AiCard() {
  return (
    <div
      className="min-[529px]:col-span-2 min-[1492px]:col-span-4 rounded-2xl overflow-hidden relative min-h-[280px] sm:min-h-[300px] md:min-h-[320px] lg:min-h-[360px] xl:min-h-[400px] flex flex-col p-4 sm:p-5 md:p-6 lg:p-7 border border-[#231e15]"
      style={{
        backgroundImage: `url('Black and Gold Futuristic Wave Background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/35 pointer-events-none" />

      {/* Card content */}
      <div className="relative z-10 flex flex-1 items-center w-full">
        {/* Text and button */}
        <div className="relative z-20 w-[65%] sm:w-[60%] flex flex-col self-stretch min-w-0 py-1">
          <div className="text-[#f6b91c] mb-2">
            <SparkleIcon className="w-5 h-5 md:w-7 md:h-7" weight="fill" />
          </div>

          <h2 className="text-sm xs:text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white tracking-tight leading-tight">
            Let AI Work for You!
          </h2>

          <p className="text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-[#d4cfc5] mt-2 leading-relaxed">
            Generate stunning product images, write descriptions, and automate
            your business.
          </p>

          <div className="mt-5 sm:mt-6 md:mt-7">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 rounded-full bg-gradient-to-r from-[#ffd35c] to-[#f6b91c] hover:from-[#ffe082] hover:to-[#f7c033] text-[#161100] font-bold text-xs sm:text-sm md:text-base shadow-[0_4px_16px_rgba(246,185,28,0.25)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span>Explore AI Features</span>
              <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5" weight="bold" />
            </button>
          </div>
        </div>

        {/* Robot mascot */}
        <img
          src="Neon Robot with Laptop and Orbital Glow.png"
          alt="Studio Index AI Assistant"
          className="
    absolute
    right-[-2%]
    bottom-[5%]
    z-10
    w-[60%]
    sm:w-[58%]
    lg:w-[60%]
    max-w-none
    h-auto
    object-contain
    object-bottom
    drop-shadow-[0_6px_22px_rgba(100,180,255,0.35)]
    pointer-events-none
  "
        />
      </div>
    </div>
  );
}
