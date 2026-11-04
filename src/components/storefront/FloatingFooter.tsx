import { useState, useEffect } from "react";
import { ArrowRightIcon, DiamondsFourIcon } from "@phosphor-icons/react";

export function FloatingFooter() {
    const [isHovered, setIsHovered] = useState(false);
    const [isDockHidden, setIsDockHidden] = useState(false);

    useEffect(() => {
        const grandFooter = document.getElementById("grand-anon-footer");
        if (!grandFooter || !("IntersectionObserver" in window)) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // When footer enters the viewport, slide down and fade away
                    // When user scrolls back up and footer leaves, slide back in
                    setIsDockHidden(entry.isIntersecting);
                });
            },
            {
                threshold: 0.08,
            }
        );

        observer.observe(grandFooter);

        return () => {
            observer.disconnect();
        };
    }, []);

    const scrollToClaimCard = () => {
        const target = document.getElementById("claim-luxury-link") || document.getElementById("grand-anon-footer");
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "center" });
            const input = document.getElementById("claim-handle-input");
            if (input) {
                setTimeout(() => (input as HTMLInputElement).focus(), 450);
            }
        }
    };

    return (
        <div
            id="floating-credit-pill"
            className="rounded-full px-3 py-1.5 fixed bottom-4 left-1/2 flex place-content-between items-center w-[95%] max-w-lg z-50 backdrop-blur-md"
            style={{
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(12, 12, 15, 0.92)",
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.85)",
                transform: isDockHidden ? "translate(-50%, 42px)" : "translate(-50%, 0)",
                opacity: isDockHidden ? 0 : 1,
                pointerEvents: isDockHidden ? "none" : "auto",
                transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
        >
            <div className="flex items-center gap-2 pl-2">
                <DiamondsFourIcon
                    weight="fill"
                    size={15}
                    color="#fbbf24"
                />
                <p className="text-[11px]" style={{ color: "#a3a3a3" }}>
                    Powered by <strong className="font-bold text-white">Studio Index</strong>
                </p>
            </div>
            <button
                type="button"
                onClick={scrollToClaimCard}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="rounded-full text-[11px] font-bold py-1.5 px-3.5 ml-[clamp(1.3px,5vw,10px)] my-0.5 flex items-center gap-1.5 justify-center cursor-pointer transition-all duration-200"
                style={{
                    color: isHovered ? "#0a0a0a" : "#fbbf24",
                    background: isHovered ? "#fbbf24" : "rgba(251, 191, 36, 0.14)",
                    border: "1px solid rgba(251, 191, 36, 0.4)",
                    boxShadow: isHovered ? "0 4px 15px rgba(251, 191, 36, 0.35)" : "none",
                }}
            >
                <span>Launch Your Store</span>
                <ArrowRightIcon
                    size={16}
                    color={isHovered ? "#0a0a0a" : "#fbbf24"}
                    weight="bold"
                    className="inline transition-colors duration-200"
                />
            </button>
        </div>
    );
}