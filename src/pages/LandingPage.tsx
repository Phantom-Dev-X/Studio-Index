import { LandingHeader } from "../components/landing/LandingHeader";
import { LandingHero } from "../components/landing/LandingHero";
import { LandingFeatures } from "../components/landing/LandingFeatures";
import { LandingPricing } from "../components/landing/LandingPricing";
import { LandingFaqs } from "../components/landing/LandingFaqs";
import { LandingFooter } from "../components/landing/LandingFooter";

export function LandingPage() {
    return (
        <div className="w-full min-h-screen flex flex-col bg-landing-bg text-landing-fg font-poppins selection:bg-landing-gold selection:text-black">
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
