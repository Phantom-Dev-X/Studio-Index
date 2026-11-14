import { ArrowRightIcon, PlayIcon, SparkleIcon } from "@phosphor-icons/react";
import { HeroPhoneStage } from "./HeroPhoneStage";

export function LandingHero() {
  return (
    <section className="relative w-full overflow-x-clip pt-6 pb-12 sm:pt-10 sm:pb-16 md:pt-12 md:pb-20 lg:pt-14 lg:pb-20 bg-[radial-gradient(55%_55%_at_78%_35%,rgba(247,185,44,0.12),transparent_70%)]">
      <div className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.12fr_1fr] items-center gap-8 lg:gap-12">
          {/* Left Column: Text & CTA */}
          <div className="flex flex-col items-start text-left z-10">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-[var(--landing-badge-border)] bg-[var(--landing-badge-bg)] text-[clamp(9.5px,2.8vw,12.5px)] text-landing-gold font-medium mb-3.5 sm:mb-5 select-none">
              <SparkleIcon size={13} weight="fill" className="shrink-0" />
              <span>The Ultimate Storefront Builder for Instagram Sellers</span>
            </div>

            {/* Main Headline (Fluid clamp scaling with viewport) */}
            <h1 className="text-[clamp(21px,6.5vw,48px)] font-semibold leading-[1.15] sm:leading-[1.12] tracking-tight text-landing-fg mb-3 sm:mb-4">
              Turn Your Instagram
              <br className="hidden sm:inline" /> Followers Into{" "}
              <span className="text-gradient-gold">Customers</span>
            </h1>

            {/* Underneath Lead Description (Fluid clamp scaling with viewport) */}
            <p className="text-landing-mut text-[clamp(12.5px,3.4vw,17px)] leading-relaxed max-w-[490px] mb-5 sm:mb-8 opacity-90">
              Create your beautiful online store with Studio Index, share your
              unique link, and let your audience shop effortlessly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 w-full sm:w-auto">
              <a
                href="#pricing"
                className="bg-gradient-gold text-[#1a1204] font-semibold text-[clamp(12px,3.2vw,15px)] px-[clamp(14px,4vw,28px)] py-[clamp(9px,2.4vw,14px)] rounded-full shadow-gold-glow hover:shadow-gold-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Get Started Free</span>
                <ArrowRightIcon size={14} weight="bold" />
              </a>

              <a
                href="#demo"
                className="border border-landing-line bg-transparent hover:bg-white/5 text-landing-fg font-medium text-[clamp(12px,3.2vw,15px)] px-[clamp(14px,4vw,28px)] py-[clamp(9px,2.4vw,14px)] rounded-full hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <PlayIcon size={14} weight="fill" className="text-landing-fg" />
                <span>Watch Demo</span>
              </a>
            </div>
          </div>

          {/* Right Column: Phone Mockup Container */}
          <div className="w-full flex items-center justify-center z-10">
            <HeroPhoneStage />
          </div>
        </div>
      </div>

      {/* ============================================================
          WAVY TRANSITION LINE (Stays in Hero, seamlessly leading to Features)
          ============================================================ */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[45px] sm:h-[65px] md:h-[80px] pointer-events-none overflow-hidden z-10"
        viewBox="0 0 1440 130"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="waveStrokeGradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#f7b92c" stopOpacity=".15" />
            <stop offset=".55" stopColor="#ffd65f" />
            <stop offset="1" stopColor="#f7b92c" stopOpacity=".35" />
          </linearGradient>
          <linearGradient id="waveFillGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#f7b92c" stopOpacity=".22" />
            <stop offset="1" stopColor="#f7b92c" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Soft Golden Fill under the wave */}
        <path
          d="M0 95C300 118 520 80 800 38S1250 55 1440 96V130H0z"
          fill="url(#waveFillGradient)"
        />

        {/* Golden Wavy Stroke Line */}
        <path
          d="M0 95C300 118 520 80 800 38S1250 55 1440 96"
          fill="none"
          stroke="url(#waveStrokeGradient)"
          strokeWidth="2.5"
        />
      </svg>
    </section>
  );
}
