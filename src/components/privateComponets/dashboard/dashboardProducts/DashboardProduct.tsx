import {
  ChartBarIcon,
  ChatsCircleIcon,
  ClipboardTextIcon,
  GearSixIcon,
  HouseIcon,
  MegaphoneIcon,
  PackageIcon,
  UsersIcon,
} from "@phosphor-icons/react";
import { SideNavbar } from "../dashboardHome/SideNavbar";
import { useState } from "react";
import Header from "../dashboardHome/Header";
import ProductsContent from "./ProductsContent";

export default function DashboardProduct() {
  const [activeTab, setActiveTab] = useState("Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "Dashboard", label: "Dashboard", icon: HouseIcon },
    { id: "Products", label: "Products", icon: PackageIcon, hasDropdown: true },
    { id: "Orders", label: "Orders", icon: ClipboardTextIcon, badge: 0 },
    { id: "Customers", label: "Customers", icon: UsersIcon },
    { id: "WhatsApp", label: "WhatsApp Assistant", icon: ChatsCircleIcon },
    { id: "Analytics", label: "Analytics", icon: ChartBarIcon },
    { id: "Promotions", label: "Promotions", icon: MegaphoneIcon },
    { id: "Settings", label: "Settings", icon: GearSixIcon },
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
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Navbar */}
        <Header
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Products Content */}
        <ProductsContent />
      </div>
    </div>
  );
}
