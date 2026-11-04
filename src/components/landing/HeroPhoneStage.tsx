import {
  LightningIcon,
  ShoppingBagIcon,
  TrendUpIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";

export function HeroPhoneStage() {
  return (
    <div className="relative w-full h-[410px] sm:h-[440px] lg:h-[460px] flex items-center justify-center select-none overflow-visible">
      {/* ============================================================
          LAYER 1: Ambient Golden Aura & Celestial Rays
          ============================================================ */}
      <svg
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] sm:w-[640px] h-[520px] sm:h-[600px] z-0 overflow-visible opacity-90"
        viewBox="0 0 640 600"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="ah">
            <stop offset="0" stopColor="#f7b92c" stopOpacity=".55" />
            <stop offset=".55" stopColor="#f7b92c" stopOpacity=".16" />
            <stop offset="1" stopColor="#f7b92c" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ab" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f7b92c" stopOpacity=".1" />
            <stop offset=".45" stopColor="#ffe7a0" />
            <stop offset=".75" stopColor="#ffc83d" />
            <stop offset="1" stopColor="#f3a81a" stopOpacity=".5" />
          </linearGradient>
          <filter id="bl" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
          <filter id="bs" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
          <linearGradient id="rg" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#ffd65f" stopOpacity=".42" />
            <stop offset="1" stopColor="#ffd65f" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="bk">
            <stop offset="0" stopColor="#ffe7a0" stopOpacity=".95" />
            <stop offset="1" stopColor="#f7b92c" stopOpacity="0" />
          </radialGradient>
          <polygon id="rr" points="0,0 -22,-310 22,-310" fill="url(#rg)" />
        </defs>

        {/* Central Ambient Glow */}
        <ellipse cx="320" cy="300" rx="310" ry="290" fill="url(#ah)" />

        {/* Radiating Light Beams */}
        <g transform="translate(320 300)" filter="url(#bs)">
          <use href="#rr" transform="rotate(-72)" />
          <use href="#rr" transform="rotate(-44) scale(.6 1)" />
          <use href="#rr" transform="rotate(-14)" />
          <use href="#rr" transform="rotate(20) scale(.5 1)" />
          <use href="#rr" transform="rotate(52)" />
          <use href="#rr" transform="rotate(112) scale(.6 1)" />
          <use href="#rr" transform="rotate(158)" />
          <use href="#rr" transform="rotate(206) scale(.5 1)" />
          <use href="#rr" transform="rotate(252)" />
        </g>

        {/* Dynamic Curved Energy Streams */}
        <g fill="none" stroke="url(#ab)" strokeLinecap="round">
          <path
            d="M30 500C170 430 250 545 380 400S540 250 615 105"
            strokeWidth="24"
            filter="url(#bl)"
            opacity=".75"
          />
          <path
            d="M30 500C170 430 250 545 380 400S540 250 615 105"
            strokeWidth="2.5"
          />
          <path
            d="M15 440C150 390 270 505 400 340S560 200 630 70"
            strokeWidth="1.5"
            opacity=".6"
          />
        </g>

        {/* Glowing Spheres & Particles */}
        <g filter="url(#bs)">
          <circle cx="120" cy="260" r="16" fill="url(#bk)" />
          <circle cx="525" cy="205" r="22" fill="url(#bk)" />
          <circle cx="175" cy="405" r="10" fill="url(#bk)" />
          <circle cx="505" cy="385" r="12" fill="url(#bk)" />
          <circle cx="262" cy="72" r="9" fill="url(#bk)" />
        </g>

        {/* Starburst Crosses */}
        <path
          d="M566 440l4 14 14 4-14 4-4 14-4-14-14-4 14-4z"
          fill="#ffd65f"
          filter="url(#bs)"
        />
        <path
          d="M566 440l3 11 11 3-11 3-3 11-3-11-11-3 11-3z"
          fill="#fff3c4"
        />
        <circle cx="110" cy="170" r="2.5" fill="#ffe7a0" />
        <circle cx="150" cy="470" r="2" fill="#ffd65f" />
        <circle cx="540" cy="120" r="2" fill="#ffe7a0" />
        <circle cx="485" cy="520" r="1.5" fill="#ffd65f" />
      </svg>

      {/* ============================================================
          LAYER 3: Floating Frosted-Glass Badges
          ============================================================ */}

      {/* Badge 1: Top Right - Create Store in Seconds */}
      <div className="absolute z-20 top-4 sm:top-6 right-1 sm:right-2 lg:-right-4 flex flex-col gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-landing-line bg-[var(--landing-glass)] backdrop-blur-md text-[11.5px] sm:text-[14px] font-medium leading-snug text-landing-fg shadow-[0_12px_32px_rgba(0,0,0,0.5)] animate-float-badge1">
        <LightningIcon size={19} weight="fill" className="text-landing-gold sm:hidden" />
        <LightningIcon size={24} weight="fill" className="text-landing-gold hidden sm:block" />
        <p className="leading-tight">
          Create Store
          <br />
          <span className="text-landing-mut text-[10.5px] sm:text-xs">in Seconds</span>
        </p>
      </div>

      {/* Badge 2: Mid/Bottom Right - Get Orders on WhatsApp */}
      <div className="absolute z-20 bottom-14 sm:bottom-16 right-0 sm:right-1 lg:-right-6 flex flex-col gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-landing-line bg-[var(--landing-glass)] backdrop-blur-md text-[11.5px] sm:text-[14px] font-medium leading-snug text-landing-fg shadow-[0_12px_32px_rgba(0,0,0,0.5)] animate-float-badge2">
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#25d366] flex items-center justify-center shadow-md">
          <WhatsappLogoIcon size={14} weight="fill" className="text-white sm:hidden" />
          <WhatsappLogoIcon size={18} weight="fill" className="text-white hidden sm:block" />
        </div>
        <p className="leading-tight">
          Get Orders
          <br />
          <span className="text-landing-mut text-[10.5px] sm:text-xs">on WhatsApp</span>
        </p>
      </div>

      {/* Badge 3: Bottom Left - Grow Your Business */}
      <div className="absolute z-20 bottom-10 sm:bottom-14 left-1 sm:left-2 lg:-left-6 flex flex-col gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-landing-line bg-[var(--landing-glass)] backdrop-blur-md text-[11.5px] sm:text-[14px] font-medium leading-snug text-landing-fg shadow-[0_12px_32px_rgba(0,0,0,0.5)] animate-float-badge3">
        <TrendUpIcon size={19} weight="bold" className="text-landing-gold sm:hidden" />
        <TrendUpIcon size={24} weight="bold" className="text-landing-gold hidden sm:block" />
        <p className="leading-tight">
          Grow Your
          <br />
          <span className="text-landing-mut text-[10.5px] sm:text-xs">Business</span>
        </p>
      </div>

      {/* ============================================================
          LAYER 2: 3D iPhone Device Mockup
          ============================================================ */}
      <div className="relative z-10 w-[214px] h-[440px] rounded-[40px] p-[7px] bg-[linear-gradient(140deg,#6a6a6a,#161616_35%,#3a3a3a_70%,#111)] shadow-[4px_3px_0_#2a2a2a,8px_6px_0_#1a1a1a,12px_9px_0_#0d0d0d,inset_0_0_0_1.5px_#8a8a8a,0_40px_80px_rgba(0,0,0,0.85),0_0_65px_rgba(247,185,44,0.32)] animate-float-phone">
        {/* Side Hardware Lock/Volume Button */}
        <div className="absolute -right-[3px] top-[110px] w-[3px] h-[52px] rounded-r-[2px] bg-[#555]" />

        {/* Screen Container */}
        <div className="relative h-full rounded-[33px] overflow-hidden bg-[#f3f3f3] text-[#111] flex flex-col font-poppins">
          {/* Dynamic Island Camera Pill */}
          <div className="w-[58px] h-[16px] rounded-[9px] bg-black absolute left-1/2 top-[7px] -translate-x-1/2 z-30" />

          {/* iOS Status Bar */}
          <div className="flex justify-between items-center px-4 pt-1 pb-0.5 text-[8.5px] font-semibold bg-white text-black h-[28px] shrink-0">
            <span>9:01</span>
            <span className="tracking-tighter">▂▄▆ ▭</span>
          </div>

          {/* In-App Store Header Bar */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-[9px] font-semibold border-b border-black/5 shrink-0">
            <img
              src="/StudioIndex.png"
              alt="Logo"
              className="h-3.5 w-auto object-contain"
            />
            <span className="tracking-tight">Your Store</span>
            <div className="ml-auto flex items-center gap-1 text-[8.5px]">
              <ShoppingBagIcon size={12} weight="bold" />
              <span className="w-3.5 h-3.5 rounded-full bg-landing-gold text-black flex items-center justify-center text-[7.5px] font-bold">
                1
              </span>
            </div>
          </div>

          {/* Storefront Hero Collection Banner */}
          <div className="relative h-[196px] bg-gradient-to-b from-[#d4d4d4] to-[#6f6f6f] text-white p-3.5 flex flex-col justify-end overflow-hidden shrink-0">
            {/* Ambient Silhouette */}
            <svg
              className="absolute right-[-4px] bottom-0 h-[150px] opacity-90 pointer-events-none"
              viewBox="0 0 130 170"
            >
              <path
                d="M70 6c20 0 32 14 32 34 0 11-4 18-9 22 16 6 26 20 28 44l4 64H14l4-64c2-24 12-38 28-44-5-4-9-11-9-22C37 20 50 6 70 6z"
                fill="#141414"
              />
            </svg>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <h4 className="font-semibold italic text-[18px] leading-[1.05] tracking-tight">
                Premium
                <br />
                Collection
              </h4>
              <p className="text-[7.5px] italic text-white/80 my-1.5">
                Shop the latest trends
              </p>
              <span className="inline-block bg-gradient-gold text-[#1a1204] text-[7.5px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                Shop Now →
              </span>
            </div>
          </div>

          {/* Mini Store Products Grid */}
          <div className="flex-1 grid grid-cols-2 gap-1.5 p-2 bg-[#f6f6f6] text-center font-bold text-[8.5px]">
            {/* Mini Product 1 */}
            <div className="bg-white rounded-lg p-1.5 flex flex-col items-center justify-between shadow-sm">
              <svg className="h-[46px] w-auto my-0.5" viewBox="0 0 60 50">
                <path
                  d="M18 3L3 11l5 10 7-3v29h30V18l7 3 5-10-15-8c-2 5-6 7-12 7S20 8 18 3z"
                  fill="#f9f9f9"
                  stroke="#c9c9c9"
                />
                <circle cx="30" cy="22" r="3" fill="#222" />
              </svg>
              <span className="text-[8px] text-black font-semibold">
                ₦15,000
              </span>
              <span className="w-full mt-1 bg-[#161616] text-white text-[6.5px] py-0.5 rounded-full font-medium">
                Add to Cart
              </span>
            </div>

            {/* Mini Product 2 */}
            <div className="bg-white rounded-lg p-1.5 flex flex-col items-center justify-between shadow-sm">
              <svg className="h-[46px] w-auto my-0.5" viewBox="0 0 60 50">
                <path
                  d="M5 34C4 17 16 8 31 8c14 0 23 9 25 22-8-3-17-3-26 0-9 3-19 5-25 4z"
                  fill="#141414"
                />
                <path
                  d="M30 31c10-3 21-2 30 4-4 4-12 4-22 2z"
                  fill="#f7b92c"
                />
                <path
                  d="M20 22c6-3 12-3 18-1"
                  stroke="#fff"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <span className="text-[8px] text-black font-semibold">
                ₦12,000
              </span>
              <span className="w-full mt-1 bg-[#161616] text-white text-[6.5px] py-0.5 rounded-full font-medium">
                Add to Cart
              </span>
            </div>
          </div>

          {/* Screen Diagonal Light Reflection Sheen */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(120deg,rgba(255,255,255,0.22)_0%,transparent_38%)] z-20" />
        </div>
      </div>
    </div>
  );
}

