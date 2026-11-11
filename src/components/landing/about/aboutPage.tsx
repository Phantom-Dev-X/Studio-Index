import { useEffect, useRef, type ReactNode } from "react";
import {
    ArrowRight,
    Lock,
    Heart,
    WhatsappLogo,
} from "@phosphor-icons/react";
import { FeaturesBackground } from "../features/FeaturesBackground";
import { LandingHeader } from "../home/LandingHeader";
import { LandingFooter } from "../home/LandingFooter";
import { useViewportAnimation } from "../../../hooks/useViewportAnimation";

// ─── Shared: Gold gradient text ───────────────────────────────────────────────
function GoldText({ children }: { children: ReactNode }) {
    const ref = useViewportAnimation<HTMLSpanElement>();
    return (
        <span ref={ref} className="bg-[linear-gradient(90deg,#ffd65f,#f3a81a,#fff1b8,#ffd65f)] bg-[length:200%_100%] bg-clip-text text-transparent animate-[sh_6s_linear_infinite]">
            {children}
        </span>
    );
}

// ─── Shared: Eyebrow label ────────────────────────────────────────────────────
function Eyebrow({ children }: { children: ReactNode }) {
    return (
        <span className="inline-flex items-center gap-2.5 text-[#f7b92c] text-[12px] font-semibold tracking-[2px] uppercase before:content-[''] before:w-7 before:h-px before:bg-[#f7b92c]">
            {children}
        </span>
    );
}

// ─── Hero section ─────────────────────────────────────────────────────────────
function HeroSection() {
    const heroVisualRef = useViewportAnimation<HTMLDivElement>();

    return (
        <section className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 md:px-10 pt-[50px] grid grid-cols-[1.1fr_1fr] gap-10 items-center max-[900px]:grid-cols-1">
            {/* Left text */}
            <div className="">
                <Eyebrow>About</Eyebrow>
                <h1 className="text-[clamp(34px,5vw,56px)] leading-[1.08] font-bold tracking-[-1px] mt-[18px] mb-[18px] text-white">
                    Hi, I'm the person behind{" "}
                    <GoldText>Studio Index.</GoldText>
                </h1>
                <p className="text-[#a9a9a9] text-[16px] max-w-[520px]">
                    No name and no face, and that's on purpose. I'd rather you
                    judge Studio Index by what it does for your business.
                </p>
                <div className="flex gap-3.5 mt-[30px] flex-wrap">
                    <a
                        href="#story"
                        className="inline-flex items-center justify-center gap-2 rounded-full font-semibold text-[14px] px-[26px] py-[14px] text-[#1a1204] border-0 transition-all duration-[250ms] hover:-translate-y-0.5"
                        style={{
                            background:
                                "linear-gradient(180deg,#ffd65f,#f3a81a)",
                            boxShadow: "0 6px 24px #f7b92c40",
                        }}
                    >
                        Read my story{" "}
                        <ArrowRight size={14} weight="bold" />
                    </a>
                    <a
                        href="#cta"
                        className="inline-flex items-center justify-center gap-2 rounded-full font-semibold text-[14px] px-[26px] py-[14px] border border-white/10 bg-transparent text-white transition-all duration-[250ms] hover:-translate-y-0.5 hover:border-[#f7b92c80]"
                    >
                        Create Account
                    </a>
                </div>
            </div>

            {/* Right visual — founder ID card */}
            <div
                ref={heroVisualRef}
                className="relative h-[420px] grid place-items-center max-[560px]:h-[380px]"
                style={{ ["--d" as string]: "0.15s" }}
            >
                {/* Floating gem */}
                <svg
                    className="absolute w-[70px] left-[-4px] top-[6px] drop-shadow-[0_0_20px_#f7b92c99] animate-[aboutFloat_6s_ease-in-out_infinite_alternate-reverse]"
                    viewBox="0 0 64 64"
                >
                    <defs>
                        <linearGradient id="f1ab" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0" stopColor="#fff3c0" />
                            <stop offset="1" stopColor="#f7b92c" />
                        </linearGradient>
                        <linearGradient id="f2ab" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stopColor="#f7b92c" />
                            <stop offset="1" stopColor="#b9780a" />
                        </linearGradient>
                        <linearGradient id="f3ab" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stopColor="#d9960f" />
                            <stop offset="1" stopColor="#7a4c04" />
                        </linearGradient>
                        <linearGradient id="lgab" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0" stopColor="#fff1b8" />
                            <stop offset=".45" stopColor="#f7b92c" />
                            <stop offset="1" stopColor="#a86a08" />
                        </linearGradient>
                    </defs>
                    <polygon points="32,3 57.1,17.5 32,32 6.9,17.5" fill="url(#f1ab)" />
                    <polygon points="6.9,17.5 32,32 32,61 6.9,46.5" fill="url(#f2ab)" />
                    <polygon points="57.1,17.5 32,32 32,61 57.1,46.5" fill="url(#f3ab)" />
                    <polygon
                        points="32,3 57.1,17.5 57.1,46.5 32,61 6.9,46.5 6.9,17.5"
                        fill="none"
                        stroke="#fff3c0"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                        opacity=".85"
                    />
                    <path
                        d="M32 32L6.9 17.5M32 32L57.1 17.5M32 32V61"
                        stroke="#fff3c0"
                        strokeWidth=".6"
                        opacity=".5"
                    />
                    <path
                        d="M55 4.5l1.6 3.9 3.9 1.6-3.9 1.6-1.6 3.9-1.6-3.9-3.9-1.6 3.9-1.6z"
                        fill="url(#lgab)"
                    />
                </svg>

                {/* ID Card */}
                <div
                    className="relative w-[310px] p-[26px] rounded-[26px] overflow-hidden max-[560px]:w-[270px] bg-[#141418] md:bg-[linear-gradient(160deg,#ffffff18,#ffffff05)] md:backdrop-blur-[14px] shadow-[0_14px_34px_rgba(0,0,0,0.65),0_0_40px_#f7b92c22] md:shadow-[0_30px_80px_#000a,0_0_60px_#f7b92c22,inset_0_1px_#ffffff26] animate-[aboutFloat_7s_ease-in-out_infinite_alternate]"
                    style={{
                        border: "1px solid #ffffff26",
                    }}
                >
                    {/* Scan line */}
                    <div
                        className="absolute left-0 right-0 top-0 h-[2px] pointer-events-none animate-[aboutScan_3.6s_ease-in-out_infinite_alternate]"
                        style={{
                            background:
                                "linear-gradient(90deg, transparent, #f7b92c, transparent)",
                            boxShadow: "0 0 22px 3px #f7b92c99",
                        }}
                    />

                    <small
                        className="text-[10.5px] tracking-[2.5px] font-semibold"
                        style={{ color: "#f7b92c" }}
                    >
                        FOUNDER
                    </small>

                    {/* Profile row */}
                    <div className="flex gap-4 items-center my-[18px]">
                        {/* Avatar */}
                        <div
                            className="flex-none w-[76px] h-[76px] rounded-[20px] border grid place-items-end overflow-hidden"
                            style={{
                                background:
                                    "radial-gradient(circle at 50% 0, #f7b92c40, #0b0804 70%)",
                                borderColor: "#f7b92c66",
                            }}
                        >
                            <svg
                                viewBox="0 0 40 40"
                                className="w-[60px] h-[60px] md:drop-shadow-[0_0_10px_#f7b92c88]"
                                style={{ fill: "url(#lgab)" }}
                            >
                                <circle cx="20" cy="15" r="8" />
                                <path d="M4 40c0-10 7-14 16-14s16 4 16 14z" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            {/* Shimmer bars */}
                            <div
                                className="h-[13px] rounded-[5px] my-[7px] relative overflow-hidden"
                                style={{ width: "85%", background: "#ffffff26" }}
                            >
                                <div
                                    className="absolute inset-0 animate-[aboutShimmer_2.4s_infinite]"
                                    style={{
                                        background:
                                            "linear-gradient(90deg,transparent,#f7b92c99,transparent)",
                                    }}
                                />
                            </div>
                            <div
                                className="h-[10px] rounded-[5px] my-[7px] relative overflow-hidden"
                                style={{ width: "60%", background: "#ffffff26" }}
                            >
                                <div
                                    className="absolute inset-0 animate-[aboutShimmer_2.4s_infinite]"
                                    style={{
                                        background:
                                            "linear-gradient(90deg,transparent,#f7b92c99,transparent)",
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* More shimmer bars */}
                    <div
                        className="h-[13px] rounded-[5px] my-[7px] relative overflow-hidden w-full"
                        style={{ background: "#ffffff26" }}
                    >
                        <div
                            className="absolute inset-0 animate-[aboutShimmer_2.4s_infinite]"
                            style={{
                                background:
                                    "linear-gradient(90deg,transparent,#f7b92c99,transparent)",
                            }}
                        />
                    </div>
                    <div
                        className="h-[13px] rounded-[5px] my-[7px] relative overflow-hidden"
                        style={{ width: "78%", background: "#ffffff26" }}
                    >
                        <div
                            className="absolute inset-0 animate-[aboutShimmer_2.4s_infinite]"
                            style={{
                                background:
                                    "linear-gradient(90deg,transparent,#f7b92c99,transparent)",
                            }}
                        />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        <span className="flex items-center gap-[7px] text-[11.5px] px-3 py-1.5 border border-white/10 rounded-full bg-white/[0.04]">
                            <Lock size={13} className="text-[#f7b92c]" />
                            Identity withheld
                        </span>
                        <span className="flex items-center gap-[7px] text-[11.5px] px-3 py-1.5 border border-white/10 rounded-full bg-white/[0.04]">
                            <span
                                className="w-2 h-2 rounded-full bg-[#4ade80] flex-none animate-[aboutPing_1.8s_infinite]"
                                style={{
                                    boxShadow: "0 0 0 0 #4ade80aa",
                                }}
                            />
                            Building in the open
                        </span>
                    </div>
                </div>

                {/* Floating chips */}
                <div
                    className="absolute flex items-center gap-[9px] px-4 py-2.5 border border-white/[0.15] rounded-[14px] text-[12.5px] font-medium bg-[#18181d]/95 md:bg-[#ffffff10] md:backdrop-blur-[10px] animate-[aboutFloat_5s_ease-in-out_infinite_alternate]"
                    style={{
                        right: -6,
                        top: 40,
                    }}
                >
                    <Heart size={18} className="text-[#f7b92c]" />
                    Sellers first
                </div>
                <div
                    className="absolute flex items-center gap-[9px] px-4 py-2.5 border border-white/[0.15] rounded-[14px] text-[12.5px] font-medium bg-[#18181d]/95 md:bg-[#ffffff10] md:backdrop-blur-[10px] animate-[aboutFloat_5s_ease-in-out_infinite_alternate]"
                    style={{
                        left: -8,
                        bottom: 50,
                        animationDelay: "-2s",
                    }}
                >
                    <WhatsappLogo size={18} className="text-[#f7b92c]" />
                    WhatsApp-powered
                </div>
            </div>
        </section>
    );
}

// ─── Letter from founder ──────────────────────────────────────────────────────
function FounderLetterSection() {
    return (
        <section
            id="story"
            className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 md:px-10 pt-[100px] text-center"
        >
            <span className="inline-block">
                <Eyebrow>A letter from the founder</Eyebrow>
            </span>
            <h2 className="text-[clamp(26px,3.6vw,40px)] leading-[1.15] font-semibold mt-[14px] mb-[12px] text-white">
                The story <GoldText>behind the link</GoldText>
            </h2>

            {/* Letter card */}
            <div
                className="relative max-w-[800px] mt-[44px] mx-auto px-[54px] py-[56px] pb-[44px] rounded-[32px] text-left max-[900px]:px-[26px] max-[900px]:py-[46px] max-[900px]:pb-[34px] shadow-[0_8px_24px_#f7b92c12] md:shadow-[0_0_70px_#f7b92c14]"
                style={{
                    border: "1px solid #f7b92c4d",
                    background:
                        "radial-gradient(70% 60% at 100% 0, #f7b92c1a, transparent 60%), radial-gradient(60% 50% at 0 100%, #f7b92c14, transparent 60%), #0d0d0d",
                }}
            >
                {/* Big decorative quote mark */}
                <span
                    className="absolute left-[30px] top-[-6px] font-bold leading-none opacity-35 pointer-events-none select-none"
                    style={{
                        fontFamily: "Georgia, serif",
                        fontSize: 110,
                        color: "#f7b92c",
                    }}
                >
                    "
                </span>

                <p className="text-[24px] leading-[1.4] font-medium text-white mb-[22px] max-[560px]:text-[20px]">
                    You won't find my name on this page, and that's on purpose.
                </p>

                <p className="text-[16.5px] leading-[1.85] text-[#d9d9d9] mb-[22px]">
                    Studio Index isn't about me. It's about{" "}
                    <b className="text-[#ffd65f] font-medium">you</b>, the seller
                    who posts your products and hopes the right person messages
                    you. I'd rather you judge this platform by what it does for
                    your business than by who built it.
                </p>

                <p className="text-[16.5px] leading-[1.85] text-[#d9d9d9] mb-[22px]">
                    Here's what I kept noticing: Instagram is a brilliant place
                    to be discovered, but a tough place to run a store. The same
                    questions again and again,{" "}
                    <b className="text-[#ffd65f] font-medium">
                        "How much?" "Is it available?"
                    </b>{" "}
                    Orders buried in DMs, and customers who vanish halfway
                    through a chat.
                </p>

                <p className="text-[16.5px] leading-[1.85] text-[#d9d9d9] mb-[22px]">
                    So I built Studio Index. You upload your products, get{" "}
                    <b className="text-[#ffd65f] font-medium">one unique link</b>{" "}
                    and put it in your bio. Your customers browse, add to cart
                    and order, without you typing the same price fifty times.
                </p>

                <p className="text-[16.5px] leading-[1.85] text-[#d9d9d9] mb-[22px]">
                    The part I'm proudest of is the{" "}
                    <b className="text-[#ffd65f] font-medium">WhatsApp bot</b>.
                    Orders reach you in the app you already live in, and you
                    manage them with a quick reply. That's the difference between
                    feeling like a seller and feeling like a business.
                </p>

                <p className="text-[16.5px] leading-[1.85] text-[#d9d9d9] mb-[22px]">
                    I'll be honest: we're just getting started. I'm building
                    this step by step and listening closely to sellers. If
                    something doesn't work for you, tell me, because I read every
                    message.
                </p>

                {/* Signature */}
                <div className="flex items-center gap-[18px] mt-[30px] flex-wrap">
                    <svg
                        viewBox="0 0 200 44"
                        className="w-[170px] h-[44px]"
                        style={{
                            fill: "none",
                            stroke: "url(#sig-grad)",
                            strokeWidth: 2.5,
                            strokeLinecap: "round",
                        }}
                    >
                        <defs>
                            <linearGradient id="sig-grad" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0" stopColor="#fff1b8" />
                                <stop offset=".45" stopColor="#f7b92c" />
                                <stop offset="1" stopColor="#a86a08" />
                            </linearGradient>
                        </defs>
                        <path
                            pathLength="1"
                            d="M5 32C28 4 38 42 58 20S88 8 100 30 128 10 150 26 182 12 195 22"
                        />
                    </svg>
                    <div>
                        <strong className="block text-[15px] text-white font-semibold">
                            The Founder
                        </strong>
                        <span className="text-[13px] text-[#a9a9a9]">
                            Anonymous, but always listening
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── What I stand for ─────────────────────────────────────────────────────────
const promises = [
    {
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="w-[34px] h-[34px] text-[#f7b92c] mb-[14px]"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="8" />
                <circle cx="12" cy="12" r="3.5" />
            </svg>
        ),
        title: "Sellers first",
        desc: "Every feature starts with one question: does this make a seller's day easier?",
        delay: "0s",
    },
    {
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="w-[34px] h-[34px] text-[#f7b92c] mb-[14px]"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6-8 11-8 11z" />
            </svg>
        ),
        title: "Honest, simple pricing",
        desc: "A Free plan that stays free, and one Pro plan at ₦5,000 a month. No confusing tiers.",
        delay: "0.1s",
    },
    {
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="w-[34px] h-[34px] text-[#f7b92c] mb-[14px]"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="6" y="2" width="12" height="20" rx="3" />
                <path d="M10.5 18.5h3" />
            </svg>
        ),
        title: "Built for phones",
        desc: "Your customers shop on their phones, so Studio Index is designed for small screens first.",
        delay: "0.2s",
    },
    {
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="w-[34px] h-[34px] text-[#f7b92c] mb-[14px]"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M4 17l5-5 4 4 7-8M15 8h5v5" />
            </svg>
        ),
        title: "Always improving",
        desc: "I ship, listen and improve. Your feedback shapes what comes next.",
        delay: "0.3s",
    },
];

function WhatIStandForSection() {
    return (
        <section className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 md:px-10 pt-[100px] text-center">
            <span className="inline-block">
                <Eyebrow>What I stand for</Eyebrow>
            </span>
            <h2 className="text-[clamp(26px,3.6vw,40px)] leading-[1.15] font-semibold mt-[14px] mb-[12px] text-white">
                Four promises <GoldText>to every seller</GoldText>
            </h2>

            <div className="grid grid-cols-2 gap-[18px] mt-[44px] max-[900px]:grid-cols-1">
                {promises.map(({ icon, title, desc, delay }) => (
                    <div
                        key={title}
                        className="group relative overflow-hidden text-left border border-white/10 rounded-[22px] p-[30px] transition-colors duration-200 md:transition-[border-color,transform] md:duration-[300ms] hover:border-[#f7b92c80] md:hover:-translate-y-1"
                        style={{
                            background: "linear-gradient(160deg, #ffffff0d, #0d0d0d 55%)",
                            ["--d" as string]: delay,
                        }}
                        onPointerMove={(e) => {
                            const r = e.currentTarget.getBoundingClientRect();
                            e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
                            e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
                        }}
                    >
                        {/* Radial glow on hover */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[22px]"
                            style={{
                                background:
                                    "radial-gradient(320px circle at var(--x, 50%) var(--y, 0), #f7b92c24, transparent 60%)",
                            }}
                        />
                        {icon}
                        <h3 className="text-[18px] font-semibold text-white">{title}</h3>
                        <p className="text-[13.5px] text-[#a9a9a9] mt-1.5">{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

// ─── Journey / Timeline ───────────────────────────────────────────────────────
const journeyItems = [
    {
        label: "The problem",
        title: "Lost in the DMs",
        desc: "Selling on Instagram meant answering the same questions all day and losing orders in the noise.",
    },
    {
        label: "The idea",
        title: "One link, one store",
        desc: "A simple storefront for every seller, plus a bot that brings orders to WhatsApp.",
    },
    {
        label: "The build",
        title: "Premium and smooth",
        desc: "A store that looks great and works on any phone, with the details done right.",
    },
    {
        label: "Today",
        title: "Live and free to start",
        desc: "Studio Index is open to sellers, and we're just getting going.",
    },
    {
        label: "Next",
        title: "Growing with you",
        desc: "Online payments, discount codes, analytics and more are on the way.",
    },
];

const comingPills = [
    { label: "Online payments", delay: "0s" },
    { label: "Discount codes", delay: "-0.7s" },
    { label: "Sales analytics", delay: "-1.4s" },
    { label: "Custom domain", delay: "-2.1s" },
];

function JourneySection() {
    const timelineRef = useRef<HTMLDivElement>(null);
    const pillsRef = useViewportAnimation<HTMLDivElement>();
    useEffect(() => {
        const el = timelineRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("tl-in");
                        io.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.12 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <section className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 md:px-10 pt-[100px] text-center">
            <span className="inline-block">
                <Eyebrow>The journey</Eyebrow>
            </span>
            <h2 className="text-[clamp(26px,3.6vw,40px)] leading-[1.15] font-semibold mt-[14px] mb-[12px] text-white">
                From a <GoldText>frustration</GoldText> to a platform
            </h2>

            {/* Timeline */}
            <div
                ref={timelineRef}
                className="tl relative max-w-[720px] mt-[50px] mx-auto pl-[56px] text-left max-[560px]:pl-[46px]"
            >
                {journeyItems.map(({ label, title, desc }) => (
                    <div key={title} className="relative mb-[34px] last:mb-0">
                        {/* Dot */}
                        <span
                            className="absolute rounded-full"
                            style={{
                                left: -49,
                                top: 5,
                                width: 14,
                                height: 14,
                                background: "#f7b92c",
                                boxShadow: "0 0 0 6px #050505, 0 0 20px #f7b92c",
                            }}
                        />
                        <em className="not-italic text-[11px] tracking-[2px] font-semibold uppercase text-[#f7b92c]">
                            {label}
                        </em>
                        <h3 className="text-[19px] font-semibold text-white my-0.5">
                            {title}
                        </h3>
                        <p className="text-[14px] text-[#a9a9a9]">{desc}</p>
                    </div>
                ))}
            </div>

            {/* Coming soon pills */}
            <div ref={pillsRef} className="flex flex-wrap gap-3 justify-center mt-[30px]">
                {comingPills.map(({ label, delay }) => (
                    <span
                        key={label}
                        className="px-[22px] py-3 rounded-full text-[13.5px] font-medium bg-[linear-gradient(100deg,transparent_30%,#f7b92c26,transparent_70%)] bg-[length:250%_100%] animate-[aboutSweep_3.5s_linear_infinite]"
                        style={{
                            border: "1px dashed #f7b92c80",
                            animationDelay: delay,
                        }}
                    >
                        {label}
                    </span>
                ))}
            </div>
        </section>
    );
}

// ─── CTA / Contact banner ─────────────────────────────────────────────────────
function CTASection() {
    return (
        <section
            id="cta"
            className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 md:px-10 mt-[100px] mb-[40px]"
        >
            <div
                className="text-center rounded-[32px] px-[30px] py-[60px] shadow-[0_8px_24px_#f7b92c14] md:shadow-[0_0_50px_#f7b92c22]"
                style={{
                    border: "1px solid #f7b92c70",
                    background:
                        "radial-gradient(80% 120% at 50% 140%, #f7b92c50, transparent 70%), #0d0d0d",
                }}
            >
                <h2 className="text-[clamp(26px,3.6vw,40px)] leading-[1.15] font-semibold text-white">
                    Have an idea, a question <GoldText>or feedback?</GoldText>
                </h2>
                <p className="text-[#a9a9a9] max-w-[520px] mx-auto mt-3">
                    Message me directly. I read every message, and I'd love to
                    hear from you.
                </p>
                <div className="flex gap-3.5 mt-[30px] flex-wrap justify-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 rounded-full font-semibold text-[14px] px-[26px] py-[14px] border border-white/10 bg-transparent text-white transition-all duration-[250ms] hover:-translate-y-0.5 hover:border-[#f7b92c80]"
                    >
                        Contact Me
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center justify-center gap-2 rounded-full font-semibold text-[14px] px-[26px] py-[14px] text-[#1a1204] border-0 transition-all duration-[250ms] hover:-translate-y-0.5"
                        style={{
                            background: "linear-gradient(180deg,#ffd65f,#f3a81a)",
                            boxShadow: "0 6px 24px #f7b92c40",
                        }}
                    >
                        Create Your Account{" "}
                        <ArrowRight size={14} weight="bold" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export function AboutPage() {
    return (
        <div className="relative w-full min-h-svh flex flex-col overflow-x-clip bg-[#050505] text-white font-[Poppins,sans-serif]">
            <FeaturesBackground />
            <LandingHeader />

            <main className="w-full flex flex-col items-center relative z-10">
                <HeroSection />
                <FounderLetterSection />
                <WhatIStandForSection />
                <JourneySection />
                <CTASection />
            </main>

            <LandingFooter />
        </div>
    );
}

