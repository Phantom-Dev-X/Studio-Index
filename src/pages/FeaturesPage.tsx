import { useState, useEffect } from "react";
import {
    ArrowRightIcon,
    ShoppingBagIcon,
    WhatsappLogoIcon,
    LinkSimpleIcon,
    ShoppingCartIcon,
    ChartBarIcon,
    DeviceMobileIcon,
    CheckIcon,
} from "@phosphor-icons/react";
import { LandingHeader } from "../components/landing/home/LandingHeader";
import { LandingFooter } from "../components/landing/home/LandingFooter";
import { FeaturesBackground } from "../components/landing/features/FeaturesBackground";
import { AnimatedGrowthBars } from "../components/landing/features/AnimatedGrowthBars";
import { useViewportAnimation } from "../hooks/useViewportAnimation";
import { isHighPerfTier } from "../utils/adaptivePerformance";

const planFeatures = [
    { feature: "Online storefront", free: true, pro: true },
    { feature: "Unique store link", free: true, pro: true },
    { feature: "Add products & manage cart", free: true, pro: true },
    { feature: "Manual order lookup", free: true, pro: true },
    { feature: "Automatic WhatsApp notifications", free: false, pro: true },
    { feature: "Manage orders via WhatsApp", free: false, pro: true },
    { feature: "Priority support", free: false, pro: true },
];

const comingSoonPills = [
    { label: "Online payments", delay: "0s" },
    { label: "Discount codes", delay: "-0.7s" },
    { label: "Sales analytics", delay: "-1.4s" },
    { label: "Custom domain", delay: "-2.1s" },
    { label: "Delivery tracking", delay: "-2.8s" },
];

const STORE_HANDLES = ["your-store", "chioma-styles", "glow-beauty", "thrift-hub"];

export function FeaturesPage() {
    const heroVisualRef = useViewportAnimation<HTMLDivElement>();
    const marqueeRef = useViewportAnimation<HTMLDivElement>();
    const bentoRef = useViewportAnimation<HTMLDivElement>();
    const pillsRef = useViewportAnimation<HTMLDivElement>();

    const handleCardPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty("--x", `${x}px`);
        e.currentTarget.style.setProperty("--y", `${y}px`);
    };

    const bars = [
        { h: 45, t: 0 },
        { h: 70, t: -0.4 },
        { h: 55, t: -0.8 },
        { h: 90, t: -1.2 },
        { h: 65, t: -1.6 },
        { h: 100, t: -2 },
        { h: 80, t: -2.4 },
    ];

    const dashboardMiniBars = [
        { h: 40, t: 0 },
        { h: 75, t: -0.5 },
        { h: 55, t: -1 },
        { h: 95, t: -1.5 },
        { h: 70, t: -2 },
    ];

    const categories = [
        "Fashion",
        "Beauty",
        "Food & Snacks",
        "Thrift",
        "Gadgets",
        "Home Decor",
        "Jewelry",
    ];

    const steps = [
        {
            num: "1",
            title: "Create your store",
            description: "Sign up free and set up your store name in a few minutes.",
        },
        {
            num: "2",
            title: "Add your products",
            description: "Upload photos, set prices and write short descriptions.",
        },
        {
            num: "3",
            title: "Share your link",
            description: "Paste your unique link in your Instagram bio and start getting orders.",
        },
    ];

    const botBullets = [
        "Instant WhatsApp alerts for every new order",
        "Confirm or decline orders by replying to the bot",
        "Customers get automatic updates, no typing needed",
        "Works on the WhatsApp you already use",
    ];

    const catalogTiles = [
        { price: "₦15,000", delay: "0s" },
        { price: "₦12,000", delay: "-0.6s" },
        { price: "₦8,500", delay: "-1.2s" },
        { price: "₦20,000", delay: "-1.8s" },
    ];

    // ============================================================
    // DYNAMIC TYPEWRITER LOGIC (Types, Pauses, Deletes, Loops on high-spec only)
    // ============================================================
    const [handleIndex, setHandleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(() =>
        isHighPerfTier() ? 0 : STORE_HANDLES[0].length
    );
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (!isHighPerfTier()) {
            return;
        }
        const currentHandle = STORE_HANDLES[handleIndex];

        if (!isDeleting && charIndex < currentHandle.length) {
            const timer = setTimeout(() => setCharIndex((prev) => prev + 1), 110);
            return () => clearTimeout(timer);
        }

        if (!isDeleting && charIndex === currentHandle.length) {
            const timer = setTimeout(() => setIsDeleting(true), 1800);
            return () => clearTimeout(timer);
        }

        if (isDeleting && charIndex > 0) {
            const timer = setTimeout(() => setCharIndex((prev) => prev - 1), 60);
            return () => clearTimeout(timer);
        }

        if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setHandleIndex((prev) => (prev + 1) % STORE_HANDLES.length);
        }
    }, [charIndex, isDeleting, handleIndex]);

    return (
        <div className="relative w-full min-h-svh flex flex-col overflow-x-clip bg-landing-bg text-landing-fg font-poppins selection:bg-landing-gold selection:text-black">
            {/* Background 3 Radial Gradients & Grid */}
            <FeaturesBackground />

            {/* Header */}
            <LandingHeader />

            <main className="w-full flex flex-col items-center relative z-10">
                {/* Hero Section */}
                <section className="max-w-[1100px] w-full px-4 sm:px-6 md:px-10 pt-10 sm:pt-16 md:pt-20 pb-10 sm:pb-14 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] items-center gap-10 lg:gap-12">
                    {/* Left Column: Hero Text & Actions */}
                    <div className="flex flex-col gap-3 max-w-xl text-left">
                        {/* Eyebrow */}
                        <p className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-landing-gold before:content-[''] before:w-7 before:h-[1px] before:bg-landing-gold">
                            Features
                        </p>

                        {/* Main Heading */}
                        <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-white leading-[1.15]">
                            Everything You Need to{" "}
                            <span className="bg-gradient-to-r from-[#ffd65f] via-[#f3a81a] to-[#fff1b8] bg-clip-text text-transparent">
                                Sell on Instagram
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-sm sm:text-base lg:text-lg text-landing-mut leading-relaxed mt-1">
                            Studio Index turns your products into a beautiful online store with one shareable link, and a WhatsApp bot that handles your orders for you.
                        </p>

                        {/* CTA Buttons Container */}
                        <div className="flex items-center gap-3.5 sm:gap-4 mt-4 flex-wrap">
                            <button
                                type="button"
                                className="inline-flex items-center gap-2 bg-gradient-to-b from-[#ffd65f] to-[#f3a81a] text-[#1a1204] font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow-[0_6px_24px_rgba(247,185,44,0.25)] hover:shadow-[0_10px_34px_rgba(247,185,44,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                            >
                                <span>Get Started Free</span>
                                <ArrowRightIcon size={14} weight="bold" className="shrink-0" />
                            </button>

                            <button
                                type="button"
                                className="inline-flex items-center justify-center border border-white/10 hover:border-white/20 bg-transparent text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-full hover:bg-white/[0.04] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                            >
                                See the WhatsApp Bot
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Hero Visual Container with Floating Main Card and Chips */}
                    <div ref={heroVisualRef} className="keep-anim-scope relative w-full h-[360px] sm:h-[400px] select-none">
                        {/* Main Card (Orders Dashboard) - Outer Box + Rotating Conic Beam + Inner Box */}
                        <div className="absolute inset-[24px_12px_24px_24px] sm:inset-[30px_20px_30px_40px] rounded-[22px] p-[1px] overflow-hidden isolate [clip-path:inset(0_round_22px)] animate-float-main z-10 shadow-[0_10px_28px_rgba(0,0,0,0.5)] md:shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
                            {/* Rotating Conic Gradient Beam (clipped cleanly inside rounded card on all sizes) */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div
                                    className="w-[560px] h-[560px] shrink-0 animate-spin-border"
                                    style={{
                                        background: "conic-gradient(from 0deg at 50% 50%, transparent 60%, #f7b92c 85%, transparent 100%)",
                                    }}
                                />
                            </div>

                            {/* Inner Box */}
                            <div className="relative w-full h-full p-5 sm:p-6 rounded-[21px] bg-[#0c0c0e] md:bg-[#0c0c0e]/95 md:backdrop-blur-[16px] md:bg-gradient-to-br md:from-white/[0.09] md:to-white/[0.02] border border-white/[0.10] shadow-[inset_0_1px_rgba(255,255,255,0.18)] flex flex-col justify-between z-10">
                                <div>
                                    <h4 className="text-landing-mut text-xs sm:text-[13px] font-medium tracking-wide">
                                        Today's orders
                                    </h4>
                                    <b className="text-white text-2xl sm:text-[30px] font-bold block mt-0.5 mb-3 sm:mb-4">
                                        12 new
                                    </b>
                                </div>

                                {/* Animated Bars */}
                                <AnimatedGrowthBars bars={bars} />
                            </div>
                        </div>

                        {/* Floating Chip 1: New order (Top-Right) */}
                        <div className="absolute top-0 right-0 z-20 flex items-center gap-2.5 px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-[13px] font-medium text-white border border-white/[0.14] rounded-2xl bg-[#16161b] md:bg-transparent md:bg-gradient-to-br md:from-white/[0.12] md:to-white/[0.03] md:backdrop-blur-[14px] shadow-[0_8px_20px_rgba(0,0,0,0.45)] md:shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_rgba(255,255,255,0.18)] animate-float-chip">
                            <ShoppingBagIcon size={20} weight="bold" className="text-landing-gold shrink-0" />
                            <span>New order · ₦27,000</span>
                        </div>

                        {/* Floating Chip 2: Order confirmed (Bottom-Left) */}
                        <div
                            className="absolute bottom-1.5 left-0 z-20 flex items-center gap-2.5 px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-[13px] font-medium text-white border border-white/[0.14] rounded-2xl bg-[#16161b] md:bg-transparent md:bg-gradient-to-br md:from-white/[0.12] md:to-white/[0.03] md:backdrop-blur-[14px] shadow-[0_8px_20px_rgba(0,0,0,0.45)] md:shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_rgba(255,255,255,0.18)] animate-float-chip"
                            style={{ animationDelay: "-2s" }}
                        >
                            <span className="w-7 h-7 sm:w-[30px] sm:h-[30px] rounded-full bg-[#25d366] flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(37,211,102,0.35)]">
                                <WhatsappLogoIcon size={17} weight="fill" className="text-white" />
                            </span>
                            <span>Order confirmed ✓</span>
                        </div>
                    </div>
                </section>

                {/* Infinite Scrolling Category Marquee Ticker */}
                <div ref={marqueeRef} className="w-full overflow-hidden border-y border-landing-line py-3.5 sm:py-4 my-2 sm:my-6 relative select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex items-center gap-10 sm:gap-12 w-max whitespace-nowrap animate-marquee keep-anim">
                        {[...categories, ...categories, ...categories, ...categories].map((item, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center gap-10 sm:gap-12 text-xs sm:text-sm font-medium text-landing-mut hover:text-white transition-colors duration-200 cursor-default"
                            >
                                <span>{item}</span>
                                <span className="text-landing-gold text-[10px] sm:text-xs">✦</span>
                            </span>
                        ))}
                    </div>
                </div>

                {/* How It Works Section */}
                <section className="max-w-[1100px] w-full px-4 sm:px-6 md:px-10 pt-16 sm:pt-24 pb-16 sm:pb-24 flex flex-col items-center text-center">
                    {/* Eyebrow */}
                    <span className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-landing-gold mb-3">
                        <span className="w-7 h-[1px] bg-landing-gold" />
                        How it works
                        <span className="w-7 h-[1px] bg-landing-gold" />
                    </span>

                    {/* Main Section Heading */}
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
                        From first product to first order{" "}
                        <span className="bg-gradient-to-r from-[#ffd65f] via-[#f3a81a] to-[#fff1b8] bg-clip-text text-transparent">
                            in three steps
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-sm sm:text-base text-landing-mut max-w-xl mb-12 sm:mb-16">
                        No design skills and no code. Just you, your products and your Instagram.
                    </p>

                    {/* Steps Container with Animated Connecting Dashed Line */}
                    <div className="relative w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-start">
                        {/* Animated Marching Dashed Line */}
                        <div
                            aria-hidden="true"
                            className="hidden md:block absolute top-[34px] left-[15%] right-[15%] h-[2px] opacity-60 animate-dash-line pointer-events-none"
                            style={{
                                background: "repeating-linear-gradient(90deg, #f7b92c 0 10px, transparent 10px 20px)",
                                backgroundSize: "20px 2px",
                            }}
                        />

                        {steps.map((step) => (
                            <div key={step.num} className="relative flex flex-col items-center text-center px-4 z-10 group">
                                <div
                                    className="w-[68px] h-[68px] rounded-full mb-4 sm:mb-5 flex items-center justify-center text-[22px] font-bold text-[#1a1204] bg-gradient-to-b from-[#ffd65f] to-[#f3a81a] transition-transform duration-300 group-hover:scale-105"
                                    style={{
                                        boxShadow: "0 0 0 8px #050505, 0 0 36px rgba(247,185,44,0.45)",
                                    }}
                                >
                                    {step.num}
                                </div>
                                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">{step.title}</h3>
                                <p className="text-xs sm:text-[13.5px] text-landing-mut leading-relaxed max-w-[270px]">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Core Features Bento Grid Section */}
                <section className="max-w-[1100px] w-full px-4 sm:px-6 md:px-10 pt-10 sm:pt-16 pb-16 sm:pb-24 flex flex-col items-center text-center">
                    {/* Eyebrow */}
                    <span className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-landing-gold mb-3">
                        <span className="w-7 h-[1px] bg-landing-gold" />
                        Core features
                        <span className="w-7 h-[1px] bg-landing-gold" />
                    </span>

                    {/* Section Heading */}
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                        A complete store,{" "}
                        <span className="bg-gradient-to-r from-[#ffd65f] via-[#f3a81a] to-[#fff1b8] bg-clip-text text-transparent">
                            built for Instagram
                        </span>
                    </h2>

                    {/* Bento Grid */}
                    <div ref={bentoRef} className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 mt-8 sm:mt-12 text-left">
                        {/* ----------------------------------------------------
                            CARD 1: Unique Store Link (Span 7)
                            ---------------------------------------------------- */}
                        <div onPointerMove={handleCardPointerMove} className="bento-spotlight md:col-span-7 relative overflow-hidden rounded-[22px] border border-landing-line bg-gradient-to-br from-white/[0.06] via-landing-card/60 to-landing-card p-6 sm:p-7 transition-colors duration-200 md:transition-all md:duration-300 hover:border-landing-gold/50 md:hover:-translate-y-1 group">
                            <LinkSimpleIcon size={32} weight="bold" className="text-landing-gold mb-3.5" />
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-1.5">
                                Your own unique store link
                            </h3>
                            <p className="text-xs sm:text-sm text-landing-mut leading-relaxed max-w-lg mb-6">
                                Every seller gets one link to rule them all. Put it in your bio, stories or DMs and customers land straight in your store.
                            </p>

                            {/* Interactive Mock URL Bar with Live Typewriter */}
                            <div className="flex items-center gap-2.5 px-4 py-3.5 rounded-xl bg-black/70 border border-landing-line font-mono text-xs sm:text-[13px] text-white overflow-hidden shadow-inner select-none">
                                <CheckIcon size={16} weight="bold" className="text-emerald-400 shrink-0" />
                                <span className="text-landing-mut">studioindex.app/</span>
                                <span className="text-white font-medium tracking-wide">
                                    {STORE_HANDLES[handleIndex].slice(0, charIndex)}
                                </span>
                                <span className="w-[2px] h-4 bg-landing-gold animate-pulse shrink-0" />
                            </div>
                        </div>

                        {/* ----------------------------------------------------
                            CARD 2: Beautiful Product Catalogue (Span 5)
                            ---------------------------------------------------- */}
                        <div onPointerMove={handleCardPointerMove} className="bento-spotlight md:col-span-5 relative overflow-hidden rounded-[22px] border border-landing-line bg-gradient-to-br from-white/[0.06] via-landing-card/60 to-landing-card p-6 sm:p-7 transition-colors duration-200 md:transition-all md:duration-300 hover:border-landing-gold/50 md:hover:-translate-y-1 group">
                            <ShoppingBagIcon size={32} weight="bold" className="text-landing-gold mb-3.5" />
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-1.5">
                                Beautiful product catalogue
                            </h3>
                            <p className="text-xs sm:text-sm text-landing-mut leading-relaxed mb-6">
                                Show off your products with photos, prices and descriptions.
                            </p>

                            {/* 4 Shimmer Catalogue Product Tiles */}
                            <div className="grid grid-cols-4 gap-2.5">
                                {catalogTiles.map((tile, i) => (
                                    <div
                                        key={i}
                                        className="relative aspect-square rounded-xl overflow-hidden animate-shimmer border border-white/10"
                                        style={{ animationDelay: tile.delay }}
                                    >
                                        <span className="absolute left-1.5 bottom-1.5 px-1.5 py-0.5 rounded-full text-[9px] font-bold text-white bg-black/85 md:backdrop-blur-sm tracking-tight border border-white/10">
                                            {tile.price}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ----------------------------------------------------
                            CARD 3: Seamless Cart (Span 4)
                            ---------------------------------------------------- */}
                        <div onPointerMove={handleCardPointerMove} className="bento-spotlight md:col-span-4 relative overflow-hidden rounded-[22px] border border-landing-line bg-gradient-to-br from-white/[0.06] via-landing-card/60 to-landing-card p-6 sm:p-7 transition-colors duration-200 md:transition-all md:duration-300 hover:border-landing-gold/50 md:hover:-translate-y-1 group flex flex-col justify-between">
                            <div>
                                <ShoppingCartIcon size={32} weight="bold" className="text-landing-gold mb-3.5" />
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1.5">
                                    Seamless cart
                                </h3>
                                <p className="text-xs sm:text-sm text-landing-mut leading-relaxed mb-5">
                                    Customers add to cart and confirm their order in a few taps.
                                </p>
                            </div>

                            {/* Cart Item Rows */}
                            <div className="flex flex-col gap-2 mt-auto">
                                <div className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/5 text-xs text-landing-fg">
                                    <span>Premium Hoodie x 1</span>
                                    <span className="text-landing-gold font-semibold">₦15,000</span>
                                </div>
                                <div className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/5 text-xs text-landing-fg">
                                    <span>Black Cap x 1</span>
                                    <span className="text-landing-gold font-semibold">₦12,000</span>
                                </div>
                            </div>
                        </div>

                        {/* ----------------------------------------------------
                            CARD 4: Order Dashboard (Span 4)
                            ---------------------------------------------------- */}
                        <div onPointerMove={handleCardPointerMove} className="bento-spotlight md:col-span-4 relative overflow-hidden rounded-[22px] border border-landing-line bg-gradient-to-br from-white/[0.06] via-landing-card/60 to-landing-card p-6 sm:p-7 transition-colors duration-200 md:transition-all md:duration-300 hover:border-landing-gold/50 md:hover:-translate-y-1 group flex flex-col justify-between">
                            <div>
                                <ChartBarIcon size={32} weight="bold" className="text-landing-gold mb-3.5" />
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1.5">
                                    Order dashboard
                                </h3>
                                <p className="text-xs sm:text-sm text-landing-mut leading-relaxed mb-4">
                                    See every order and its status in one clean place, and look up any order fast.
                                </p>
                            </div>

                            {/* 5 Mini Wave Bars */}
                            <AnimatedGrowthBars bars={dashboardMiniBars} className="h-[70px] w-full mt-auto pt-2" gapClass="gap-2.5" />
                        </div>

                        {/* ----------------------------------------------------
                            CARD 5: Made for Phones (Span 4)
                            ---------------------------------------------------- */}
                        <div onPointerMove={handleCardPointerMove} className="bento-spotlight md:col-span-4 relative overflow-hidden rounded-[22px] border border-landing-line bg-gradient-to-br from-white/[0.06] via-landing-card/60 to-landing-card p-6 sm:p-7 transition-colors duration-200 md:transition-all md:duration-300 hover:border-landing-gold/50 md:hover:-translate-y-1 group flex flex-col justify-between">
                            <div>
                                <DeviceMobileIcon size={32} weight="bold" className="text-landing-gold mb-3.5" />
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1.5">
                                    Made for phones
                                </h3>
                                <p className="text-xs sm:text-sm text-landing-mut leading-relaxed mb-4">
                                    Most of your customers come from Instagram on mobile, so your store is designed for small screens first.
                                </p>
                            </div>

                            {/* Pulsing Status Ping */}
                            <div className="inline-flex items-center gap-2.5 mt-auto pt-4 text-xs font-medium text-white">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80] animate-radar-ping inline-block shrink-0" />
                                <span>Fast &amp; smooth on any phone</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WhatsApp Order Bot Section */}
                <section id="whatsapp" className="max-w-[1100px] w-full px-4 sm:px-6 md:px-10 pt-10 sm:pt-14 pb-16 sm:pb-24">
                    <div
                        className="w-full rounded-[32px] p-6 sm:p-10 lg:p-14 border border-[#f7b92c]/30 shadow-lg md:shadow-[0_0_70px_rgba(247,185,44,0.12)] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center relative overflow-hidden"
                        style={{
                            background:
                                "radial-gradient(70% 90% at 100% 0, rgba(37, 211, 102, 0.14), transparent 60%), radial-gradient(60% 80% at 0 100%, rgba(247, 185, 44, 0.16), transparent 60%), var(--landing-card)",
                        }}
                    >
                        {/* Left Column: Text & Features List */}
                        <div className="flex flex-col items-start text-left">
                            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-landing-gold mb-3">
                                <span className="w-6 h-[1px] bg-landing-gold" />
                                The Studio Index difference
                            </span>

                            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-[1.2] mb-3">
                                Meet your{" "}
                                <span className="bg-gradient-to-r from-[#ffd65f] via-[#f3a81a] to-[#fff1b8] bg-clip-text text-transparent">
                                    WhatsApp order bot
                                </span>
                                <span className="inline-block text-[11px] font-bold tracking-wider bg-gradient-to-b from-[#ffd65f] to-[#f3a81a] text-[#1a1204] px-2.5 py-0.5 rounded-full align-middle ml-2.5 shadow-sm">
                                    PRO
                                </span>
                            </h2>

                            <p className="text-sm sm:text-base text-landing-mut leading-relaxed max-w-lg mb-6">
                                Stop chasing orders in your DMs. The bot tells you the moment an order lands and lets you manage it right from WhatsApp.
                            </p>

                            {/* List of Benefits */}
                            <ul className="flex flex-col gap-3.5 mb-8 w-full">
                                {botBullets.map((bullet, i) => (
                                    <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-landing-fg">
                                        <span className="w-5 h-5 rounded-full bg-landing-gold text-[#1a1204] flex items-center justify-center shrink-0">
                                            <CheckIcon size={12} weight="bold" />
                                        </span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                type="button"
                                className="inline-flex items-center gap-2 bg-gradient-to-b from-[#ffd65f] to-[#f3a81a] text-[#1a1204] font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow-[0_6px_24px_rgba(247,185,44,0.25)] hover:shadow-[0_10px_34px_rgba(247,185,44,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                            >
                                <span>Upgrade to Pro</span>
                                <ArrowRightIcon size={14} weight="bold" className="shrink-0" />
                            </button>
                        </div>

                        {/* Right Column: Interactive WhatsApp Chat Widget */}
                        <div className="w-full flex justify-center lg:justify-end">
                            <div className="max-w-[340px] w-full rounded-[28px] bg-[#0b141a] border border-white/[0.14] shadow-xl md:shadow-[0_30px_70px_rgba(0,0,0,0.7)] overflow-hidden lg:rotate-3 transition-transform duration-300 hover:rotate-0 select-none pb-4">
                                {/* WhatsApp Header */}
                                <div className="flex items-center gap-2.5 px-4 py-3 bg-[#202c33] border-b border-white/5">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#ffd65f] to-[#f3a81a] flex items-center justify-center text-[#1a1204] shrink-0">
                                        <WhatsappLogoIcon size={18} weight="fill" />
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <span className="text-xs font-semibold text-white leading-tight">Studio Index Bot</span>
                                        <span className="text-[10px] text-emerald-400 font-normal">online</span>
                                    </div>
                                </div>

                                {/* Chat Bubble Stream */}
                                <div className="flex flex-col gap-2.5 px-3 pt-3 text-left">
                                    {/* Bot message 1 */}
                                    <div className="bg-[#202c33] text-white text-[12px] p-2.5 rounded-xl rounded-tl-sm max-w-[85%] leading-relaxed border border-white/5 shadow-sm">
                                        <span className="font-semibold text-landing-gold">New order #1024</span>
                                        <br />
                                        <span>2 items · ₦27,000</span>
                                    </div>

                                    {/* Bot message 2 */}
                                    <div className="bg-[#202c33] text-white text-[12px] p-2.5 rounded-xl rounded-tl-sm max-w-[85%] leading-relaxed border border-white/5 shadow-sm">
                                        Reply 1 to confirm or 2 to decline.
                                    </div>

                                    {/* Seller message 3 */}
                                    <div className="bg-[#005c4b] text-white text-[12px] font-medium px-3 py-1.5 rounded-xl rounded-tr-sm w-fit ml-auto shadow-sm">
                                        1
                                    </div>

                                    {/* Bot message 4 */}
                                    <div className="bg-[#202c33] text-white text-[12px] p-2.5 rounded-xl rounded-tl-sm max-w-[88%] leading-relaxed border border-white/5 shadow-sm">
                                        Order confirmed ✓ Your customer has been notified.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ── Compare Plans Section ── */}
                <section className="w-full max-w-5xl mx-auto px-4 md:px-8 mt-24 md:mt-32 text-center">
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-landing-gold/90 px-3 py-1 rounded-full bg-landing-gold/10 border border-landing-gold/20 mb-3">
                        Compare plans
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                        Start free.{" "}
                        <span className="bg-gradient-to-r from-landing-gold via-[#ffe28a] to-[#ffb319] bg-clip-text text-transparent">
                            Upgrade when you're ready.
                        </span>
                    </h2>

                    {/* Autogenerated / Data-driven table */}
                    <div className="mt-11 border border-landing-line rounded-3xl overflow-hidden bg-landing-card text-left shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
                        {/* Table Header */}
                        <div className="grid grid-cols-[1.7fr_1fr_1fr] items-center text-xs sm:text-sm font-semibold bg-white/[0.04] border-b border-landing-line">
                            <div className="p-3.5 sm:p-5 text-landing-muted">Feature</div>
                            <div className="p-3.5 sm:p-5 text-center text-white">Free</div>
                            <div className="p-3.5 sm:p-5 text-center text-landing-gold bg-landing-gold/[0.07]">
                                Pro
                            </div>
                        </div>

                        {/* Table Rows (Autogenerated from planFeatures array) */}
                        {planFeatures.map((row, idx) => (
                            <div
                                key={row.feature}
                                className={`grid grid-cols-[1.7fr_1fr_1fr] items-center text-xs sm:text-sm transition-colors hover:bg-white/[0.02] ${idx !== 0 ? "border-t border-landing-line" : ""
                                    }`}
                            >
                                <div className="p-3.5 sm:p-5 text-landing-fg/90 font-medium">
                                    {row.feature}
                                </div>
                                <div className="p-3.5 sm:p-5 flex items-center justify-center">
                                    {row.free ? (
                                        <CheckIcon weight="bold" className="w-5 h-5 text-landing-gold" />
                                    ) : (
                                        <span className="text-[#555] font-light text-base select-none">—</span>
                                    )}
                                </div>
                                <div className="p-3.5 sm:p-5 flex items-center justify-center bg-landing-gold/[0.07] h-full">
                                    {row.pro ? (
                                        <CheckIcon weight="bold" className="w-5 h-5 text-landing-gold" />
                                    ) : (
                                        <span className="text-[#555] font-light text-base select-none">—</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Coming Soon Section ── */}
                <section className="w-full max-w-5xl mx-auto px-4 md:px-8 mt-24 md:mt-32 text-center">
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-landing-gold/90 px-3 py-1 rounded-full bg-landing-gold/10 border border-landing-gold/20 mb-3">
                        Coming soon
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                        We're just getting{" "}
                        <span className="bg-gradient-to-r from-landing-gold via-[#ffe28a] to-[#ffb319] bg-clip-text text-transparent">
                            started
                        </span>
                    </h2>
                    <p className="mt-3 text-landing-muted text-sm sm:text-base max-w-xl mx-auto">
                        More tools are on the way to help your store grow.
                    </p>

                    {/* Shimmering dashed pills */}
                    <div ref={pillsRef} className="flex flex-wrap gap-3 justify-center mt-9">
                        {comingSoonPills.map((pill) => (
                            <span
                                key={pill.label}
                                style={{ animationDelay: pill.delay }}
                                className="px-5 py-3 rounded-full border border-dashed border-[#f7b92c]/50 text-[13.5px] font-medium text-landing-fg/90 animate-pill-shimmer md:backdrop-blur-sm cursor-default hover:border-landing-gold transition-colors"
                            >
                                {pill.label}
                            </span>
                        ))}
                    </div>
                </section>

                {/* ── Bottom CTA Banner ── */}
                <section id="cta" className="w-full max-w-6xl mx-auto px-4 md:px-8 mt-24 md:mt-32 mb-16">
                    <div className="relative text-center border border-[#f7b92c]/40 rounded-[32px] py-14 px-6 md:px-12 bg-landing-card shadow-lg md:shadow-[0_0_50px_rgba(247,185,44,0.14)] overflow-hidden">
                        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(80%_120%_at_50%_140%,rgba(247,185,44,0.32),transparent_70%)]" />

                        <div className="relative z-10">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                                Ready to take your business to{" "}
                                <span className="bg-gradient-to-r from-landing-gold via-[#ffe28a] to-[#ffb319] bg-clip-text text-transparent">
                                    the next level?
                                </span>
                            </h2>
                            <p className="mt-3 text-landing-muted text-sm sm:text-base max-w-xl mx-auto">
                                Join thousands of sellers already using Studio Index.
                            </p>
                            <a
                                href="#"
                                className="mt-7 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm bg-gradient-to-b from-landing-gold to-[#d49410] text-[#1a1204] shadow-[0_6px_24px_rgba(247,185,44,0.25)] hover:shadow-[0_10px_34px_rgba(247,185,44,0.45)] hover:-translate-y-0.5 transition-all duration-200"
                            >
                                Create Your Account
                                <ArrowRightIcon weight="bold" className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <LandingFooter />
        </div>
    );
}