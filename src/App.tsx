import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AutoScroll } from "./utils/autoSxroll";
import Storefront from "./pages/Storefront";
import { LandingPage } from "./pages/LandingPage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { PricingPage } from "./components/landing/pricing/PricingPage";
import { AboutPage } from "./components/landing/about/aboutPage";
import { ContactPage } from "./components/landing/contact/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <AutoScroll />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/:username" element={<Storefront />} />

        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
