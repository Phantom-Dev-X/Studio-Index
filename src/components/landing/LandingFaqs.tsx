import { useState } from "react";
import { ArrowRightIcon, PlusIcon, QuestionIcon } from "@phosphor-icons/react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS_DATA: FaqItem[] = [
  {
    question: "Is Studio Index free to use?",
    answer:
      "Yes. The Free plan costs ₦0 forever, giving you a full luxury storefront and cart management. You can upgrade to Pro whenever you need automated WhatsApp notifications and deeper features.",
  },
  {
    question: "How do I get my unique store link?",
    answer:
      "Create your free account, pick your brand handle, and you will instantly receive your unique store link (e.g. studioindex.ng/your_brand) to paste straight into your Instagram or TikTok bio.",
  },
  {
    question: "Can I upgrade to Pro later?",
    answer:
      "Absolutely. You can start on the Free plan today and upgrade to the Pro plan anytime in your dashboard to unlock instant WhatsApp order routing and priority support.",
  },
  {
    question: "Is my data safe and secure?",
    answer:
      "Yes. All your store details, customer order sessions, and inventory are encrypted, isolated, and hosted on secure enterprise-grade cloud infrastructure.",
  },
];

export function LandingFaqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="w-full py-4 sm:py-6 md:py-7 relative z-10">
      <div className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading & Info */}
          <div className="flex flex-col items-start text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-[var(--landing-badge-border)] bg-[var(--landing-badge-bg)] text-[clamp(9.5px,2.8vw,12.5px)] text-landing-gold font-medium mb-3 sm:mb-4 select-none">
              <QuestionIcon size={13} weight="bold" className="shrink-0" />
              <span>FAQs</span>
            </div>

            {/* Section Title (Fluid clamp scaling with viewport) */}
            <h2 className="text-[clamp(20px,5.8vw,36px)] font-semibold leading-tight text-landing-fg mb-2 sm:mb-3">
              Got Questions?
            </h2>

            {/* Subtitle (Fluid clamp scaling with viewport) */}
            <p className="text-landing-mut text-[clamp(12px,3.2vw,16px)] leading-relaxed max-w-[320px] mb-4 sm:mb-6">
              Find answers to common questions about setting up and growing with
              Studio Index.
            </p>

            {/* CTA Button */}
            <a
              href="#pricing"
              className="border border-landing-line hover:border-landing-gold/50 bg-white/5 hover:bg-white/10 text-landing-fg text-[clamp(11px,2.8vw,14px)] font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 inline-flex items-center gap-2 cursor-pointer shadow-sm hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>View All FAQs</span>
              <ArrowRightIcon size={12} weight="bold" />
            </a>
          </div>

          {/* Right Column: Accordion */}
          <div className="space-y-2.5 sm:space-y-3 w-full">
            {FAQS_DATA.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-landing-gold/50 bg-[var(--landing-glass)] shadow-lg"
                      : "border-landing-line bg-[var(--landing-glass)]/60 hover:border-landing-line/80"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-3.5 sm:p-5 text-left text-[clamp(12.5px,3.4vw,15.5px)] font-medium text-landing-fg hover:text-landing-gold transition-colors cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-3 sm:pr-4">{item.question}</span>
                    <PlusIcon
                      size={16}
                      weight="bold"
                      className={`shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-45 text-landing-gold" : "text-landing-mut"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-3.5 pb-3.5 sm:px-5 sm:pb-5 pt-0 text-[clamp(11.5px,2.9vw,13.5px)] text-landing-mut leading-relaxed border-t border-landing-line/40 mt-1">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

