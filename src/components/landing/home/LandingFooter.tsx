import {
  ArrowRightIcon,
  InstagramLogoIcon,
  WhatsappLogoIcon,
  XLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";
import { AnonymousCard } from "../../storefront/footer/AnonymousCard";

export function LandingFooter() {
  return (
    <footer className="w-full overflow-x-clip pt-2 pb-6 mt-0">
      <div className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 md:px-10">
        {/* ============================================================
            CTA Section + Anonymous Card Side-by-Side (Max 456x250)
            ============================================================ */}
        <div
          id="contact"
          className="w-full rounded-3xl border border-landing-gold/50 bg-[radial-gradient(ellipse_at_top,rgba(247,185,44,0.14),var(--landing-card)_70%)] p-5 sm:p-6 lg:p-8 shadow-[0_8px_24px_rgba(247,185,44,0.1)] md:shadow-[0_0_50px_rgba(247,185,44,0.12)] grid grid-cols-1 lg:grid-cols-[1.1fr_456px] gap-6 lg:gap-8 items-center mb-6 sm:mb-8"
        >
          {/* Left Column: Brand & Callout Action */}
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3.5 sm:mb-4">
              <img
                src="/StudioIndex.png"
                alt="Studio Index Logo"
                width={240}
                height={160}
                decoding="async"
                className="h-8 sm:h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-poppins font-semibold text-base sm:text-xl text-white">
                  Studio <i className="not-italic text-landing-gold">Index</i>
                </span>
                <small className="text-[11px] sm:text-xs text-landing-mut">
                  Shop. Sell. Grow.
                </small>
              </div>
            </div>

            <h3 className="text-[clamp(15px,4.5vw,24px)] font-semibold text-landing-fg mb-2 leading-snug">
              Ready to take your business to the next level?
            </h3>
            <p className="text-[clamp(11.5px,3vw,14px)] text-landing-mut mb-4 sm:mb-6 leading-relaxed max-w-[440px]">
              Join Nigeria's fastest-growing social commerce founders on Studio
              Index today. Set up your storefront in 60 seconds with 0% middleman
              cut.
            </p>

            <a
              href="#pricing"
              className="bg-gradient-gold text-[#1a1204] font-semibold text-[clamp(11px,2.8vw,14px)] px-[clamp(14px,3.8vw,28px)] py-[clamp(8px,2.2vw,14px)] rounded-full shadow-gold-glow hover:shadow-gold-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Create Your Account</span>
              <ArrowRightIcon size={13} weight="bold" />
            </a>
          </div>

          {/* Right Column: Anonymous Card (Strictly capped at 456px x 250px) */}
          <div className="w-full flex justify-center lg:justify-end">
            <AnonymousCard />
          </div>
        </div>

        {/* ============================================================
            Sub-Footer: Copyright, Legal Links, Social Icons
            ============================================================ */}
        <div className="pt-5 sm:pt-6 border-t border-landing-line flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-xs text-landing-mut">
          {/* Copyright */}
          <span>© 2026 Studio Index. All rights reserved.</span>

          {/* Legal / Policy Links */}
          <div className="flex items-center gap-6 text-landing-mut">
            <a
              href="#privacy"
              className="hover:text-landing-fg transition-colors"
            >
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-landing-fg transition-colors">
              Terms of Service
            </a>
            <a
              href="#contact"
              className="hover:text-landing-fg transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-landing-mut">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-landing-gold transition-colors"
            >
              <InstagramLogoIcon size={18} weight="bold" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X / Twitter"
              className="hover:text-landing-gold transition-colors"
            >
              <XLogoIcon size={18} weight="bold" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="hover:text-landing-gold transition-colors"
            >
              <YoutubeLogoIcon size={18} weight="bold" />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="hover:text-landing-gold transition-colors"
            >
              <WhatsappLogoIcon size={18} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
