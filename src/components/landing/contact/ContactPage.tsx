import { useEffect, useRef, useState } from "react";
import {
    PaperPlaneTilt,
    WhatsappLogo,
    InstagramLogo,
    EnvelopeSimple,
    ArrowRight,
} from "@phosphor-icons/react";
import { FeaturesBackground } from "../features/FeaturesBackground";
import { LandingHeader } from "../home/LandingHeader";
import { LandingFooter } from "../home/LandingFooter";
import { useViewportAnimation } from "../../../hooks/useViewportAnimation";
import { isHighPerfTier } from "../../../utils/adaptivePerformance";

// ─── Contact Channels ────────────────────────────────────────────────────────
const channels = [
    {
        title: "WhatsApp",
        desc: "Quick questions and setup help",
        Icon: WhatsappLogo,
        href: "#",
        delay: "0s",
    },
    {
        title: "Instagram",
        desc: "@studioindex · slide into the DMs",
        Icon: InstagramLogo,
        href: "#",
        delay: "0.1s",
    },
    {
        title: "Email",
        desc: "hello@studioindex.app",
        Icon: EnvelopeSimple,
        href: "mailto:hello@studioindex.app",
        delay: "0.2s",
    },
];

// ─── Category Pills list with id 1, 2, 3, 4 ──────────────────────────────────
const pillOptions = [
    { id: 1, label: "Getting started" },
    { id: 2, label: "Pro & WhatsApp bot" },
    { id: 3, label: "Feedback or idea" },
    { id: 4, label: "Something's broken" },
];

export function ContactPage() {
    const [selectedPill, setSelectedPill] = useState(1);
    const [messageText, setMessageText] = useState("");
    const planeStageRef = useViewportAnimation<HTMLDivElement>();
    const marqueeRef = useViewportAnimation<HTMLDivElement>();
    const heroGoldRef = useViewportAnimation<HTMLSpanElement>();
    const channelsGoldRef = useViewportAnimation<HTMLSpanElement>();
    const planeSvgRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        const svg = planeSvgRef.current;
        if (!svg || isHighPerfTier()) return;
        try {
            svg.setCurrentTime?.(2.35);
            svg.pauseAnimations?.();
        } catch {
            // Safe fallback if browser omits SVG SMIL controller methods
        }
    }, []);

    function getPillStyle(currentSelected: number, pillId: number): React.CSSProperties {
        if (currentSelected === pillId) {
            return {
                background: "linear-gradient(#ffd65f, #f3a81a)",
                color: "#1a1204",
                borderColor: "transparent",
                boxShadow: "0 4px 16px rgba(247, 185, 44, 0.35)",
            };
        }
        return {};
    }

    return (
        <div className="relative w-full min-h-svh flex flex-col overflow-x-clip bg-[#050505] text-white font-[Poppins,sans-serif]">
            <style>{`
                .text-stroke-gold {
                    -webkit-text-stroke: 1px rgba(247, 185, 44, 0.4);
                }
                
                .flight-track {
                    fill: none;
                    stroke: url(#plane-grad);
                    stroke-width: 2.5;
                    stroke-linecap: round;
                    stroke-dasharray: 2 12;
                    animation: contactFlight 1.2s linear infinite;
                }

                .floating-tile {
                    position: absolute;
                    width: 64px;
                    height: 64px;
                    border-radius: 20px;
                    display: grid;
                    place-items: center;
                    border: 1px solid rgba(255, 255, 255, 0.18);
                    background: #141418;
                    box-shadow: 0 10px 24px rgba(0,0,0,0.55);
                    color: #f7b92c;
                    animation: contactFloat 5s ease-in-out infinite alternate;
                }

                @media (min-width: 768px) {
                    .floating-tile {
                        background: linear-gradient(160deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.02));
                        box-shadow: 0 14px 40px rgba(0,0,0,0.6), 0 0 30px rgba(247, 185, 44, 0.15);
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(10px);
                    }
                }
            `}</style>

            <FeaturesBackground />
            <LandingHeader />

            <main className="w-full flex flex-col items-center relative z-10">
                {/* ══════════════════════════════════════════
                    HERO SECTION
                ══════════════════════════════════════════ */}
                <section className="max-w-[1100px] w-full px-4 sm:px-6 md:px-10 pt-[50px] grid grid-cols-[1.1fr_1fr] gap-10 items-center max-[900px]:grid-cols-1">
                    {/* Left Hero Details */}
                    <div>
                        <span className="inline-flex items-center gap-2.5 text-[#f7b92c] text-[12px] font-semibold tracking-[2px] uppercase before:content-[''] before:w-7 before:h-px before:bg-[#f7b92c]">
                            Contact
                        </span>

                        <h1 className="text-[clamp(34px,5vw,56px)] leading-[1.08] font-bold tracking-[-1px] my-[18px] text-white">
                            Let's{" "}
                            <span ref={heroGoldRef} className="bg-[linear-gradient(90deg,#ffd65f,#f3a81a,#fff1b8,#ffd65f)] bg-[length:200%_100%] bg-clip-text text-transparent animate-[sh_6s_linear_infinite]">
                                talk.
                            </span>
                        </h1>

                        <p className="text-[#a9a9a9] max-w-[520px] text-[16px] leading-relaxed">
                            Questions, ideas or something not working? Send us a message and we'll take it from there.
                        </p>

                        <div className="flex gap-3.5 mt-[30px] flex-wrap">
                            <a
                                href="#form"
                                className="inline-flex items-center justify-center gap-2 rounded-full font-semibold text-[14px] px-[26px] py-[14px] text-[#1a1204] border-0 transition-all duration-200 hover:-translate-y-0.5"
                                style={{
                                    background: "linear-gradient(180deg, #ffd65f, #f3a81a)",
                                    boxShadow: "0 6px 24px rgba(247, 185, 44, 0.25)",
                                }}
                            >
                                <span>Send a message</span>
                                <PaperPlaneTilt size={15} weight="bold" />
                            </a>

                            <a
                                href="#ch"
                                className="inline-flex items-center justify-center gap-2 rounded-full font-semibold text-[14px] px-[26px] py-[14px] border border-white/10 bg-transparent text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[#f7b92c80]"
                            >
                                <WhatsappLogo size={15} weight="bold" />
                                <span>Chat on WhatsApp</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Hero: Flying Plane Animation & Path Scene */}
                    <div
                        ref={planeStageRef}
                        className="relative w-full h-[340px] sm:h-[380px] grid place-items-center"                        style={{ ["--d" as string]: "0.15s" }}
                    >
                        {/* Interactive SVG Stage */}
                        <svg ref={planeSvgRef} className="w-full max-w-[470px] h-auto overflow-hidden" viewBox="-10 0 490 380" aria-hidden="true">
                            <defs>
                                <linearGradient id="plane-grad" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0" stopColor="#fff1b8" />
                                    <stop offset=".45" stopColor="#f7b92c" />
                                    <stop offset="1" stopColor="#a86a08" />
                                </linearGradient>
                                <linearGradient id="plane-wing" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0" stopColor="#fff3c0" />
                                    <stop offset="1" stopColor="#f7b92c" />
                                </linearGradient>
                            </defs>

                            {/* Animated flight track path */}
                            <path id="flight-pt" className="flight-track" d="M20 330C130 345 150 130 250 170S390 70 440 40" />

                            {/* Origin dot */}
                            <circle cx="20" cy="330" r="5" fill="#ffd65f" />

                            {/* Destination pulse ring & dot */}
                            <circle cx="440" cy="40" r="6" fill="#ffd65f" />
                            <circle cx="440" cy="40" r="5" fill="none" stroke="#f7b92c" strokeWidth="2">
                                <animate attributeName="r" values="5;5;5;32" keyTimes="0;.8;.82;1" dur="5s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0;0;.9;0" keyTimes="0;.8;.82;1" dur="5s" repeatCount="indefinite" />
                            </circle>

                            {/* Airplane travelling along flight-pt with automatic rotation */}
                            <g className="md:[filter:drop-shadow(0_0_10px_#f7b92c)]">
                                <path d="M18 0L-14 -13 -7 0 -14 13z" fill="url(#plane-wing)" />
                                <path d="M18 0L-7 0" stroke="#b9780a" strokeWidth="1.2" />
                                <animateMotion dur="5s" repeatCount="indefinite" rotate="auto">
                                    <mpath href="#flight-pt" />
                                </animateMotion>
                            </g>
                        </svg>

                        {/* Sparkles */}
                        <i className="absolute not-italic text-[#ffd65f] text-sm animate-[tw_2.4s_ease-in-out_infinite]" style={{ left: "18%", top: "20%" }}>✦</i>
                        <i className="absolute not-italic text-[#ffd65f] text-[22px] animate-[tw_2.4s_ease-in-out_infinite]" style={{ right: "16%", bottom: "22%", animationDelay: "-1s" }}>✦</i>
                        <i className="absolute not-italic text-[#ffd65f] text-[12px] animate-[tw_2.4s_ease-in-out_infinite]" style={{ right: "24%", top: "14%", animationDelay: "-1.8s" }}>✦</i>

                        {/* Floating glass tiles matching starter */}
                        <div className="floating-tile" style={{ left: "2%", top: "4%" }}>
                            <WhatsappLogo size={28} weight="bold" />
                        </div>
                        <div className="floating-tile" style={{ right: "4%", bottom: "8%", animationDelay: "-2s" }}>
                            <InstagramLogo size={28} weight="bold" />
                        </div>
                        <div className="floating-tile" style={{ left: "44%", bottom: 0, width: 54, height: 54, borderRadius: 17, animationDelay: "-3.5s" }}>
                            <EnvelopeSimple size={24} weight="bold" />
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════
                    TICKER / MARQUEE
                ══════════════════════════════════════════ */}
                <div
                    ref={marqueeRef}
                    className="w-full overflow-hidden my-[60px] select-none pointer-events-none [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)] [-webkit-mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
                >
                    <div className="flex gap-10 w-max animate-[contactMarquee_30s_linear_infinite] keep-anim text-[clamp(28px,6vw,72px)] font-bold tracking-[-1px] whitespace-nowrap text-transparent text-stroke-gold">
                        {[
                            "Ask a question",
                            "Share an idea",
                            "Say hello",
                            "Ask a question",
                            "Share an idea",
                            "Say hello",
                        ].map((txt, idx) => (
                            <span key={idx} className="flex items-center">
                                {txt}
                                <span className="ml-10 text-[#f7b92c] font-normal not-italic">✦</span>
                            </span>
                        ))}
                    </div>
                </div>

                {/* ══════════════════════════════════════════
                    MAIN SECTION: DIRECT CHANNELS & FORM
                ══════════════════════════════════════════ */}
                <section id="ch" className="max-w-[1100px] w-full px-4 sm:px-6 md:px-10 mb-16">
                    <div className="grid grid-cols-[0.85fr_1.15fr] gap-[30px] items-start max-[900px]:grid-cols-1">
                        
                        {/* ── Left: Direct Channels ── */}
                        <div className="grid gap-4">
                            <div>
                                <span className="inline-flex items-center gap-2.5 text-[#f7b92c] text-[12px] font-semibold tracking-[2px] uppercase before:content-[''] before:w-7 before:h-px before:bg-[#f7b92c]">
                                    Reach us directly
                                </span>
                                <h2 className="text-[28px] sm:text-[32px] font-semibold text-white mt-2.5 mb-4">
                                    Pick your{" "}
                                    <span ref={channelsGoldRef} className="bg-[linear-gradient(90deg,#ffd65f,#f3a81a,#fff1b8,#ffd65f)] bg-[length:200%_100%] bg-clip-text text-transparent animate-[sh_6s_linear_infinite]">
                                        favourite way
                                    </span>
                                </h2>
                            </div>

                            {channels.map(({ title, desc, Icon, href, delay }) => (
                                <a
                                    key={title}
                                    href={href}
                                    style={{ ["--d" as string]: delay }}
                                    onPointerMove={(e) => {
                                        const r = e.currentTarget.getBoundingClientRect();
                                        e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
                                        e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
                                    }}
                                    className="group relative overflow-hidden text-left border border-white/10 rounded-[22px] p-6 bg-[linear-gradient(160deg,#ffffff0d,#0d0d0d_55%)] transition-colors duration-200 md:transition-all md:duration-300 hover:border-[#f7b92c80] md:hover:-translate-y-1 block cursor-pointer"
                                >
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[22px]"
                                        style={{
                                            background: "radial-gradient(320px circle at var(--x, 50%) var(--y, 0), rgba(247,185,44,0.15), transparent 60%)",
                                        }}
                                    />

                                    <div className="flex gap-4 items-center">
                                        <span className="flex-none w-[52px] h-[52px] rounded-[16px] grid place-items-center bg-[#f7b92c1a] border border-[#f7b92c55] text-[#f7b92c]">
                                            <Icon size={24} weight="bold" />
                                        </span>

                                        <div>
                                            <h3 className="text-[16px] font-semibold text-white">{title}</h3>
                                            <p className="text-[13px] text-[#a9a9a9] mt-0.5">{desc}</p>
                                        </div>

                                        <ArrowRight
                                            size={20}
                                            weight="bold"
                                            className="ml-auto text-[#f7b92c] transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* ── Right: Message Form with Floating Labels (.fl) ── */}
                        <div
                            id="form"
                            style={{
                                background: "radial-gradient(70% 60% at 100% 0, #f7b92c1f, transparent 60%), #0d0d0d",
                                ["--d" as string]: "0.1s",
                            }}
                            className="relative rounded-[30px] p-6 sm:p-10 text-left border border-white/10 shadow-lg md:shadow-[0_0_70px_rgba(247,185,44,0.11)]"
                        >
                            <h3 className="text-[24px] font-semibold text-white">Send us a message</h3>
                            <p className="text-[#a9a9a9] text-[13.5px] mt-1 mb-6">
                                Fill this in and we'll get back to you as soon as we can.
                            </p>

                            {/* Inputs with placeholder=" " and floating labels */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2 mb-6">
                                <div className="fl">
                                    <input
                                        id="nm"
                                        type="text"
                                        placeholder=" "
                                    />
                                    <label htmlFor="nm">Your name</label>
                                </div>
                                <div className="fl">
                                    <input
                                        id="ct"
                                        type="text"
                                        placeholder=" "
                                    />
                                    <label htmlFor="ct">WhatsApp or email</label>
                                </div>
                            </div>

                            {/* Category Pills */}
                            <div className="mb-7">
                                <div className="text-[11.5px] tracking-[1px] text-[#a9a9a9] mb-2.5 font-semibold">
                                    WHAT'S THIS ABOUT?
                                </div>
                                <div className="flex flex-wrap gap-2.5">
                                    {pillOptions.map((pill) => (
                                        <button
                                            key={pill.id}
                                            type="button"
                                            value={pill.id}
                                            style={getPillStyle(selectedPill, pill.id)}
                                            onClick={() => setSelectedPill(pill.id)}
                                            className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-white text-[12.5px] font-medium transition-all duration-200 hover:border-[#f7b92c80] cursor-pointer"
                                        >
                                            {pill.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Floating Textarea */}
                            <div className="fl mb-8">
                                <textarea
                                    id="ms"
                                    maxLength={500}
                                    placeholder=" "
                                    value={messageText}
                                    onChange={(e) => setMessageText(e.target.value)}
                                />
                                <label htmlFor="ms">Your message</label>
                                <div className="text-right text-[11px] text-[#a9a9a9] mt-1">
                                    {messageText.length} / 500
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="button"
                                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-sm text-[#1a1204] transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
                                style={{
                                    background: "linear-gradient(180deg, #ffd65f, #f3a81a)",
                                    boxShadow: "0 6px 24px rgba(247, 185, 44, 0.25)",
                                }}
                            >
                                <PaperPlaneTilt size={16} weight="bold" />
                                <span>Send Message</span>
                            </button>
                        </div>

                    </div>
                </section>
            </main>

            <LandingFooter />
        </div>
    );
}
