import { useState } from "react";
import {
    Check,
    ArrowRight,
    Crown,
    Lightning,
    WhatsappLogo,
    Headphones,
    Plus,
} from "@phosphor-icons/react";
import { FeaturesBackground } from "../features/FeaturesBackground";
import { LandingHeader } from "../home/LandingHeader";
import { LandingFooter } from "../home/LandingFooter";
import { useViewportAnimation } from "../../../hooks/useViewportAnimation";

// ─── Config — change these two numbers to update pricing everywhere ──────────
const PRO_PRICE  = 5_000; // ₦ / month
const SLIDER_MIN = 5;
const SLIDER_MAX = 200;

// ─── Value Check Section ─────────────────────────────────────────────────────
function ValueCheck() {
    const [orders, setOrders] = useState(40);
    const sectionRef = useViewportAnimation<HTMLElement>();

    // PRO_PRICE ÷ how many orders → cost per order. Updates on every drag tick.
    const costPerOrder = Math.round(PRO_PRICE / orders);

    // Gold fill % for the track (maps SLIDER_MIN→SLIDER_MAX to 0%→100%)
    const fillPct = ((orders - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * 100;

    return (
        <section ref={sectionRef} className="max-w-[1100px] w-full px-4 sm:px-6 md:px-10 pt-[90px] text-center">
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2.5 text-[#f7b92c] text-[12px] font-semibold tracking-[2px] uppercase before:content-[''] before:w-7 before:h-px before:bg-[#f7b92c]">
                Value check
            </span>

            <h2 className="text-[clamp(26px,3.6vw,40px)] leading-[1.15] font-semibold mt-[14px] mb-3 text-white">
                See what Pro{" "}
                <span className="bg-[linear-gradient(90deg,#ffd65f,#f3a81a,#fff1b8,#ffd65f)] bg-[length:200%_100%] bg-clip-text text-transparent animate-[sh_6s_linear_infinite]">
                    really costs you
                </span>
            </h2>

            <p className="text-[#a9a9a9] max-w-[520px] mx-auto">
                Slide to your expected orders per month and see the cost of Pro for each one.
            </p>

            {/*
                .calc — the card itself carries the border + background + shadow.
                Grid: left (1.2fr) = label + slider, right (1fr) = result box.
                text-left so the label text isn't centered.
            */}
            <div
                className="grid grid-cols-[1.2fr_1fr] gap-10 items-center mt-11 text-left rounded-[30px] p-11 max-[900px]:grid-cols-1 max-[900px]:p-7 shadow-[0_8px_24px_#f7b92c12] md:shadow-[0_0_60px_#f7b92c14]"
                style={{
                    border: "1px solid #f7b92c4d",
                    background: "radial-gradient(70% 100% at 100% 0, #f7b92c1f, transparent 60%), #0d0d0d",
                }}
            >
                {/* ── Left: label + slider ── */}
                <div>
                    {/*
                        label structure matches the prototype exactly:
                        - small muted text "Orders per month" on top
                        - big bold live number below (updates as you drag)
                        - then the input range below that
                    */}
                    <label htmlFor="orders-slider" className="text-[14px] text-[#a9a9a9]">
                        Orders per month
                        <b className="block text-[40px] text-white font-bold leading-[1.2] mb-[18px]">
                            {orders} orders
                        </b>
                    </label>

                    {/*
                        Controlled input — React owns the value.
                        onChange fires on every drag movement → setOrders(newValue)
                        → React re-renders → orders updates → costPerOrder recalculates.
                        --p is the CSS custom property that fills gold up to the thumb.
                    */}
                    <input
                        id="orders-slider"
                        type="range"
                        className="pricing-slider w-full"
                        min={SLIDER_MIN}
                        max={SLIDER_MAX}
                        value={orders}
                        style={{ "--p": `${fillPct}%` } as React.CSSProperties}
                        onChange={(e) => setOrders(Number(e.target.value))}
                    />
                </div>

                {/* ── Right: result box (.res) ── */}
                <div
                    className="text-center rounded-[22px] p-[26px]"
                    style={{ background: "#ffffff08", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                    <small className="text-[#a9a9a9] text-[13px]">Pro works out to about</small>

                    {/*
                        costPerOrder recalculates every render.
                        toLocaleString puts a comma in e.g. "1,250"
                    */}
                    <strong className="block text-[54px] leading-[1.1] my-1.5 bg-[linear-gradient(90deg,#ffd65f,#f3a81a,#fff1b8,#ffd65f)] bg-[length:200%_100%] bg-clip-text text-transparent animate-[sh_6s_linear_infinite]">
                        ₦{costPerOrder.toLocaleString("en-US")}
                    </strong>

                    <p className="text-[13px] text-[#a9a9a9]">
                        per order, with automatic WhatsApp alerts and order management included.
                    </p>
                </div>
            </div>
        </section>
    );
}

// ─── Data ────────────────────────────────────────────────────────────────────
const planFeatures = [
    { feature: "Online storefront",                    free: true,  pro: true  },
    { feature: "Unique store link",                    free: true,  pro: true  },
    { feature: "Add products & manage cart",           free: true,  pro: true  },
    { feature: "Manual order lookup",                  free: true,  pro: true  },
    { feature: "Automatic WhatsApp notifications",     free: false, pro: true  },
    { feature: "Manage orders via WhatsApp",           free: false, pro: true  },
    { feature: "Priority support",                     free: false, pro: true  },
];

// ─── Shared: Gold gradient text ───────────────────────────────────────────────
function GoldText({ children }: { children: React.ReactNode }) {
    const ref = useViewportAnimation<HTMLSpanElement>();
    return (
        <span ref={ref} className="bg-[linear-gradient(90deg,#ffd65f,#f3a81a,#fff1b8,#ffd65f)] bg-[length:200%_100%] bg-clip-text text-transparent animate-[sh_6s_linear_infinite]">
            {children}
        </span>
    );
}

// ─── Shared: Eyebrow label ────────────────────────────────────────────────────
function Eyebrow({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center gap-2.5 text-[#f7b92c] text-[12px] font-semibold tracking-[2px] uppercase before:content-[''] before:w-7 before:h-px before:bg-[#f7b92c]">
            {children}
        </span>
    );
}

// ─── Shared: Gold check bubble ────────────────────────────────────────────────
function CheckBubble() {
    return (
        <span className="flex-none w-[22px] h-[22px] rounded-full bg-[#f7b92c] text-[#1a1204] grid place-items-center">
            <Check size={12} weight="bold" />
        </span>
    );
}

// ─── FAQ Accordion Item ───────────────────────────────────────────────────────
function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
    const [open, setOpen] = useState(defaultOpen);
    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between gap-4 py-[18px] px-[22px] text-left text-[15px] font-medium text-white cursor-pointer bg-transparent border-0"
            >
                {q}
                <Plus
                    size={18}
                    weight="bold"
                    className="flex-none text-[#f7b92c] transition-transform duration-[250ms]"
                    style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
                />
            </button>
            {open && (
                <p className="px-[22px] pb-5 text-[14px] text-[#a9a9a9]">{a}</p>
            )}
        </div>
    );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export function PricingPage() {
    const proCardRef = useViewportAnimation<HTMLDivElement>();

    return (
        <div className="relative w-full min-h-svh flex flex-col overflow-x-clip bg-[#050505] text-white font-[Poppins,sans-serif]">
            <FeaturesBackground />
            <LandingHeader />

            <main className="w-full flex flex-col items-center relative z-10">

                {/* ══════════════════════════════════════════
                    HERO
                ══════════════════════════════════════════ */}
                <section className="max-w-[1100px] w-full px-4 sm:px-6 md:px-10 pt-[50px] text-center">

                    <Eyebrow>Simple &amp; flexible pricing</Eyebrow>

                    <h1 className="text-[clamp(34px,5vw,56px)] leading-[1.08] font-bold tracking-[-1px] mt-[18px] mb-[18px] text-white">
                        Pick a plan that <GoldText>grows with you</GoldText>
                    </h1>

                    <p className="text-[#a9a9a9] text-base max-w-[520px] mx-auto">
                        Start free and upgrade anytime for more power and automation.
                    </p>

                    {/* Pills */}
                    <div className="flex gap-3 justify-center flex-wrap mt-[26px]">
                        {["Free plan, forever", "Upgrade anytime", "Prices in Naira (₦)"].map((label) => (
                            <span
                                key={label}
                                className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full text-[12.5px] bg-white/[0.03] text-white"
                            >
                                <Check size={14} weight="bold" className="text-[#f7b92c]" />
                                {label}
                            </span>
                        ))}
                    </div>

                    {/* ── Plan Cards ── */}
                    <div className="grid grid-cols-[1fr_1.08fr] gap-[26px] max-w-[860px] mx-auto mt-16 items-stretch max-[900px]:grid-cols-1 max-[900px]:mt-[50px]">

                        {/* Free Plan */}
                        <div className="h-full">
                            <div
                                onPointerMove={(e) => {
                                    if (e.pointerType !== "mouse") return;
                                    const r = e.currentTarget.getBoundingClientRect();
                                    const x = (e.clientX - r.left) / r.width - 0.5;
                                    const y = (e.clientY - r.top) / r.height - 0.5;
                                    e.currentTarget.style.transform = `perspective(900px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg)`;
                                }}
                                onPointerLeave={(e) => {
                                    e.currentTarget.style.transform = "";
                                }}
                                className="h-full border border-white/10 rounded-[28px] p-[34px_30px] bg-[linear-gradient(160deg,#ffffff0e,#0d0d0d_60%)] text-left max-[560px]:p-[30px_22px] transition-transform duration-[250ms] ease-out hover:border-[#f7b92c80]"
                            >
                                <h3 className="text-2xl font-semibold text-white">Free Plan</h3>
                                <div className="text-[13px] text-[#a9a9a9] mt-0.5">Perfect for getting started</div>

                                <div className="text-[48px] font-bold tracking-[-1px] mt-[22px] mb-1 text-white leading-none">
                                    ₦0{" "}
                                    <small className="text-sm font-normal text-[#a9a9a9] tracking-normal">/ forever</small>
                                </div>

                                <hr className="border-0 h-px bg-white/10 my-[22px]" />

                                <ul className="list-none p-0 grid gap-3.5 mb-[30px] text-sm text-white">
                                    {["Create your online store", "Add products & manage cart", "Get a unique store link", "Manual order lookup"].map((item) => (
                                        <li key={item} className="flex gap-3 items-center">
                                            <CheckBubble />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <a href="#cta" className="flex items-center justify-center w-full gap-2 rounded-full font-semibold text-sm px-[26px] py-[14px] border border-white/10 bg-transparent text-white transition-all duration-[250ms] hover:-translate-y-0.5 hover:border-[#f7b92c80]">
                                    Start Free
                                </a>
                            </div>
                        </div>

                        {/* Pro Plan */}
                        <div ref={proCardRef} className="h-full">
                            <div
                                style={{
                                    background: "radial-gradient(110% 70% at 100% 0, #f7b92c33, transparent 60%), radial-gradient(80% 60% at 0 100%, #f7b92c1a, transparent 60%), #0c0a05",
                                }}
                                onPointerMove={(e) => {
                                    if (e.pointerType !== "mouse") return;
                                    const r = e.currentTarget.getBoundingClientRect();
                                    const x = (e.clientX - r.left) / r.width - 0.5;
                                    const y = (e.clientY - r.top) / r.height - 0.5;
                                    e.currentTarget.style.transform = `perspective(900px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg)`;
                                }}
                                onPointerLeave={(e) => {
                                    e.currentTarget.style.transform = "";
                                }}
                                className="relative h-full border-[1.5px] border-[#f7b92c]/75 rounded-[28px] p-[34px_30px] text-left max-[560px]:p-[30px_22px] shadow-[0_8px_24px_#f7b92c1c] md:shadow-[0_0_60px_#f7b92c28] transition-transform duration-[250ms] ease-out"
                            >

                                {/* Most Popular ribbon */}
                                <span className="absolute top-[-15px] left-1/2 -translate-x-1/2 flex items-center gap-1.5 whitespace-nowrap bg-[linear-gradient(180deg,#ffd65f,#f3a81a)] text-[#1a1204] text-[12.5px] font-semibold px-[18px] py-[7px] rounded-full shadow-[0_6px_20px_#f7b92c55]">
                                    <Crown size={14} weight="fill" /> Most Popular
                                </span>

                                {/* Floating diamond */}
                                <svg className="absolute right-[22px] top-[26px] w-24 overflow-hidden animate-[fy_5s_ease-in-out_infinite_alternate] md:drop-shadow-[0_0_22px_#f7b92c99]" viewBox="-12 0 124 92">
                                    <polygon points="12,28 28,6 38,28" fill="#e7a017" />
                                    <polygon points="38,28 28,6 50,6" fill="#ffd66b" />
                                    <polygon points="38,28 50,6 62,28" fill="#f7be3a" />
                                    <polygon points="62,28 50,6 72,6" fill="#ffe29a" />
                                    <polygon points="62,28 72,6 88,28" fill="#d68e10" />
                                    <polygon points="12,28 38,28 50,84" fill="#c9800b" />
                                    <polygon points="38,28 62,28 50,84" fill="#f5b52a" />
                                    <polygon points="62,28 88,28 50,84" fill="#a96a06" />
                                </svg>

                                {/* Sparkles */}
                                <i className="absolute not-italic text-[#ffd65f] text-sm animate-[tw_2.4s_ease-in-out_infinite]" style={{ right: 130, top: 34, animationDelay: "0s" }}>✦</i>
                                <i className="absolute not-italic text-[#ffd65f] text-sm animate-[tw_2.4s_ease-in-out_infinite]" style={{ right: 14, top: 120, animationDelay: "-.8s" }}>✦</i>
                                <i className="absolute not-italic text-[#ffd65f] text-[9px] animate-[tw_2.4s_ease-in-out_infinite]" style={{ right: 150, top: 100, animationDelay: "-1.6s" }}>✦</i>

                                <h3 className="text-2xl font-semibold text-white">Pro Plan</h3>
                                <div className="text-[13px] text-[#a9a9a9] mt-0.5">Automate &amp; grow your business</div>

                                <div className="text-[48px] font-bold tracking-[-1px] mt-[22px] mb-1 text-white leading-none">
                                    ₦5,000{" "}
                                    <small className="text-sm font-normal text-[#a9a9a9] tracking-normal">/ month</small>
                                </div>

                                <hr className="border-0 h-px bg-white/10 my-[22px]" />

                                <ul className="list-none p-0 grid gap-3.5 mb-[30px] text-sm text-white">
                                    {["All Free features", "Automatic WhatsApp notifications", "Manage orders via WhatsApp", "Priority support"].map((item) => (
                                        <li key={item} className="flex gap-3 items-center">
                                            <CheckBubble />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#cta"
                                    className="flex items-center justify-center w-full gap-2 rounded-full font-semibold text-sm px-[26px] py-[14px] text-[#1a1204] border-0 transition-all duration-[250ms] hover:-translate-y-0.5"
                                    style={{ background: "linear-gradient(180deg,#ffd65f,#f3a81a)", boxShadow: "0 6px 24px #f7b92c40" }}
                                >
                                    Upgrade to Pro <ArrowRight size={14} weight="bold" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-[#a9a9a9] text-[12.5px] mt-[22px] mb-16">
                        No credit card required · Cancel anytime
                    </p>
                </section>

                {/* ══════════════════════════════════════════
                    VALUE CHECK
                ══════════════════════════════════════════ */}
                <div className="w-full flex justify-center">
                    <ValueCheck />
                </div>

                {/* ══════════════════════════════════════════
                    WHY UPGRADE  +  COMPARE PLANS  — side by side
                ══════════════════════════════════════════ */}
                <section className="max-w-[1100px] w-full px-4 sm:px-6 md:px-10 pt-[90px]">
                    <div className="grid grid-cols-[1fr_1fr] gap-10 items-start max-[900px]:grid-cols-1">

                        {/* ── Left: Why Upgrade bento ── */}
                        <div>
                            <Eyebrow>Why upgrade</Eyebrow>
                            <h2 className="text-[clamp(22px,2.6vw,34px)] leading-[1.15] font-semibold mt-[14px] mb-8 text-white">
                                What you unlock <GoldText>with Pro</GoldText>
                            </h2>

                            {/*
                                3D TILT — how it works:
                                onPointerMove tracks where your cursor is inside the card.
                                x/y = cursor position as a fraction of the card size, centered at 0.
                                  e.g. cursor at far right edge → x ≈ +0.5
                                       cursor at far left edge  → x ≈ -0.5
                                We multiply by 10 to get degrees, then set CSS custom props
                                --rx (rotateX = tilt up/down) and --ry (rotateY = tilt left/right).
                                The CSS transform: perspective(900px) rotateX(--rx) rotateY(--ry)
                                makes it look 3D. transition: transform .25s eases it smoothly.
                                onPointerLeave resets both to 0deg → card returns flat.
                            */}
                            <div className="flex flex-col gap-[14px]">
                                {[
                                    { Icon: Lightning,    title: "Instant order alerts",    desc: "Get a WhatsApp message the moment a customer places an order. No more refreshing your dashboard." },
                                    { Icon: WhatsappLogo, title: "Orders from WhatsApp",    desc: "Confirm and manage orders by simply replying to the bot, right from the app you already use." },
                                    { Icon: Headphones,   title: "Priority support",        desc: "Stuck or have a question? Pro sellers get to the front of the line." },
                                ].map(({ Icon, title, desc }) => (
                                    <div
                                        key={title}
                                        onPointerMove={(e) => {
                                            if (e.pointerType !== "mouse") return;
                                            const r = e.currentTarget.getBoundingClientRect();
                                            const x = (e.clientX - r.left) / r.width  - 0.5;
                                            const y = (e.clientY - r.top)  / r.height - 0.5;
                                            e.currentTarget.style.transform =
                                                `perspective(900px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg)`;
                                        }}
                                        onPointerLeave={(e) => {
                                            e.currentTarget.style.transform = "";
                                        }}
                                        className="group relative overflow-hidden text-left border border-white/10 rounded-[22px] p-6 bg-[linear-gradient(160deg,#ffffff0d,#0d0d0d_55%)] transition-[transform,border-color] duration-[250ms] ease-out hover:border-[#f7b92c80]"
                                    >
                                        {/* Radial glow that follows the tilt direction */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[22px] bg-[radial-gradient(260px_circle_at_50%_0,#f7b92c20,transparent_60%)]" />
                                        <Icon size={30} weight="light" className="text-[#f7b92c] mb-3" />
                                        <h3 className="text-[16px] font-semibold text-white">{title}</h3>
                                        <p className="text-[13px] text-[#a9a9a9] mt-1">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── Right: Compare Plans table ── */}
                        <div>
                            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-landing-gold/90 px-3 py-1 rounded-full bg-landing-gold/10 border border-landing-gold/20 mb-3">
                                Compare plans
                            </span>
                            <h2 className="text-[clamp(22px,2.6vw,34px)] leading-[1.15] font-bold tracking-tight text-white mb-8">
                                Start free.{" "}
                                <span className="bg-gradient-to-r from-landing-gold via-[#ffe28a] to-[#ffb319] bg-clip-text text-transparent">
                                    Upgrade when ready.
                                </span>
                            </h2>

                            {/* Autogenerated from planFeatures array */}
                            <div className="border border-landing-line rounded-3xl overflow-hidden bg-landing-card text-left shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
                                {/* Table Header */}
                                <div className="grid grid-cols-[1.7fr_1fr_1fr] items-center text-xs font-semibold bg-white/[0.04] border-b border-landing-line">
                                    <div className="p-3.5 text-landing-muted">Feature</div>
                                    <div className="p-3.5 text-center text-white">Free</div>
                                    <div className="p-3.5 text-center text-landing-gold bg-landing-gold/[0.07]">Pro</div>
                                </div>
                                {/* Rows */}
                                {planFeatures.map((row, idx) => (
                                    <div
                                        key={row.feature}
                                        className={`grid grid-cols-[1.7fr_1fr_1fr] items-center text-xs transition-colors hover:bg-white/[0.02] ${idx !== 0 ? "border-t border-landing-line" : ""}`}
                                    >
                                        <div className="p-3.5 text-landing-fg/90 font-medium">{row.feature}</div>
                                        <div className="p-3.5 flex items-center justify-center">
                                            {row.free ? <Check weight="bold" className="w-4 h-4 text-landing-gold" /> : <span className="text-[#555]">—</span>}
                                        </div>
                                        <div className="p-3.5 flex items-center justify-center bg-landing-gold/[0.07] h-full">
                                            {row.pro ? <Check weight="bold" className="w-4 h-4 text-landing-gold" /> : <span className="text-[#555]">—</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>

                {/* ══════════════════════════════════════════
                    FAQ  +  CTA  —  side by side
                ══════════════════════════════════════════ */}
                <section className="max-w-[1100px] w-full px-4 sm:px-6 md:px-10 pt-[90px] mb-16">
                    <div className="grid grid-cols-[1.1fr_1fr] gap-8 items-start max-[900px]:grid-cols-1">

                        {/* ── Left: FAQ ── */}
                        <div>
                            <Eyebrow>Pricing FAQs</Eyebrow>
                            <h2 className="text-[clamp(22px,3vw,36px)] leading-[1.15] font-semibold mt-[14px] mb-8 text-white">
                                Questions <GoldText>before you start?</GoldText>
                            </h2>

                            <div className="text-left border border-white/10 rounded-[22px] overflow-hidden bg-[#0d0d0d]">
                                <FaqItem q="Is Studio Index really free to use?" a="Yes. The Free plan costs ₦0 and lets you create a store, add products, share your unique link and look up orders." defaultOpen />
                                <FaqItem q="Can I upgrade to Pro later?" a="Absolutely. Start on Free and upgrade whenever you want to add WhatsApp automation." />
                                <FaqItem q="What does the WhatsApp bot do?" a="It sends you automatic notifications when orders come in and lets you manage those orders right from WhatsApp." />
                                <FaqItem q="What's the difference between Free and Pro?" a="Free gives you the full storefront. Pro adds automatic WhatsApp notifications, order management via WhatsApp and priority support." />
                            </div>
                        </div>

                        {/* ── Right: CTA banner ── */}
                        <div className="min-[901px]:sticky min-[901px]:top-10" id="cta">
                            <div
                                className="relative text-center border border-[#f7b92c]/40 rounded-[32px] py-14 px-8 bg-landing-card overflow-hidden h-full flex flex-col items-center justify-center shadow-lg md:shadow-[0_0_50px_rgba(247,185,44,0.14)]"
                            >
                                {/* Radial glow from bottom */}
                                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(80%_120%_at_50%_140%,rgba(247,185,44,0.32),transparent_70%)]" />

                                <div className="relative z-10 flex flex-col items-center">
                                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                                        Start free today,{" "}
                                        <span className="bg-gradient-to-r from-landing-gold via-[#ffe28a] to-[#ffb319] bg-clip-text text-transparent">
                                            go Pro when you grow
                                        </span>
                                    </h2>
                                    <p className="mt-3 text-[#a9a9a9] text-sm max-w-xs">
                                        Create your store in minutes and share your link on Instagram.
                                    </p>
                                    <a
                                        href="#"
                                        className="mt-7 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm bg-gradient-to-b from-landing-gold to-[#d49410] text-[#1a1204] shadow-[0_6px_24px_rgba(247,185,44,0.25)] hover:shadow-[0_10px_34px_rgba(247,185,44,0.45)] hover:-translate-y-0.5 transition-all duration-200"
                                    >
                                        Create Your Account
                                        <ArrowRight weight="bold" className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </main>

            {/* ══════════════════════════════════════════
                FOOTER — exact same as FeaturesPage
            ══════════════════════════════════════════ */}
            <LandingFooter />
        </div>
    );
}
