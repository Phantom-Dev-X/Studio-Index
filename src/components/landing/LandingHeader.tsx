import { useState } from "react";
import { ArrowRightIcon, MoonIcon, SunIcon } from "@phosphor-icons/react";

export function LandingHeader() {
    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => {
        const nextTheme = !isDark;
        setIsDark(nextTheme);
        if (nextTheme) {
            document.documentElement.removeAttribute("data-theme");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    };

    return (
        <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-landing-bg/85 border-b border-landing-line">
            <div className="max-w-[1100px] w-full mx-auto px-2.5 sm:px-6 md:px-10 py-2 sm:py-4 flex items-center justify-between gap-1.5">
                {/* Brand Logo & Name */}
                <a href="#top" className="flex items-center gap-1 sm:gap-2 group cursor-pointer select-none shrink-0 whitespace-nowrap">
                    <img
                        src="/StudioIndex.png"
                        alt="Studio Index Logo"
                        className="h-6 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105 duration-200 shrink-0"
                    />
                    <span className="font-poppins font-semibold text-[clamp(13px,3.8vw,20px)] tracking-tight text-white whitespace-nowrap">
                        Studio <i className="not-italic text-landing-gold">Index</i>
                    </span>
                </a>

                {/* Desktop Nav Links (Hidden on mobile, appears on md:) */}
                <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[13.5px] font-medium text-landing-mut">
                    <a
                        href="#top"
                        className="text-landing-fg border-b-2 border-landing-gold pb-0.5 transition-colors"
                    >
                        Home
                    </a>
                    <a
                        href="#features"
                        className="hover:text-landing-fg pb-0.5 border-b-2 border-transparent hover:border-landing-gold/40 transition-all"
                    >
                        Features
                    </a>
                    <a
                        href="#pricing"
                        className="hover:text-landing-fg pb-0.5 border-b-2 border-transparent hover:border-landing-gold/40 transition-all"
                    >
                        Pricing
                    </a>
                    <a
                        href="#faqs"
                        className="hover:text-landing-fg pb-0.5 border-b-2 border-transparent hover:border-landing-gold/40 transition-all"
                    >
                        FAQs
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-landing-fg pb-0.5 border-b-2 border-transparent hover:border-landing-gold/40 transition-all"
                    >
                        Contact
                    </a>
                </nav>

                {/* Right Actions: Theme Toggle + CTA Button (Mobile first) */}
                <div className="flex items-center gap-1.5 sm:gap-3.5 shrink-0">
                    {/* Theme Toggle Pill */}
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="w-8.5 h-5 sm:w-12 sm:h-6.5 rounded-full bg-[#1c1c1c] border border-white/10 flex items-center px-0.5 sm:px-1 cursor-pointer transition-all duration-300 shrink-0"
                    >
                        <div
                            className={`w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 rounded-full flex items-center justify-center text-landing-gold transition-all duration-300 transform ${isDark ? "translate-x-0" : "translate-x-3.5 sm:translate-x-5 text-amber-500"
                                }`}
                        >
                            {isDark ? (
                                <MoonIcon size={10} weight="fill" className="sm:hidden" />
                            ) : (
                                <SunIcon size={10} weight="bold" className="sm:hidden" />
                            )}
                            {isDark ? (
                                <MoonIcon size={13} weight="fill" className="hidden sm:inline" />
                            ) : (
                                <SunIcon size={13} weight="bold" className="hidden sm:inline" />
                            )}
                        </div>
                    </button>

                    {/* Desktop Login Link */}
                    <a
                        href="#login"
                        className="hidden lg:inline-flex text-[13px] font-medium text-white/90 hover:text-landing-gold transition-colors px-2 py-1"
                    >
                        Login
                    </a>

                    {/* Create Account Gold Button */}
                    <a
                        href="#pricing"
                        className="bg-gradient-gold text-[#1a1204] font-semibold text-[clamp(10px,2.6vw,13px)] px-2.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full shadow-gold-glow hover:shadow-gold-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-1 sm:gap-1.5 whitespace-nowrap cursor-pointer shrink-0"
                    >
                        <span>Create Account</span>
                        <ArrowRightIcon size={11} weight="bold" className="shrink-0" />
                    </a>
                </div>
            </div>
        </header>
    );
}
