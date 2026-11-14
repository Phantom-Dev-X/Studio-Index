import { useState } from "react";
import {
  House,
  Package,
  ClipboardText,
  Users,
  ChatsCircle,
  ChartBar,
  Megaphone,
  GearSix,
} from "@phosphor-icons/react";
import { SideNavbar } from "../components/privateComponets/dashboard/dashboardHome/SideNavbar";
import Header from "../components/privateComponets/dashboard/dashboardHome/Header";
import MainContent from "../components/privateComponets/dashboard/dashboardHome/MainContent";

function dashboardPage() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const storeStatusItems = [
    { id: "online", label: "Store Online", completed: false },
    { id: "whatsapp", label: "WhatsApp Connected", completed: true },
    { id: "products", label: "Products Listed: 0", completed: true },
    { id: "orders", label: "Orders This Week: 0", completed: true },
  ];

  const navItems = [
    { id: "Dashboard", label: "Dashboard", icon: House },
    { id: "Products", label: "Products", icon: Package, hasDropdown: true },
    { id: "Orders", label: "Orders", icon: ClipboardText, badge: 0 },
    { id: "Customers", label: "Customers", icon: Users },
    { id: "WhatsApp", label: "WhatsApp Assistant", icon: ChatsCircle },
    { id: "Analytics", label: "Analytics", icon: ChartBar },
    { id: "Promotions", label: "Promotions", icon: Megaphone },
    { id: "Settings", label: "Settings", icon: GearSix },
  ];

  return (
    <div className="min-h-screen w-full bg-[#070707] text-[#f5f1e6] flex font-sans antialiased selection:bg-[#f6b91c]/30 selection:text-[#f6b91c] relative overflow-x-hidden">
      {/* Mobile Drawer Backdrop */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
        />
      )}

      {/* ─── Sidebar ─── */}
      <SideNavbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        navItems={navItems}
      />

      {/* ─── Main Content Area ─── */}
      <div className="flex-1 flex flex-col max-w-[] min-w-0 h-screen overflow-hidden">
        {/* Top Navbar */}
        <Header
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Content Body */}
        <MainContent storeStatusItems={storeStatusItems} />
      </div>
    </div>
  );
}

export default dashboardPage;
