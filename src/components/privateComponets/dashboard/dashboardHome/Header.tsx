import { BellIcon, ListIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useState } from "react";

interface HeaderProps {
  onOpenMobileMenu?: () => void;
  setIsMobileMenuOpen?: (open: boolean) => void;
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
}

export default function Header({
  onOpenMobileMenu,
  setIsMobileMenuOpen,
  searchQuery: externalQuery,
  setSearchQuery: externalSetQuery,
}: HeaderProps = {}) {
  const [internalQuery, setInternalQuery] = useState("");

  const query = externalQuery !== undefined ? externalQuery : internalQuery;
  const setQuery = externalSetQuery !== undefined ? externalSetQuery : setInternalQuery;

  const handleOpenMobileMenu = () => {
    if (setIsMobileMenuOpen) {
      setIsMobileMenuOpen(true);
    } else if (onOpenMobileMenu) {
      onOpenMobileMenu();
    } else {
      window.dispatchEvent(new CustomEvent("toggle-dashboard-mobile-menu"));
    }
  };

  return (
    <header className="h-[68px] lg:h-[76px] xl:h-[84px] shrink-0 bg-[#080706] border-b border-[#1a1712] px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between gap-3 sm:gap-5 sticky top-0 z-30">
      {/* Mobile Hamburger */}
      <button
        type="button"
        onClick={handleOpenMobileMenu}
        className="lg:hidden w-10 h-10 rounded-xl bg-[#110f0c] border border-[#231e15] hover:border-[#f6b91c]/50 text-[#b0aaa0] hover:text-[#f6b91c] flex items-center justify-center transition-all duration-200 cursor-pointer shrink-0"
        title="Open navigation menu"
      >
        <ListIcon size={22} weight="bold" />
      </button>

      {/* Search Bar */}
      <div className="flex-1 max-w-[560px] lg:max-w-[640px] xl:max-w-[720px] relative">
        <div className="flex items-center gap-3 bg-[#110f0c] border border-[#231e15] focus-within:border-[#f6b91c]/60 focus-within:ring-2 focus-within:ring-[#f6b91c]/15 rounded-full px-4 py-2.5 lg:py-3 transition-all duration-200">
          <MagnifyingGlassIcon
            size={20}
            className="text-[#6a6456] shrink-0"
            weight="bold"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search anything..."
            className="w-full bg-transparent text-[#f5f1e6] placeholder:text-[#5a5649] text-xs sm:text-sm lg:text-base outline-none border-none"
          />
        </div>
      </div>

      {/* Right: Bell + Avatar */}
      <div className="flex items-center gap-3 sm:gap-4 shrink-0">
        <button
          type="button"
          title="Notifications"
          className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-[#110f0c] border border-[#231e15] hover:border-[#f6b91c]/50 text-[#d4cfc5] hover:text-[#f6b91c] flex items-center justify-center transition-all duration-200 relative cursor-pointer"
        >
          <BellIcon size={22} weight="regular" />
          <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#e74c3c] text-white text-[10px] font-bold flex items-center justify-center">
            3
          </span>
        </button>

        <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-[#5d46e2] text-white font-bold text-base lg:text-lg flex items-center justify-center select-none shadow-md">
          T
        </div>
      </div>
    </header>
  );
}
