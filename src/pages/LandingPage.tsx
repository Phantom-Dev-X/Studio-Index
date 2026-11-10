import { LandingHeader } from "../components/landing/home/LandingHeader";
import { LandingHero } from "../components/landing/home/LandingHero";
import { LandingFeatures } from "../components/landing/home/LandingFeatures";
import { LandingPricing } from "../components/landing/home/LandingPricing";
import { LandingFaqs } from "../components/landing/home/LandingFaqs";
import { LandingFooter } from "../components/landing/home/LandingFooter";

export function LandingPage() {
    return (
        <div className="w-full min-h-svh flex flex-col overflow-x-clip bg-landing-bg text-landing-fg font-poppins selection:bg-landing-gold selection:text-black">
            <LandingHeader />
            <main id="top" className="w-full flex flex-col items-center">
                <LandingHero />
                <LandingFeatures />
                <LandingPricing />
                <LandingFaqs />
            </main>
            <LandingFooter />
        </div>
    );
}
