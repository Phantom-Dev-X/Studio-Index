import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AutoScroll } from "./utils/autoSxroll";
import { LandingPage } from "./pages/LandingPage";

const Storefront = lazy(() => import("./pages/Storefront"));
const FeaturesPage = lazy(() =>
  import("./components/landing/features/FeaturesPage").then((m) => ({ default: m.FeaturesPage }))
);
const PricingPage = lazy(() =>
  import("./components/landing/pricing/PricingPage").then((m) => ({
    default: m.PricingPage,
  }))
);
const AboutPage = lazy(() =>
  import("./components/landing/about/aboutPage").then((m) => ({
    default: m.AboutPage,
  }))
);
const ContactPage = lazy(() =>
  import("./components/landing/contact/ContactPage").then((m) => ({
    default: m.ContactPage,
  }))
);
const LoginPage = lazy(() => import("./pages/LoginPage"));

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AutoScroll />
      <Suspense fallback={<div className="min-h-svh w-full bg-[#050505]" />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/:username" element={<Storefront />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}