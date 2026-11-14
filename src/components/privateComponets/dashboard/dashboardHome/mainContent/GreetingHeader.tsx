import { CalendarBlankIcon, CaretDownIcon } from "@phosphor-icons/react";

export default function GreetingHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white flex items-center gap-2.5 tracking-tight">
          <span>Good morning, Tomi!</span>
          <span className="inline-block text-2xl sm:text-3xl lg:text-4xl">
            👋
          </span>
        </h1>
        <p className="text-[#88837a] text-xs sm:text-sm md:text-base lg:text-lg mt-1 font-normal">
          Here's what's happening with your store today.
        </p>
      </div>

      <div className="self-start sm:self-auto">
        <button
          type="button"
          className="flex items-center gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-[#110f0c] border border-[#231e15] hover:border-[#f6b91c]/40 text-[#d4cfc5] text-xs sm:text-sm md:text-base font-medium transition-all duration-200 cursor-pointer shadow-sm"
        >
          <CalendarBlankIcon size={18} className="text-[#88837a]" />
          <span>Last 7 days</span>
          <CaretDownIcon size={14} className="text-[#88837a]" />
        </button>
      </div>
    </div>
  );
}
