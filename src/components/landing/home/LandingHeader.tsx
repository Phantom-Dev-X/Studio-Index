import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
    ArrowRightIcon,
    ArrowUpRight,
    House,
    Info,
    MoonIcon,
    PaperPlaneTilt,
    SignIn,
    Sparkle,
    SunIcon,
    Tag,
    X,
} from "@phosphor-icons/react";

const navItems = [
    { to: "/", label: "Home", subtitle: "Storefront overview", num: "01", Icon: House, end: true },
    { to: "/features", label: "Features", subtitle: "WhatsApp & smart tools", num: "02", Icon: Sparkle },
    { to: "/pricing", label: "Pricing", subtitle: "Free & Pro plans", num: "03", Icon: Tag },
    { to: "/about", label: "About", subtitle: "Founder & mission", num: "04", Icon: Info },
    { to: "/contact", label: "Contact", subtitle: "Direct support", num: "05", Icon: PaperPlaneTilt },
];

export function LandingHeader() {
    const [isDark, setIsDark] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Prevent background scrolling & allow Escape close when modal is open
    useEffect(() => {
        if (!mobileMenuOpen) {
            document.body.style.overflow = "";
            return;
        }
        document.body.style.overflow = "hidden";
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMobileMenuOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKeyDown);
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
            <header className="landing-header-glass w-full fixed top-0 left-0 right-0 z-50 [transform:translate3d(0,0,0)] bg-landing-bg/75 backdrop-blur-md border-b border-landing-line shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <div className="max-w-[1100px] w-full mx-auto px-3 sm:px-6 md:px-10 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-3">
                    {/* Brand Logo & Name */}
                    <NavLink
                        to="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-1.5 sm:gap-2 group cursor-pointer select-none shrink-0 whitespace-nowrap"
                    >
                        <img
                            src="/StudioIndex.png"
                            alt="Studio Index Logo"
                            width={240}
                            height={160}
                            decoding="async"
                            className="h-7 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105 duration-200 shrink-0"
                        />
                        <span className="font-poppins font-semibold text-[clamp(14px,3.8vw,20px)] tracking-tight text-white whitespace-nowrap">
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
                    <div className="flex items-center gap-1.5 sm:gap-3.5 shrink-0">
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

                        {/* Sharp Morphing Hamburger Toggle */}
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen((prev) => !prev)}
                            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={mobileMenuOpen}
                            className={`md:hidden relative flex items-center justify-center w-9 h-9 rounded-xl border transition-colors duration-200 cursor-pointer shrink-0 ${
                                mobileMenuOpen
                                    ? "bg-[#f7b92c]/15 border-[#f7b92c]/55 text-[#ffd65f]"
                                    : "bg-white/[0.04] border-white/12 hover:border-[#f7b92c]/45 text-white"
                            }`}
                        >
                            {mobileMenuOpen ? (
                                <X size={16} weight="bold" />
                            ) : (
                                <span className="flex flex-col items-end gap-[4px]">
                                    <span className="block w-4 h-[1.75px] rounded-full bg-white" />
                                    <span className="block w-2.5 h-[1.75px] rounded-full bg-landing-gold" />
                                    <span className="block w-4 h-[1.75px] rounded-full bg-white" />
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </header>
            <div className="h-[61px] sm:h-[69px] w-full shrink-0" aria-hidden="true" />

            {/* ════════════════════════════════════════════════════════
                FLOATING LUXURY DROPDOWN PANEL (Mounted only when open)
                ════════════════════════════════════════════════════════ */}
            {mobileMenuOpen && (
                <div
                    onClick={() => setMobileMenuOpen(false)}
                    className="md:hidden fixed inset-0 z-40 pt-[70px] px-3 pb-6 flex flex-col items-end bg-black/75"
                >
                    <nav
                        aria-label="Mobile navigation"
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-[400px] rounded-2xl border border-white/[0.12] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.94),0_0_0_1px_rgba(247,185,44,0.14)] animate-[menuReveal_0.18s_cubic-bezier(0.16,1,0.3,1)] keep-anim"
                        style={{
                            background:
                                "radial-gradient(95% 55% at 100% 0%, rgba(247, 185, 44, 0.14) 0%, transparent 65%), #0a0a0d",
                        }}
                    >
                        {/* Top Specular Gold Hairline */}
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#f7b92c]/75 to-transparent" />

                        {/* Top Bar Strip */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.07]">
                            <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-[#a3a3a3]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
                                Navigation
                            </span>
                            <span className="text-[9.5px] font-mono uppercase tracking-[0.16em] text-[#ffd65f] px-2 py-0.5 rounded-md bg-[#f7b92c]/10 border border-[#f7b92c]/25">
                                Studio Index
                            </span>
                        </div>

                        {/* Architectural Nav Rows */}
                        <div className="p-2 flex flex-col gap-1">
                            {navItems.map(({ to, label, subtitle, num, Icon, end }) => (
                                <NavLink
                                    key={to}
                                    to={to}
                                    end={end}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `group relative flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-colors duration-150 ${
                                            isActive
                                                ? "border-[#f7b92c]/35 bg-[linear-gradient(90deg,rgba(247,185,44,0.13),rgba(247,185,44,0.03)_70%,transparent)]"
                                                : "border-transparent hover:border-white/[0.08] hover:bg-white/[0.035]"
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {/* Left Active Indicator */}
                                            {isActive && (
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute left-0 top-2.5 bottom-2.5 w-[2.5px] rounded-r-full bg-[#f7b92c]"
                                                />
                                            )}

                                            {/* Index Number */}
                                            <span
                                                className={`font-mono text-[10px] w-4 shrink-0 ${
                                                    isActive ? "text-[#ffd65f]" : "text-[#62626a]"
                                                }`}
                                            >
                                                {num}
                                            </span>

                                            {/* Icon Tile */}
                                            <span
                                                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-colors ${
                                                    isActive
                                                        ? "bg-[#f7b92c]/15 border-[#f7b92c]/45 text-[#ffd65f]"
                                                        : "bg-white/[0.04] border-white/[0.08] text-[#a3a3a3] group-hover:text-white group-hover:border-white/15"
                                                }`}
                                            >
                                                <Icon size={15} weight={isActive ? "fill" : "regular"} />
                                            </span>

                                            {/* Label + Micro Subtitle */}
                                            <span className="flex flex-col min-w-0 flex-1">
                                                <span
                                                    className={`text-[13.5px] leading-tight tracking-tight ${
                                                        isActive
                                                            ? "text-white font-semibold"
                                                            : "text-[#e5e5e5] font-medium group-hover:text-white"
                                                    }`}
                                                >
                                                    {label}
                                                </span>
                                                <span className="text-[10.5px] text-[#73737a] truncate mt-0.5">
                                                    {subtitle}
                                                </span>
                                            </span>

                                            {/* Right Indicator */}
                                            {isActive ? (
                                                <span className="text-[9.5px] font-mono uppercase tracking-wider text-[#ffd65f] px-2 py-0.5 rounded-full bg-[#f7b92c]/12 border border-[#f7b92c]/30 shrink-0">
                                                    Here
                                                </span>
                                            ) : (
                                                <ArrowUpRight
                                                    size={14}
                                                    weight="bold"
                                                    className="text-[#52525b] group-hover:text-[#ffd65f] transition-colors shrink-0"
                                                />
                                            )}
                                        </>
                                    )}
                                </NavLink>
                            ))}
                        </div>

                        {/* Bottom Action Dock */}
                        <div className="px-3 pt-2.5 pb-3 border-t border-white/[0.07] bg-white/[0.015] flex flex-col gap-2.5">
                            <div className="grid grid-cols-2 gap-2">
                                <a
                                    href="#login"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-white/12 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/25 text-white/90 text-xs font-medium transition-colors"
                                >
                                    <SignIn size={14} weight="bold" className="text-[#a3a3a3]" />
                                    <span>Login</span>
                                </a>
                                <a
                                    href="#pricing"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-gold text-[#1a1204] text-xs font-semibold shadow-[0_4px_16px_rgba(247,185,44,0.28)]"
                                >
                                    <span>Start Free</span>
                                    <ArrowRightIcon size={12} weight="bold" />
                                </a>
                            </div>

                            <div className="flex items-center justify-between px-1 text-[10px] font-mono text-[#73737a]">
                                <span>₦0 FOREVER · 0% CUT</span>
                                <span className="text-[#a3a3a3]">
                                    LAGOS <span className="text-[#f7b92c]">◆</span> NG
                                </span>
                            </div>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
}
