import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AutoScroll } from "./utils/autoSxroll";
import { LandingPage } from "./pages/LandingPage";

const Storefront = lazy(() => import("./pages/Storefront"));
const FeaturesPage = lazy(() =>
  import("./components/privateComponets/landing/features/FeaturesPage").then(
    (m) => ({
      default: m.FeaturesPage,
    }),
  ),
);
const PricingPage = lazy(() =>
  import("./components/privateComponets/landing/pricing/PricingPage").then(
    (m) => ({
      default: m.PricingPage,
    }),
  ),
);
const AboutPage = lazy(() =>
  import("./components/privateComponets/landing/about/aboutPage").then((m) => ({
    default: m.AboutPage,
  })),
);
const ContactPage = lazy(() =>
  import("./components/privateComponets/landing/contact/ContactPage").then(
    (m) => ({
      default: m.ContactPage,
    }),
  ),
);
const LoginPage = lazy(() => import("./pages/LoginPage"));
const DashboardPage = lazy(() => import("./pages/dashboardPage"));
const DashboardProducts = lazy(
  () =>
    import("./components/privateComponets/dashboard/dashboardProducts/DashboardProduct"),
);
const DashboardOrders = lazy(
  () =>
    import("./components/privateComponets/dashboard/dasboardOrders/DashboardOrders"),
);

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
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/products" element={<DashboardProducts />} />
          <Route path="/dashboard/orders" element={<DashboardOrders />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
