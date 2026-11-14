import type { Icon } from "@phosphor-icons/react";
import {
  CaretDownIcon,
  CaretRightIcon,
  CopyIcon,
  CrownIcon,
  XIcon,
  HouseIcon,
  PackageIcon,
  ClipboardTextIcon,
  UsersIcon,
  ChatsCircleIcon,
  ChartBarIcon,
  MegaphoneIcon,
  GearSixIcon,
} from "@phosphor-icons/react";
import logo from "../../../../../public/StudioIndex.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export interface NavItem {
  id: string;
  label: string;
  icon: Icon;
  to?: string;
  hasDropdown?: boolean;
  badge?: number;
}

const defaultNavItems: NavItem[] = [
  { id: "Dashboard", label: "Dashboard", icon: HouseIcon, to: "/dashboard" },
  {
    id: "Products",
    label: "Products",
    icon: PackageIcon,
    to: "/dashboard/products",
    hasDropdown: true,
  },
  {
    id: "Orders",
    label: "Orders",
    icon: ClipboardTextIcon,
    to: "/dashboard/orders",
    badge: 0,
  },
  { id: "Customers", label: "Customers", icon: UsersIcon, to: "/dashboard/customers" },
  {
    id: "WhatsApp",
    label: "WhatsApp Assistant",
    icon: ChatsCircleIcon,
    to: "/dashboard/whatsapp",
  },
  { id: "Analytics", label: "Analytics", icon: ChartBarIcon, to: "/dashboard/analytics" },
  {
    id: "Promotions",
    label: "Promotions",
    icon: MegaphoneIcon,
    to: "/dashboard/promotions",
  },
  { id: "Settings", label: "Settings", icon: GearSixIcon, to: "/dashboard/settings" },
];

export interface SideNavbarProps {
  isMobileMenuOpen?: boolean;
  setIsMobileMenuOpen?: (open: boolean) => void;
  navItems?: NavItem[];
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
}

export function SideNavbar({
  isMobileMenuOpen: externalIsOpen,
  setIsMobileMenuOpen: externalSetIsOpen,
  navItems: externalNavItems,
}: SideNavbarProps = {}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  const isMobileMenuOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsMobileMenuOpen = externalSetIsOpen !== undefined ? externalSetIsOpen : setInternalIsOpen;

  useEffect(() => {
    const handleToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    window.addEventListener("toggle-dashboard-mobile-menu", handleToggle);
    return () => window.removeEventListener("toggle-dashboard-mobile-menu", handleToggle);
  }, [isMobileMenuOpen, setIsMobileMenuOpen]);

  const items = externalNavItems || defaultNavItems;

  return (
    <>
      {/* Mobile Drawer Backdrop */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-50 w-[240px] lg:w-[260px] xl:w-[280px] border-r border-[#1a1712] p-4 lg:p-5 xl:p-6 flex flex-col bg-[#080706] transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        }`}
      >
        {/* Logo & Mobile Close */}
        <div className="flex items-center justify-between gap-2 mb-6">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 shrink-0 flex items-center justify-center">
              <img
                src={logo}
                alt="Studio Index logo"
                className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(246,185,28,0.3)]"
              />
            </span>
            <span className="whitespace-nowrap text-base lg:text-lg xl:text-xl font-bold tracking-tight leading-none text-white">
              Studio <b className="text-[#f6b91c] font-bold">Index</b>
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="lg:hidden text-[#a89f88] hover:text-[#f6b91c] p-1.5 rounded-lg hover:bg-[#16140e] transition-colors cursor-pointer shrink-0"
            title="Close menu"
          >
            <XIcon size={20} weight="bold" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1.5 w-full overflow-y-auto">
          {items.map((item) => {
            const IconComponent = item.icon;
            const targetPath = item.to || (item.label === "Dashboard" ? "/dashboard" : `/dashboard/${item.label.toLowerCase()}`);

            return (
              <NavLink
                key={item.id}
                to={targetPath}
                end={targetPath === "/dashboard"}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `dash-nav-link flex items-center gap-3 px-3.5 py-2.5 lg:py-3 rounded-xl text-xs sm:text-sm lg:text-base w-full text-left transition-all duration-200 cursor-pointer no-underline ${
                    isActive ? "active" : ""
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <em className="nav-icon not-italic w-5 flex items-center justify-center shrink-0">
                      <IconComponent
                        size={22}
                        weight={isActive ? "bold" : "regular"}
                      />
                    </em>
                    <span className="flex-1 truncate">{item.label}</span>
                    {item.hasDropdown && (
                      <CaretDownIcon
                        size={14}
                        className="dropdown-icon"
                      />
                    )}
                    {item.badge !== undefined && (
                      <span className="nav-badge rounded-full text-xs font-bold px-2 py-0.5">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Grow Your Store Card */}
        <div className="mt-auto border border-[#231e15] rounded-2xl p-4 lg:p-5 text-center bg-[#110f0c] shadow-lg">
          <div className="inline-flex items-center justify-center w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#f6b91c]/10 text-[#f6b91c] mb-2">
            <CrownIcon size={26} weight="fill" />
          </div>
          <h4 className="text-sm lg:text-base xl:text-lg font-bold text-white">
            Grow Your Store
          </h4>
          <p className="text-xs lg:text-sm text-[#88837a] mt-1 mb-3.5 leading-snug">
            Share your store link and
            <br />
            get more customers!
          </p>
          <button
            type="button"
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#ffd35c] to-[#f6b91c] hover:from-[#ffe082] hover:to-[#f7c033] text-[#161100] font-bold rounded-full py-2.5 px-3 text-xs lg:text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(246,185,28,0.3)] active:scale-95 cursor-pointer"
          >
            <CopyIcon size={16} weight="bold" />
            <span>Copy Store Link</span>
          </button>
        </div>

        {/* Seller Profile Pill */}
        <div className="flex items-center gap-3 border border-[#231e15] rounded-2xl p-3 mt-3 bg-[#110f0c]">
          <div className="w-10 h-10 rounded-full bg-[#5d46e2] text-white font-bold text-base grid place-items-center shrink-0 shadow-md">
            T
          </div>
          <div className="min-w-0 flex-1">
            <b className="flex items-center gap-1.5 text-xs lg:text-sm xl:text-base font-semibold truncate text-white">
              <span>Tomi Store</span>
              <CrownIcon
                size={14}
                weight="fill"
                className="text-[#f6b91c] shrink-0"
              />
            </b>
            <small className="block text-[#88837a] text-xs truncate">
              Premium Plan
            </small>
          </div>
          <span className="text-[#88837a] shrink-0">
            <CaretRightIcon size={15} />
          </span>
        </div>
      </div>
    </>
  );
}
