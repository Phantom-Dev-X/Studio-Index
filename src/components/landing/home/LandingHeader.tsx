import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
    ArrowRightIcon,
    MoonIcon,
    SunIcon,
    CaretRight,
    Sparkle,
    X,
} from "@phosphor-icons/react";

const navItems = [
    { to: "/", label: "Home", end: true },
    { to: "/features", label: "Features" },
    { to: "/pricing", label: "Pricing" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
];

export function LandingHeader() {
    const [isDark, setIsDark] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

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
        <>
            <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-landing-bg/90 border-b border-landing-line">
                <div className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 md:px-10 py-3 sm:py-4 flex items-center justify-between gap-3">
                    {/* Brand Logo & Name */}
                    <NavLink
                        to="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-1.5 sm:gap-2 group cursor-pointer select-none shrink-0 whitespace-nowrap"
                    >
                        <img
                            src="/StudioIndex.png"
                            alt="Studio Index Logo"
                            className="h-7 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105 duration-200 shrink-0"
                        />
                        <span className="font-poppins font-semibold text-[clamp(15px,3.8vw,20px)] tracking-tight text-white whitespace-nowrap">
                            Studio <i className="not-italic text-landing-gold">Index</i>
                        </span>
                    </NavLink>

                    {/* Desktop Nav Links */}
                    <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[13.5px] font-medium">
                        {navItems.map(({ to, label, end }) => (
                            <NavLink
                                key={to}
                                to={to}
                                end={end}
                                className={({ isActive }) =>
                                    `pb-0.5 border-b-2 transition-all duration-200 ${
                                        isActive
                                            ? "text-landing-fg border-landing-gold font-semibold"
                                            : "text-landing-mut border-transparent hover:text-landing-fg hover:border-landing-gold/40"
                                    }`
                                }
                            >
                                {label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Right Actions: Theme Toggle + CTA Button + Hamburger */}
                    <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
                        {/* Theme Toggle Pill */}
                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="w-8.5 h-5 sm:w-12 sm:h-6.5 rounded-full bg-[#1c1c1c] border border-white/10 flex items-center px-0.5 sm:px-1 cursor-pointer transition-all duration-300 shrink-0"
                        >
                            <div
                                className={`w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 rounded-full flex items-center justify-center text-landing-gold transition-all duration-300 transform ${
                                    isDark
                                        ? "translate-x-0"
                                        : "translate-x-3.5 sm:translate-x-5 text-amber-500"
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
                            className="bg-gradient-gold text-[#1a1204] font-semibold text-[clamp(11px,2.6vw,13px)] px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full shadow-gold-glow hover:shadow-gold-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-1 sm:gap-1.5 whitespace-nowrap cursor-pointer shrink-0"
                        >
                            <span>Create Account</span>
                            <ArrowRightIcon size={11} weight="bold" className="shrink-0" />
                        </a>

                        {/* Hamburger Button */}
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            aria-label="Open menu"
                            className="md:hidden relative flex flex-col items-center justify-center w-9 h-9 rounded-xl border bg-white/[0.04] border-white/10 hover:border-landing-gold/40 hover:bg-white/[0.08] transition-all duration-200 cursor-pointer"
                        >
                            <span className="block w-4.5 h-[2px] rounded-full bg-white mb-1" />
                            <span className="block w-3 h-[2px] rounded-full bg-landing-gold mb-1" />
                            <span className="block w-4.5 h-[2px] rounded-full bg-white" />
                        </button>
                    </div>
                </div>
            </header>

            {/* ════════════════════════════════════════════════════════
                FIXED FULLSCREEN MODAL OVERLAY (Top 0, Full Width)
                ════════════════════════════════════════════════════════ */}
            <div
                onClick={() => setMobileMenuOpen(false)}
                className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 flex flex-col items-center justify-start ${
                    mobileMenuOpen
                        ? "opacity-100 pointer-events-auto bg-black/75 backdrop-blur-md"
                        : "opacity-0 pointer-events-none"
                }`}
            >
                {/* Full-width Modal Sheet pinned right at top 0 */}
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={`relative w-full rounded-b-3xl px-5 pt-4 pb-6 border-b border-landing-gold/40 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(247,185,44,0.18)] transition-all duration-300 ${
                        mobileMenuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-full opacity-0"
                    }`}
                    style={{
                        background:
                            "radial-gradient(110% 70% at 100% 0%, rgba(247, 185, 44, 0.16) 0%, transparent 60%), #0e0e0e",
                    }}
                >
                    {/* Top Golden Light Edge */}
                    <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-landing-gold to-transparent" />

                    {/* Modal Top Header Bar */}
                    <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-white/10">
                        <span className="text-xs uppercase tracking-widest text-landing-gold font-semibold flex items-center gap-1.5">
                            <Sparkle size={13} weight="fill" />
                            Navigation
                        </span>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            aria-label="Close menu"
                            className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/[0.12] transition-colors cursor-pointer"
                        >
                            <X size={16} weight="bold" />
                        </button>
                    </div>

                    {/* Nav Links */}
                    <div className="flex flex-col gap-1.5">
                        {navItems.map(({ to, label, end }) => (
                            <NavLink
                                key={to}
                                to={to}
                                end={end}
                                onClick={() => setMobileMenuOpen(false)}
                                className={({ isActive }) =>
                                    `group flex items-center justify-between py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                                        isActive
                                            ? "text-[#1a1204] font-semibold bg-gradient-to-r from-[#ffd65f] to-[#f3a81a] shadow-[0_4px_16px_rgba(247,185,44,0.35)]"
                                            : "text-[#d4d4d4] hover:text-white hover:bg-white/[0.06]"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <span className="flex items-center gap-2">
                                            {label}
                                        </span>
                                        <CaretRight
                                            size={14}
                                            weight="bold"
                                            className={`transition-transform duration-200 ${
                                                isActive
                                                    ? "text-[#1a1204]"
                                                    : "text-[#f7b92c] opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                                            }`}
                                        />
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    {/* Modal Footer Row */}
                    <div className="pt-3.5 mt-3 border-t border-white/10 flex items-center justify-between text-xs text-landing-mut">
                        <span className="flex items-center gap-1.5 text-[11px] text-[#a9a9a9]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
                            Free Forever · 0% Cut
                        </span>
                        <a
                            href="#login"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-white hover:text-landing-gold font-medium transition-colors"
                        >
                            Login &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
