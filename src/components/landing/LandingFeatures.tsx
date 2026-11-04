import {
  ChartLineUpIcon,
  LightningIcon,
  StorefrontIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FEATURES_DATA: FeatureItem[] = [
  {
    icon: (
      <StorefrontIcon size={32} weight="duotone" className="text-landing-gold" />
    ),
    title: "Your Personal Storefront",
    description:
      "Get a unique link and showcase your products beautifully in 60 seconds.",
  },
  {
    icon: (
      <LightningIcon size={32} weight="fill" className="text-landing-gold" />
    ),
    title: "Seamless Shopping",
    description:
      "Customers add to cart and confirm orders in just a tap without DM chaos.",
  },
  {
    icon: (
      <WhatsappLogoIcon size={32} weight="fill" className="text-landing-gold" />
    ),
    title: "WhatsApp Integration",
    description:
      "Receive formatted order summaries with customer details directly on WhatsApp.",
  },
  {
    icon: (
      <ChartLineUpIcon size={32} weight="bold" className="text-landing-gold" />
    ),
    title: "Track & Manage",
    description:
      "View live inventory, track order history, and grow your brand with ease.",
  },
];

export function LandingFeatures() {
  return (
    <section
      id="features"
      className="w-full pt-4 pb-6 sm:pt-6 sm:pb-8 md:pt-6 md:pb-10 relative z-10"
    >
      <div className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Divider Header with bilateral gold gradients */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-6 max-w-[750px] mx-auto mb-4 sm:mb-6">
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-landing-gold/80" />
          <span className="text-landing-gold font-medium text-[clamp(10px,2.7vw,14px)] tracking-[1.5px] sm:tracking-[2px] uppercase select-none whitespace-nowrap">
            Powerful Features
          </span>
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-landing-gold/80" />
        </div>

        {/* 4-Column Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 lg:gap-6">
          {FEATURES_DATA.map((item, idx) => (
            <div
              key={idx}
              className="group p-4 sm:p-6 rounded-2xl border border-landing-line bg-[linear-gradient(160deg,rgba(255,255,255,0.06),var(--landing-card)_60%)] hover:border-landing-gold/45 hover:-translate-y-1.5 transition-all duration-300 shadow-xl flex flex-col items-start text-left cursor-default"
            >
              <div className="mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-landing-fg font-semibold text-[clamp(13px,3.6vw,16px)] leading-snug mb-1.5 sm:mb-2 group-hover:text-landing-gold transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-landing-mut text-[clamp(11px,2.9vw,13px)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

