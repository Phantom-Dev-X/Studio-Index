import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export function AutoScroll() {
    const { pathname, hash } = useLocation();



    // Ensure page scrolls to top on route change
    useLayoutEffect(() => {
        // If there's an anchor hash (e.g. #pricing, #features), scroll to it
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                return;
            }
        }

        const resetScroll = () => {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        };

        // 1. Immediately reset scroll
        resetScroll();

        // 3. Fallback tick in case of image rendering or layout shifts
        const timeoutId = setTimeout(resetScroll, 20);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [pathname, hash]);

    return null;
}
