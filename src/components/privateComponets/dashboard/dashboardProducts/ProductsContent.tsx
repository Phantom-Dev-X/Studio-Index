import { useState } from "react";
import {
  PackageIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  CaretDownIcon,
  SquaresFourIcon,
  ListIcon,
  EyeIcon,
  BagIcon,
  ChartLineUpIcon,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { StatCard } from "../shared/StatCard";
import type { StatCardData } from "../shared/StatCard";
import { ProductCard } from "./ProductCard";
import type { ProductData } from "./ProductCard";
import earbud from "../../../../assets/products/Glossy Earbuds with Golden Orbit.png";
import nikeshoe from "../../../../assets/products/nikeshoes.png";
import ps5 from "../../../../assets/products/ps5.png";
import smartwatch from "../../../../assets/products/smartwatch.png";
import bag from "../../../../assets/products/bagpack.png";
import headset from "../../../../assets/products/headset.png";
import iphone from "../../../../assets/products/iphone15.png";
import hoddie from "../../../../assets/products/hoodie.jpg";

/* ── Dummy products ── */
const DUMMY_PRODUCTS: ProductData[] = [
  {
    id: 1,
    name: "Wireless Earbuds Pro",
    price: 45_000,
    oldPrice: 60_000,
    discount: 25,
    status: "Published",
    image: earbud,
  },
  {
    id: 2,
    name: "Air Max Sneakers",
    price: 80_000,
    oldPrice: 100_000,
    discount: 20,
    status: "Published",
    image: nikeshoe,
  },
  {
    id: 3,
    name: "Smart Watch Series 9",
    price: 75_000,
    oldPrice: 90_000,
    discount: 17,
    status: "Published",
    image: smartwatch,
  },
  {
    id: 4,
    name: "Travel Backpack",
    price: 35_000,
    oldPrice: 45_000,
    discount: 22,
    status: "Published",
    image: bag,
  },
  {
    id: 5,
    name: "PS5 DualSense Controller",
    price: 60_000,
    oldPrice: 70_000,
    discount: 14,
    status: "Published",
    image: ps5,
  },
  {
    id: 6,
    name: "Noise Cancelling Headphones",
    price: 90_000,
    status: "Draft",
    image: headset,
  },
  {
    id: 7,
    name: "iPhone 15 Pro",
    price: 650_000,
    oldPrice: 700_000,
    discount: 7,
    status: "Published",
    image: iphone,
  },
  {
    id: 8,
    name: "Premium Hoodie",
    price: 40_000,
    oldPrice: 50_000,
    discount: 20,
    status: "Published",
    image: hoddie,
  },
];

/* ── Stat card configs for the Products page ── */
const productStats: StatCardData[] = [
  {
    label: "Total Products",
    value: "12",
    change: "+20%",
    color: "#2494FF",
    icon: PackageIcon as Icon,
    sparkData: [2, 4, 3, 7, 5, 10, 12],
    gradientId: "sparkTotalProducts",
  },
  {
    label: "Total Views",
    value: "24.8K",
    change: "+12%",
    color: "#8B5CF6",
    icon: EyeIcon as Icon,
    sparkData: [3, 6, 4, 9, 7, 14, 18],
    gradientId: "sparkTotalViews",
  },
  {
    label: "Total Sales",
    value: "₦486.7K",
    change: "+18%",
    color: "#f6b91c",
    icon: BagIcon as Icon,
    sparkData: [5, 8, 6, 12, 10, 18, 22],
    gradientId: "sparkTotalSalesP",
  },
  {
    label: "Conversion Rate",
    value: "3.2%",
    change: "+0.4%",
    color: "#FF941C",
    icon: ChartLineUpIcon as Icon,
    sparkData: [1, 2, 1.5, 3, 2.5, 3.2, 3.4],
    gradientId: "sparkConversion",
  },
];

/* ── Filter dropdown button ── */
function FilterDropdown({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#110f0c] border border-[#231e15] hover:border-[#f6b91c]/40 text-[#d4cfc5] text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap"
    >
      <span>{label}</span>
      <CaretDownIcon size={14} className="text-[#88837a]" />
    </button>
  );
}

export default function ProductsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = DUMMY_PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8 xl:p-10 relative z-10">
      <div className="w-full max-w-[1700px] mx-auto space-y-5 sm:space-y-6 lg:space-y-7">
        {/* ─── Page Header ─── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#f6b91c]/15 border border-[#f6b91c]/25 flex items-center justify-center text-[#f6b91c] shrink-0">
              <PackageIcon className="w-6 h-6 sm:w-7 sm:h-7" weight="fill" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Products
              </h1>
              <p className="text-sm sm:text-base text-[#88837a] mt-0.5">
                Manage your products, add new ones and keep your store fresh.
              </p>
            </div>
          </div>
          <button
            type="button"
            className="self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-[#ffd35c] to-[#f6b91c] hover:from-[#ffe082] hover:to-[#f7c033] text-[#161100] font-bold text-sm sm:text-base shadow-[0_4px_16px_rgba(246,185,28,0.25)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            <PlusIcon size={18} weight="bold" />
            <span>Add Product</span>
          </button>
        </div>

        {/* ─── 4 Stat Cards ─── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {productStats.map((stat) => (
            <StatCard key={stat.gradientId} {...stat} />
          ))}
        </div>

        {/* ─── Search + Filters Bar ─── */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          {/* Search */}
          <div className="flex-1 max-w-[560px] relative">
            <div className="flex items-center gap-3 bg-[#110f0c] border border-[#231e15] focus-within:border-[#f6b91c]/50 focus-within:ring-2 focus-within:ring-[#f6b91c]/10 rounded-xl px-4 py-2.5 transition-all duration-200">
              <MagnifyingGlassIcon
                size={18}
                className="text-[#6a6456] shrink-0"
                weight="bold"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-transparent text-[#f5f1e6] placeholder:text-[#5a5649] text-sm outline-none border-none"
              />
            </div>
          </div>

          {/* Filters + View Toggle */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <FilterDropdown label="All Products" />
            <FilterDropdown label="All Categories" />
            <FilterDropdown label="Sort: Newest" />

            {/* View toggle */}
            <div className="flex items-center bg-[#110f0c] border border-[#231e15] rounded-xl overflow-hidden ml-auto sm:ml-0">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`w-10 h-10 flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-[#f6b91c]/20 text-[#f6b91c]"
                    : "text-[#6a6456] hover:text-[#d4cfc5]"
                }`}
              >
                <SquaresFourIcon size={18} weight="fill" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`w-10 h-10 flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  viewMode === "list"
                    ? "bg-[#f6b91c]/20 text-[#f6b91c]"
                    : "text-[#6a6456] hover:text-[#d4cfc5]"
                }`}
              >
                <ListIcon size={18} weight="bold" />
              </button>
            </div>
          </div>
        </div>

        {/* ─── Products Grid ─── */}
        <div className="grid grid-cols-1 fmq:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* ─── Bottom info ─── */}
        <div className="flex items-center justify-between pt-2">
          <p className="text-xs sm:text-sm text-[#6a6456]">
            Showing 1–{filteredProducts.length} of {DUMMY_PRODUCTS.length}{" "}
            products
          </p>
        </div>
      </div>
    </main>
  );
}
