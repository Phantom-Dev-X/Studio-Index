import {
  ArrowRightIcon,
  CheckIcon,
  CrownIcon,
  DiamondIcon,
} from "@phosphor-icons/react";

export function LandingPricing() {
  return (
    <section id="pricing" className="w-full pt-3 sm:pt-5 md:pt-6 pb-2 relative z-10">
      <div className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-12 items-center">
          {/* ============================================================
              Left Column: Title, Subtitle, Wavy Underline
              ============================================================ */}
          <div className="flex flex-col items-start text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-[var(--landing-badge-border)] bg-[var(--landing-badge-bg)] text-[clamp(9.5px,2.8vw,12.5px)] text-landing-gold font-medium mb-3 sm:mb-4 select-none">
              <CrownIcon size={13} weight="fill" className="shrink-0" />
              <span>Simple &amp; Flexible Pricing</span>
            </div>

            {/* Section Heading (Fluid clamp scaling with viewport) */}
            <h2 className="text-[clamp(20px,5.8vw,40px)] font-semibold leading-[1.18] sm:leading-[1.15] tracking-tight text-landing-fg mb-2 sm:mb-3">
              Choose the Plan
              <br />
              That Fits You
            </h2>

            {/* Subtitle (Fluid clamp scaling with viewport) */}
            <p className="text-landing-mut text-[clamp(12px,3.2vw,14.5px)] leading-relaxed max-w-[320px] lg:max-w-[280px]">
              Start free and upgrade anytime for more power and automation.
            </p>

            {/* Golden Wavy Underline Decoration */}
            <svg
              className="hidden sm:block w-[260px] sm:w-[290px] h-[40px] mt-6 pointer-events-none"
              viewBox="0 0 300 40"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="ulStroke" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0" stopColor="#f7b92c" stopOpacity=".15" />
                  <stop offset=".55" stopColor="#ffd65f" />
                  <stop offset="1" stopColor="#f7b92c" stopOpacity=".35" />
                </linearGradient>
              </defs>
              <path
                d="M0 34C80 10 200 4 300 24"
                fill="none"
                stroke="url(#ulStroke)"
                strokeWidth="2.5"
              />
            </svg>
          </div>

          {/* ============================================================
              Right Column: Pricing Cards (Free Plan & Pro Plan)
              ============================================================ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 items-stretch">
            {/* Card 1: Free Plan */}
            <div className="relative rounded-[22px] border border-landing-line bg-[linear-gradient(160deg,rgba(255,255,255,0.05),var(--landing-card))] p-4.5 sm:p-7 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-landing-line/80">
              <div>
                <h3 className="text-[clamp(17px,4.5vw,22px)] font-semibold text-landing-fg leading-snug">
                  Free Plan
                </h3>
                <p className="text-[clamp(11.5px,2.8vw,12.5px)] text-landing-mut mt-1">
                  Perfect for getting started
                </p>

                {/* Price */}
                <div className="text-[clamp(22px,6vw,34px)] font-bold text-landing-fg my-3.5 sm:my-5 flex items-baseline gap-1">
                  ₦0
                  <span className="text-[clamp(11px,2.8vw,13px)] font-normal text-landing-mut">
                    / Forever
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 text-[clamp(11.5px,2.9vw,12.5px)] text-landing-fg/90">
                  <li className="flex items-center gap-2.5">
                    <span className="w-[18px] h-[18px] rounded-full bg-landing-gold text-[#1a1204] flex items-center justify-center shrink-0">
                      <CheckIcon size={11} weight="bold" />
                    </span>
                    <span>Create your online store</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-[18px] h-[18px] rounded-full bg-landing-gold text-[#1a1204] flex items-center justify-center shrink-0">
                      <CheckIcon size={11} weight="bold" />
                    </span>
                    <span>Add products &amp; manage cart</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-[18px] h-[18px] rounded-full bg-landing-gold text-[#1a1204] flex items-center justify-center shrink-0">
                      <CheckIcon size={11} weight="bold" />
                    </span>
                    <span>Get a unique store link</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-[18px] h-[18px] rounded-full bg-landing-gold text-[#1a1204] flex items-center justify-center shrink-0">
                      <CheckIcon size={11} weight="bold" />
                    </span>
                    <span>Manual order lookup</span>
                  </li>
                </ul>
              </div>

              {/* Free Plan Button */}
              <a
                href="#signup"
                className="w-full border border-landing-line bg-white/5 hover:bg-white/10 text-landing-fg font-semibold text-sm py-3 rounded-full text-center transition-all duration-200 cursor-pointer block"
              >
                Start Free
              </a>
            </div>

            {/* Card 2: Pro Plan (Featured with Rich Radial Gradient & 3D Diamond) */}
            <div className="pro-card rounded-[22px] p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_55px_rgba(247,185,44,0.32)] mt-5 sm:mt-0 overflow-visible relative">
              {/* Most Popular Pinned Top Badge */}
              <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-gradient-gold text-[#1a1204] text-[10.5px] sm:text-[11px] font-bold px-3.5 sm:px-4 py-1 rounded-t-xl uppercase tracking-wider flex items-center gap-1.5 shadow-md whitespace-nowrap z-20">
                <CrownIcon size={12} weight="fill" />
                <span>Most Popular</span>
              </div>

              {/* 3D Gold Faceted Diamond Graphic in Top Right */}
              <svg
                className="absolute right-2 top-4 w-[75px] sm:w-[98px] overflow-visible pointer-events-none drop-shadow-[0_6px_20px_rgba(247,185,44,0.4)] z-10"
                viewBox="-12 0 124 92"
                aria-hidden="true"
              >
                <polygon points="12,28 28,6 38,28" fill="#e7a017" />
                <polygon points="38,28 28,6 50,6" fill="#ffd66b" />
                <polygon points="38,28 50,6 62,28" fill="#f7be3a" />
                <polygon points="62,28 50,6 72,6" fill="#ffe29a" />
                <polygon points="62,28 72,6 88,28" fill="#d68e10" />
                <polygon points="12,28 38,28 50,84" fill="#c9800b" />
                <polygon points="38,28 62,28 50,84" fill="#f5b52a" />
                <polygon points="62,28 88,28 50,84" fill="#a96a06" />
                <ellipse
                  cx="50"
                  cy="58"
                  rx="62"
                  ry="13"
                  fill="none"
                  stroke="#f7b92c"
                  strokeWidth="2.5"
                  transform="rotate(-14 50 58)"
                />
              </svg>

              <div className="relative z-10">
                <div className="flex items-center gap-2">
                  <h3 className="text-[clamp(17px,4.5vw,22px)] font-semibold text-landing-fg leading-snug">
                    Pro Plan
                  </h3>
                  <DiamondIcon size={18} weight="fill" className="text-landing-gold" />
                </div>
                <p className="text-[clamp(11.5px,2.8vw,12.5px)] text-landing-mut mt-1">
                  Automate &amp; grow your business
                </p>

                {/* Price */}
                <div className="text-[clamp(22px,6vw,34px)] font-bold text-landing-fg my-3.5 sm:my-5 flex items-baseline gap-1">
                  ₦5,000
                  <span className="text-[clamp(11px,2.8vw,13px)] font-normal text-landing-mut">
                    / Month
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 text-[clamp(11.5px,2.9vw,12.5px)] text-landing-fg/90">
                  <li className="flex items-center gap-2.5">
                    <span className="w-[18px] h-[18px] rounded-full bg-landing-gold text-[#1a1204] flex items-center justify-center shrink-0">
                      <CheckIcon size={11} weight="bold" />
                    </span>
                    <span className="font-semibold text-landing-fg">
                      All Free Features
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-[18px] h-[18px] rounded-full bg-landing-gold text-[#1a1204] flex items-center justify-center shrink-0">
                      <CheckIcon size={11} weight="bold" />
                    </span>
                    <span>Automatic WhatsApp Notifications</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-[18px] h-[18px] rounded-full bg-landing-gold text-[#1a1204] flex items-center justify-center shrink-0">
                      <CheckIcon size={11} weight="bold" />
                    </span>
                    <span>Manage orders via WhatsApp</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-[18px] h-[18px] rounded-full bg-landing-gold text-[#1a1204] flex items-center justify-center shrink-0">
                      <CheckIcon size={11} weight="bold" />
                    </span>
                    <span>Priority Support</span>
                  </li>
                </ul>
              </div>

              {/* Upgrade Button */}
              <a
                href="#upgrade"
                className="w-full bg-gradient-gold text-[#1a1204] font-semibold text-sm py-3 rounded-full text-center shadow-gold-glow hover:shadow-gold-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 relative z-10"
              >
                <span>Upgrade to Pro</span>
                <ArrowRightIcon size={14} weight="bold" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          Wavy Divider Line at the end of Pricing Section (.dv)
          ============================================================ */}
      <svg
        className="w-full h-[36px] sm:h-[44px] mt-4 sm:mt-6 pointer-events-none overflow-visible"
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="pricingDividerGradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#f7b92c" stopOpacity=".15" />
            <stop offset=".55" stopColor="#ffd65f" />
            <stop offset="1" stopColor="#f7b92c" stopOpacity=".35" />
          </linearGradient>
        </defs>
        <path
          d="M0 40C350 66 760 6 1440 36"
          fill="none"
          stroke="url(#pricingDividerGradient)"
          strokeWidth="1.5"
        />
      </svg>
    </section>
  );
}
