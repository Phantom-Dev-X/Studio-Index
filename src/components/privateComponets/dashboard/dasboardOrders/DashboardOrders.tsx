import { useState, useMemo } from "react";
import Header from "../dashboardHome/Header";
import { SideNavbar } from "../dashboardHome/SideNavbar";
import {
  Package,
  Clock,
  CheckCircle,
  ArrowUp,
  ArrowsClockwise,
  CaretDown,
  CaretRight,
  CalendarBlank,
  Export,
  MagnifyingGlass,
  WhatsappLogo,
  MapPin,
  EnvelopeSimple,
  DotsThree,
  X,
  Phone,
  Check,
} from "@phosphor-icons/react";

import earbud from "../../../../assets/products/Glossy Earbuds with Golden Orbit.png";
import nikeshoe from "../../../../assets/products/nikeshoes.png";
import ps5 from "../../../../assets/products/ps5.png";
import smartwatch from "../../../../assets/products/smartwatch.png";
import bag from "../../../../assets/products/bagpack.png";

/* ─── Interfaces ─── */
type OrderStatus = "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
type PaymentStatus = "Paid" | "Pending" | "Refunded";

interface TimelineStep {
  title: string;
  time?: string;
  completed: boolean;
  current?: boolean;
}

interface OrderItem {
  id: string;
  orderNumber: string;
  customer: {
    name: string;
    initials: string;
    avatarColor: string;
    email: string;
    phone: string;
  };
  product: {
    name: string;
    quantity: number;
    unitPrice: number;
    image: string;
    itemSummary: string;
  };
  date: string;
  total: number;
  deliveryFee: number;
  paymentStatus: PaymentStatus;
  paymentMethod: string;
  orderStatus: OrderStatus;
  deliveryAddress: string;
  timeline: TimelineStep[];
}

/* ─── Initial Data Matching User's Design Exactly ─── */
const INITIAL_ORDERS: OrderItem[] = [
  {
    id: "1",
    orderNumber: "#SI-2084",
    customer: {
      name: "Amara Okafor",
      initials: "AO",
      avatarColor: "bg-[#8b5cf6]",
      email: "amara.okafor@email.com",
      phone: "+234 803 456 7890",
    },
    product: {
      name: "Wireless Earbuds Pro",
      quantity: 2,
      unitPrice: 45000,
      image: earbud,
      itemSummary: "Wireless Earbuds Pro · 2 items",
    },
    date: "14 Nov, 2026",
    total: 90000,
    deliveryFee: 3500,
    paymentStatus: "Paid",
    paymentMethod: "Paid · Card",
    orderStatus: "Processing",
    deliveryAddress: "12 Admiralty Way, Lekki Phase 1, Lagos",
    timeline: [
      {
        title: "Order placed",
        time: "14 Nov, 2026 • 09:24 AM",
        completed: true,
      },
      {
        title: "Payment confirmed",
        time: "14 Nov, 2026 • 09:25 AM",
        completed: true,
      },
      {
        title: "Processing",
        time: "14 Nov, 2026 • 10:00 AM",
        completed: true,
        current: true,
      },
      {
        title: "Shipped",
        completed: false,
      },
    ],
  },
  {
    id: "2",
    orderNumber: "#SI-2083",
    customer: {
      name: "Daniel Mensah",
      initials: "DM",
      avatarColor: "bg-[#2563eb]",
      email: "daniel.mensah@email.com",
      phone: "+234 812 345 6789",
    },
    product: {
      name: "Air Max Sneakers",
      quantity: 1,
      unitPrice: 80000,
      image: nikeshoe,
      itemSummary: "Air Max Sneakers · 1 item",
    },
    date: "14 Nov, 2026",
    total: 80000,
    deliveryFee: 4000,
    paymentStatus: "Paid",
    paymentMethod: "Paid · Transfer",
    orderStatus: "Pending",
    deliveryAddress: "45 Victoria Island Boulevard, Lagos",
    timeline: [
      {
        title: "Order placed",
        time: "14 Nov, 2026 • 08:15 AM",
        completed: true,
      },
      {
        title: "Payment confirmed",
        time: "14 Nov, 2026 • 08:20 AM",
        completed: true,
      },
      {
        title: "Pending",
        time: "Awaiting fulfillment",
        completed: true,
        current: true,
      },
      {
        title: "Shipped",
        completed: false,
      },
    ],
  },
  {
    id: "3",
    orderNumber: "#SI-2082",
    customer: {
      name: "Zainab Bello",
      initials: "ZB",
      avatarColor: "bg-[#10b981]",
      email: "zainab.bello@email.com",
      phone: "+234 809 112 2334",
    },
    product: {
      name: "Smart Watch Series 9",
      quantity: 1,
      unitPrice: 75000,
      image: smartwatch,
      itemSummary: "Smart Watch Series 9 · 1 item",
    },
    date: "13 Nov, 2026",
    total: 75000,
    deliveryFee: 3000,
    paymentStatus: "Pending",
    paymentMethod: "Pending · COD",
    orderStatus: "Pending",
    deliveryAddress: "Block 8, Abuja Central Business District",
    timeline: [
      {
        title: "Order placed",
        time: "13 Nov, 2026 • 04:50 PM",
        completed: true,
      },
      {
        title: "Payment pending",
        time: "Cash on delivery",
        completed: true,
        current: true,
      },
      {
        title: "Processing",
        completed: false,
      },
      {
        title: "Shipped",
        completed: false,
      },
    ],
  },
  {
    id: "4",
    orderNumber: "#SI-2081",
    customer: {
      name: "Chidi Eze",
      initials: "CE",
      avatarColor: "bg-[#9333ea]",
      email: "chidi.eze@email.com",
      phone: "+234 705 998 8776",
    },
    product: {
      name: "Travel Backpack",
      quantity: 1,
      unitPrice: 35000,
      image: bag,
      itemSummary: "Travel Backpack · 1 item",
    },
    date: "13 Nov, 2026",
    total: 35000,
    deliveryFee: 2500,
    paymentStatus: "Paid",
    paymentMethod: "Paid · Card",
    orderStatus: "Shipped",
    deliveryAddress: "18 Trans-Amadi Road, Port Harcourt",
    timeline: [
      {
        title: "Order placed",
        time: "13 Nov, 2026 • 11:10 AM",
        completed: true,
      },
      {
        title: "Payment confirmed",
        time: "13 Nov, 2026 • 11:12 AM",
        completed: true,
      },
      {
        title: "Processing",
        time: "13 Nov, 2026 • 01:00 PM",
        completed: true,
      },
      {
        title: "Shipped",
        time: "In transit with GIG Logistics",
        completed: true,
        current: true,
      },
    ],
  },
  {
    id: "5",
    orderNumber: "#SI-2080",
    customer: {
      name: "Mariam Yusuf",
      initials: "MY",
      avatarColor: "bg-[#0d9488]",
      email: "mariam.yusuf@email.com",
      phone: "+234 818 765 4321",
    },
    product: {
      name: "PS5 DualSense Controller",
      quantity: 1,
      unitPrice: 60000,
      image: ps5,
      itemSummary: "PS5 DualSense Controller · 1 item",
    },
    date: "12 Nov, 2026",
    total: 60000,
    deliveryFee: 3500,
    paymentStatus: "Paid",
    paymentMethod: "Paid · Card",
    orderStatus: "Delivered",
    deliveryAddress: "9 Ring Road, Ibadan, Oyo State",
    timeline: [
      {
        title: "Order placed",
        time: "12 Nov, 2026 • 10:00 AM",
        completed: true,
      },
      {
        title: "Payment confirmed",
        time: "12 Nov, 2026 • 10:02 AM",
        completed: true,
      },
      {
        title: "Shipped",
        time: "12 Nov, 2026 • 03:00 PM",
        completed: true,
      },
      {
        title: "Delivered",
        time: "13 Nov, 2026 • 02:40 PM",
        completed: true,
        current: true,
      },
    ],
  },
];

/* ─── Glowing Sparkline Wave SVG Component ─── */
function StatSparkline({ color, pathD }: { color: string; pathD: string }) {
  const gradientId = `grad-${color.replace("#", "")}`;
  return (
    <svg
      viewBox="0 0 160 55"
      className="w-full h-full"
      fill="none"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.45" />
          <stop offset="100%" stopColor={color} stopOpacity="0.0" />
        </linearGradient>
      </defs>
      <path d={`${pathD} L 160 55 L 0 55 Z`} fill={`url(#${gradientId})`} />
      <path
        d={pathD}
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DashboardOrders() {
  const [orders, setOrders] = useState<OrderItem[]>(INITIAL_ORDERS);
  const [selectedOrderId, setSelectedOrderId] = useState<string>("1");
  const [activeTab, setActiveTab] = useState<string>("All Orders");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [paymentFilter, setPaymentFilter] = useState<string>("All");
  const [dateFilter, setDateFilter] = useState<string>("Last 30 days");
  const [isPaymentDropdownOpen, setIsPaymentDropdownOpen] = useState(false);
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);

  // Selected Order for Details panel
  const selectedOrder = useMemo(
    () => orders.find((o) => o.id === selectedOrderId) || orders[0],
    [orders, selectedOrderId],
  );

  // Filtered orders list
  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      // Tab filter
      if (activeTab === "Pending" && order.orderStatus !== "Pending") return false;
      if (activeTab === "Processing" && order.orderStatus !== "Processing") return false;
      if (activeTab === "Shipped" && order.orderStatus !== "Shipped") return false;
      if (activeTab === "Delivered" && order.orderStatus !== "Delivered") return false;
      if (activeTab === "Cancelled" && order.orderStatus !== "Cancelled") return false;

      // Payment filter
      if (paymentFilter !== "All" && order.paymentStatus !== paymentFilter) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesId = order.orderNumber.toLowerCase().includes(query);
        const matchesCustomer = order.customer.name.toLowerCase().includes(query);
        const matchesProduct = order.product.name.toLowerCase().includes(query);
        if (!matchesId && !matchesCustomer && !matchesProduct) return false;
      }

      return true;
    });
  }, [orders, activeTab, paymentFilter, searchQuery]);

  // Mark currently selected order as shipped
  const handleMarkAsShipped = () => {
    if (!selectedOrder) return;
    setOrders((prev) =>
      prev.map((ord) => {
        if (ord.id === selectedOrder.id) {
          const updatedTimeline = ord.timeline.map((item) =>
            item.title === "Shipped"
              ? { ...item, completed: true, current: true, time: "Just now" }
              : item.title === "Processing"
              ? { ...item, current: false }
              : item,
          );
          return {
            ...ord,
            orderStatus: "Shipped" as OrderStatus,
            timeline: updatedTimeline,
          };
        }
        return ord;
      }),
    );
  };

  return (
    <div className="min-h-screen w-full bg-[#070707] text-[#f5f1e6] flex font-sans antialiased selection:bg-[#f6b91c]/30 selection:text-[#f6b91c] relative overflow-x-hidden">
      {/* ─── Sidebar (Self-contained, no props required) ─── */}
      <SideNavbar />

      {/* ─── Main Content Column ─── */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Navbar Header (Self-contained, no props required) */}
        <Header />

        {/* ─── Scrollable Page Content ─── */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 xl:p-9 relative z-10">
          <div className="w-full max-w-[1720px] mx-auto space-y-6 sm:space-y-7">
            {/* ─── Page Title & Action Bar ─── */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3.5 sm:gap-4">
                {/* Gold Cube/Package Icon container */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#f6b91c]/15 border border-[#f6b91c]/25 flex items-center justify-center text-[#f6b91c] shrink-0 shadow-[0_0_20px_rgba(246,185,28,0.12)]">
                  <Package size={30} weight="fill" className="text-[#f6b91c]" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-none">
                    Orders
                  </h1>
                  <p className="text-xs sm:text-sm text-[#88837a] mt-1.5 font-normal">
                    Track, manage and fulfil your customer orders.
                  </p>
                </div>
              </div>

              {/* Right Side Buttons: Date Filter + Export Orders */}
              <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                <button
                  type="button"
                  onClick={() => setIsDateDropdownOpen(!isDateDropdownOpen)}
                  className="relative inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#110f0c] border border-[#231e15] hover:border-[#f6b91c]/40 text-[#d4cfc5] text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer"
                >
                  <CalendarBlank size={16} className="text-[#88837a]" />
                  <span>{dateFilter}</span>
                  <CaretDown size={14} className="text-[#88837a]" />
                  {isDateDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-40 bg-[#14120e] border border-[#231e15] rounded-xl shadow-2xl py-1.5 z-50 text-left">
                      {["Today", "Last 7 days", "Last 30 days", "All Time"].map((opt) => (
                        <div
                          key={opt}
                          onClick={(e) => {
                            e.stopPropagation();
                            setDateFilter(opt);
                            setIsDateDropdownOpen(false);
                          }}
                          className={`px-3 py-2 text-xs cursor-pointer hover:bg-[#1f1b13] hover:text-[#f6b91c] ${
                            dateFilter === opt ? "text-[#f6b91c] font-semibold" : "text-[#b0aaa0]"
                          }`}
                        >
                          {opt}
                        </div>
                      ))}
                    </div>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => alert("Orders exported successfully as CSV!")}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#ffd35c] to-[#f6b91c] hover:from-[#ffe082] hover:to-[#f7c033] text-[#161100] font-bold text-xs sm:text-sm shadow-[0_4px_16px_rgba(246,185,28,0.25)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap"
                >
                  <Export size={16} weight="bold" />
                  <span>Export Orders</span>
                </button>
              </div>
            </div>

            {/* ─── Top 4 Stat Cards Row ─── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {/* 1. Total Orders */}
              <div className="relative overflow-hidden rounded-2xl bg-[#110f0c] border border-[#231e15] p-5 flex flex-col justify-between min-h-[145px] hover:border-[#f6b91c]/50 transition-all duration-300 group">
                <div className="relative z-10 flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#f6b91c]/15 border border-[#f6b91c]/30 flex items-center justify-center shrink-0 shadow-[0_0_14px_rgba(246,185,28,0.2)]">
                    <Package size={22} weight="fill" className="text-[#f6b91c]" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[#88837a] block">
                      Total Orders
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-0.5">
                      128
                    </h3>
                    <div className="flex items-center gap-1 text-xs font-semibold text-[#22c55e] mt-1">
                      <ArrowUp size={12} weight="bold" />
                      <span>+12.8%</span>
                    </div>
                  </div>
                </div>
                {/* Glowing Sparkline Curve */}
                <div className="absolute right-0 bottom-0 w-[55%] h-[55px] pointer-events-none overflow-hidden">
                  <StatSparkline
                    color="#f6b91c"
                    pathD="M 0 45 C 30 40, 50 25, 75 32 C 100 38, 125 15, 160 22"
                  />
                </div>
              </div>

              {/* 2. Pending */}
              <div className="relative overflow-hidden rounded-2xl bg-[#110f0c] border border-[#231e15] p-5 flex flex-col justify-between min-h-[145px] hover:border-[#ff941c]/50 transition-all duration-300 group">
                <div className="relative z-10 flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#ff941c]/15 border border-[#ff941c]/30 flex items-center justify-center shrink-0 shadow-[0_0_14px_rgba(255,148,28,0.2)]">
                    <Clock size={22} weight="fill" className="text-[#ff941c]" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[#88837a] block">
                      Pending
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-0.5">
                      18
                    </h3>
                    <div className="flex items-center gap-1 text-xs font-semibold text-[#ff941c] mt-1">
                      <span>Needs attention</span>
                    </div>
                  </div>
                </div>
                <div className="absolute right-0 bottom-0 w-[55%] h-[55px] pointer-events-none overflow-hidden">
                  <StatSparkline
                    color="#ff941c"
                    pathD="M 0 50 C 35 48, 60 30, 95 38 C 120 44, 135 25, 160 30"
                  />
                </div>
              </div>

              {/* 3. Processing */}
              <div className="relative overflow-hidden rounded-2xl bg-[#110f0c] border border-[#231e15] p-5 flex flex-col justify-between min-h-[145px] hover:border-[#2494ff]/50 transition-all duration-300 group">
                <div className="relative z-10 flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#2494ff]/15 border border-[#2494ff]/30 flex items-center justify-center shrink-0 shadow-[0_0_14px_rgba(36,148,255,0.2)]">
                    <Package size={22} weight="duotone" className="text-[#2494ff]" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[#88837a] block">
                      Processing
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-0.5">
                      24
                    </h3>
                    <div className="flex items-center gap-1 text-xs font-semibold text-[#2494ff] mt-1">
                      <span>In progress</span>
                    </div>
                  </div>
                </div>
                <div className="absolute right-0 bottom-0 w-[55%] h-[55px] pointer-events-none overflow-hidden">
                  <StatSparkline
                    color="#2494ff"
                    pathD="M 0 46 C 30 46, 65 20, 100 28 C 125 35, 140 18, 160 25"
                  />
                </div>
              </div>

              {/* 4. Completed */}
              <div className="relative overflow-hidden rounded-2xl bg-[#110f0c] border border-[#231e15] p-5 flex flex-col justify-between min-h-[145px] hover:border-[#22c55e]/50 transition-all duration-300 group">
                <div className="relative z-10 flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#22c55e]/15 border border-[#22c55e]/30 flex items-center justify-center shrink-0 shadow-[0_0_14px_rgba(34,197,94,0.2)]">
                    <CheckCircle size={22} weight="fill" className="text-[#22c55e]" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[#88837a] block">
                      Completed
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-0.5">
                      76
                    </h3>
                    <div className="flex items-center gap-1 text-xs font-semibold text-[#22c55e] mt-1">
                      <ArrowUp size={12} weight="bold" />
                      <span>+8.4%</span>
                    </div>
                  </div>
                </div>
                <div className="absolute right-0 bottom-0 w-[55%] h-[55px] pointer-events-none overflow-hidden">
                  <StatSparkline
                    color="#22c55e"
                    pathD="M 0 52 C 30 45, 60 35, 90 28 C 120 20, 140 30, 160 18"
                  />
                </div>
              </div>
            </div>

            {/* ─── Status Filter Tabs (Pills) ─── */}
            <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-1 scrollbar-none">
              {[
                { label: "All Orders", count: 128 },
                { label: "Pending", count: 18 },
                { label: "Processing", count: 24 },
                { label: "Shipped", count: 10 },
                { label: "Delivered", count: 66 },
                { label: "Cancelled", count: 10 },
              ].map((tab) => {
                const isActive = activeTab === tab.label;
                return (
                  <button
                    key={tab.label}
                    type="button"
                    onClick={() => setActiveTab(tab.label)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? "bg-gradient-to-r from-[#ffd35c] to-[#f6b91c] text-[#111111] shadow-[0_0_20px_rgba(246,185,28,0.22)]"
                        : "bg-[#110f0c] border border-[#231e15] text-[#88837a] hover:text-white hover:border-[#383124]"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                        isActive
                          ? "bg-black/20 text-[#111111]"
                          : "bg-[#1a1712] text-[#88837a]"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* ─── Search Bar & Dropdown Filters Bar ─── */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              {/* Search input */}
              <div className="flex-1 relative">
                <div className="flex items-center gap-3 bg-[#110f0c] border border-[#231e15] focus-within:border-[#f6b91c]/50 focus-within:ring-2 focus-within:ring-[#f6b91c]/10 rounded-xl px-4 py-2.5 transition-all duration-200">
                  <MagnifyingGlass
                    size={18}
                    className="text-[#6a6456] shrink-0"
                    weight="bold"
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search order ID, customer or product..."
                    className="w-full bg-transparent text-[#f5f1e6] placeholder:text-[#5a5649] text-xs sm:text-sm outline-none border-none"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="text-[#88837a] hover:text-white"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              </div>

              {/* Dropdowns */}
              <div className="flex items-center gap-2.5 shrink-0">
                {/* Payment Status Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setIsPaymentDropdownOpen(!isPaymentDropdownOpen);
                      setIsDateDropdownOpen(false);
                    }}
                    className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#110f0c] border border-[#231e15] hover:border-[#f6b91c]/40 text-[#d4cfc5] text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer"
                  >
                    <span>
                      {paymentFilter === "All" ? "Payment status" : paymentFilter}
                    </span>
                    <CaretDown size={14} className="text-[#88837a]" />
                  </button>
                  {isPaymentDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-44 bg-[#14120e] border border-[#231e15] rounded-xl shadow-2xl py-1.5 z-50">
                      {["All", "Paid", "Pending", "Refunded"].map((status) => (
                        <div
                          key={status}
                          onClick={() => {
                            setPaymentFilter(status);
                            setIsPaymentDropdownOpen(false);
                          }}
                          className={`px-3 py-2 text-xs cursor-pointer hover:bg-[#1f1b13] hover:text-[#f6b91c] ${
                            paymentFilter === status
                              ? "text-[#f6b91c] font-semibold"
                              : "text-[#b0aaa0]"
                          }`}
                        >
                          {status === "All" ? "All Payment Statuses" : status}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Date Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setIsDateDropdownOpen(!isDateDropdownOpen);
                      setIsPaymentDropdownOpen(false);
                    }}
                    className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#110f0c] border border-[#231e15] hover:border-[#f6b91c]/40 text-[#d4cfc5] text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer"
                  >
                    <span>Date</span>
                    <CaretDown size={14} className="text-[#88837a]" />
                  </button>
                  {isDateDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-36 bg-[#14120e] border border-[#231e15] rounded-xl shadow-2xl py-1.5 z-50">
                      {["All Time", "Today", "Last 7 days", "Last 30 days"].map((d) => (
                        <div
                          key={d}
                          onClick={() => {
                            setDateFilter(d);
                            setIsDateDropdownOpen(false);
                          }}
                          className="px-3 py-2 text-xs text-[#b0aaa0] hover:text-[#f6b91c] hover:bg-[#1f1b13] cursor-pointer"
                        >
                          {d}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ─── Main Content Bento Grid: Table (Left) & Order Details (Right) ─── */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 lg:gap-6 items-start">
              {/* ─── LEFT: Orders Table Column (approx 7-8 cols on xl) ─── */}
              <div className="xl:col-span-8 flex flex-col space-y-4">
                <div className="rounded-2xl bg-[#110f0c] border border-[#231e15] overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                      <thead>
                        <tr className="border-b border-[#1c1812] text-[11px] font-semibold text-[#6a6456] tracking-wider uppercase">
                          <th className="py-3.5 px-4 sm:px-5">ORDER</th>
                          <th className="py-3.5 px-4">CUSTOMER</th>
                          <th className="py-3.5 px-4">DATE</th>
                          <th className="py-3.5 px-4">TOTAL</th>
                          <th className="py-3.5 px-4">PAYMENT</th>
                          <th className="py-3.5 px-4">STATUS</th>
                          <th className="py-3.5 px-4 text-center">ACTION</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#1c1812]/70 text-xs sm:text-sm">
                        {filteredOrders.length === 0 ? (
                          <tr>
                            <td colSpan={7} className="py-12 text-center text-[#88837a]">
                              No orders match your filter criteria.
                            </td>
                          </tr>
                        ) : (
                          filteredOrders.map((order) => {
                            const isSelected = order.id === selectedOrderId;
                            return (
                              <tr
                                key={order.id}
                                onClick={() => setSelectedOrderId(order.id)}
                                className={`transition-all duration-150 cursor-pointer ${
                                  isSelected
                                    ? "bg-[#18140c] border-y border-[#f6b91c]/50 shadow-[inset_0_0_15px_rgba(246,185,28,0.06)]"
                                    : "hover:bg-[#14120e]"
                                }`}
                              >
                                {/* Order Number */}
                                <td className="py-4 px-4 sm:px-5 font-semibold text-white whitespace-nowrap">
                                  {order.orderNumber}
                                </td>

                                {/* Customer Info */}
                                <td className="py-4 px-4">
                                  <div className="flex items-center gap-3">
                                    <div
                                      className={`w-8 h-8 rounded-full ${order.customer.avatarColor} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm`}
                                    >
                                      {order.customer.initials}
                                    </div>
                                    <div className="min-w-0">
                                      <p className="font-semibold text-white truncate text-xs sm:text-sm">
                                        {order.customer.name}
                                      </p>
                                      <p className="text-[#88837a] text-[11px] truncate mt-0.5">
                                        {order.product.itemSummary}
                                      </p>
                                    </div>
                                  </div>
                                </td>

                                {/* Date */}
                                <td className="py-4 px-4 text-[#b0aaa0] text-xs whitespace-nowrap">
                                  {order.date}
                                </td>

                                {/* Total */}
                                <td className="py-4 px-4 font-bold text-white whitespace-nowrap">
                                  ₦{order.total.toLocaleString()}
                                </td>

                                {/* Payment Status Badge */}
                                <td className="py-4 px-4 whitespace-nowrap">
                                  {order.paymentStatus === "Paid" ? (
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 text-xs font-semibold">
                                      <Check size={13} weight="bold" />
                                      <span>Paid</span>
                                    </span>
                                  ) : (
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ff941c]/15 text-[#ff941c] border border-[#ff941c]/30 text-xs font-semibold">
                                      <Clock size={13} weight="bold" />
                                      <span>Pending</span>
                                    </span>
                                  )}
                                </td>

                                {/* Order Status Badge */}
                                <td className="py-4 px-4 whitespace-nowrap">
                                  {order.orderStatus === "Processing" && (
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#2494ff]/15 text-[#2494ff] border border-[#2494ff]/30 text-xs font-semibold">
                                      <ArrowsClockwise
                                        size={13}
                                        weight="bold"
                                        className="animate-spin"
                                        style={{ animationDuration: "3s" }}
                                      />
                                      <span>Processing</span>
                                    </span>
                                  )}
                                  {order.orderStatus === "Pending" && (
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ff941c]/15 text-[#ff941c] border border-[#ff941c]/30 text-xs font-semibold">
                                      <Clock size={13} weight="bold" />
                                      <span>Pending</span>
                                    </span>
                                  )}
                                  {order.orderStatus === "Shipped" && (
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#6366f1]/15 text-[#818cf8] border border-[#6366f1]/30 text-xs font-semibold">
                                      <Package size={13} weight="bold" />
                                      <span>Shipped</span>
                                    </span>
                                  )}
                                  {order.orderStatus === "Delivered" && (
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 text-xs font-semibold">
                                      <CheckCircle size={13} weight="fill" />
                                      <span>Delivered</span>
                                    </span>
                                  )}
                                </td>

                                {/* Action */}
                                <td className="py-4 px-4 text-center">
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedOrderId(order.id);
                                    }}
                                    className="p-1.5 rounded-lg text-[#88837a] hover:text-[#f6b91c] hover:bg-[#1f1b13] transition-colors cursor-pointer"
                                  >
                                    <DotsThree size={18} weight="bold" />
                                  </button>
                                </td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ─── Pagination Footer ─── */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                  <p className="text-xs text-[#88837a]">
                    Showing 1–{filteredOrders.length} of 128 orders
                  </p>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      className="w-7 h-7 rounded-full bg-[#f6b91c] text-[#111111] font-bold text-xs flex items-center justify-center shadow-md cursor-pointer"
                    >
                      1
                    </button>
                    <button
                      type="button"
                      className="w-7 h-7 rounded-full hover:bg-[#1a1712] text-[#88837a] hover:text-white font-medium text-xs flex items-center justify-center transition-colors cursor-pointer"
                    >
                      2
                    </button>
                    <button
                      type="button"
                      className="w-7 h-7 rounded-full hover:bg-[#1a1712] text-[#88837a] hover:text-white font-medium text-xs flex items-center justify-center transition-colors cursor-pointer"
                    >
                      3
                    </button>
                    <span className="text-[#88837a] text-xs px-1">...</span>
                    <button
                      type="button"
                      className="w-7 h-7 rounded-full hover:bg-[#1a1712] text-[#88837a] hover:text-white font-medium text-xs flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <CaretRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* ─── RIGHT: Order Details Sidebar Card (approx 4-5 cols on xl) ─── */}
              {selectedOrder && (
                <div className="xl:col-span-4 rounded-2xl bg-[#110f0c] border border-[#231e15] p-5 sm:p-6 space-y-5 sticky top-24 shadow-xl">
                  {/* Card Title & Close */}
                  <div className="flex items-center justify-between border-b border-[#1c1811] pb-3.5">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      Order details
                    </h3>
                    <button
                      type="button"
                      onClick={() => setSelectedOrderId("")}
                      className="text-[#88837a] hover:text-[#f6b91c] p-1 rounded-lg hover:bg-[#16140e] transition-colors cursor-pointer"
                      title="Close details"
                    >
                      <X size={18} weight="bold" />
                    </button>
                  </div>

                  {/* Order Number, Status pill & Placed date */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {selectedOrder.orderNumber}
                      </h4>
                      <p className="text-xs text-[#88837a] mt-0.5">
                        Placed: {selectedOrder.date}
                      </p>
                    </div>
                    {/* Status Pill matching screenshot */}
                    <div>
                      {selectedOrder.orderStatus === "Processing" && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2494ff]/15 text-[#2494ff] border border-[#2494ff]/30 text-xs font-semibold">
                          <ArrowsClockwise size={13} weight="bold" />
                          <span>Processing</span>
                        </span>
                      )}
                      {selectedOrder.orderStatus === "Pending" && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff941c]/15 text-[#ff941c] border border-[#ff941c]/30 text-xs font-semibold">
                          <Clock size={13} weight="bold" />
                          <span>Pending</span>
                        </span>
                      )}
                      {selectedOrder.orderStatus === "Shipped" && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6366f1]/15 text-[#818cf8] border border-[#6366f1]/30 text-xs font-semibold">
                          <Package size={13} weight="bold" />
                          <span>Shipped</span>
                        </span>
                      )}
                      {selectedOrder.orderStatus === "Delivered" && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 text-xs font-semibold">
                          <CheckCircle size={13} weight="fill" />
                          <span>Delivered</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Customer Card Box with WhatsApp button */}
                  <div className="rounded-xl bg-[#0c0a08] border border-[#231e15] p-3.5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-10 h-10 rounded-full ${selectedOrder.customer.avatarColor} text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm`}
                      >
                        {selectedOrder.customer.initials}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-white text-xs sm:text-sm truncate">
                          {selectedOrder.customer.name}
                        </p>
                        <p className="text-[11px] text-[#88837a] truncate flex items-center gap-1 mt-0.5">
                          <EnvelopeSimple size={12} />
                          <span>{selectedOrder.customer.email}</span>
                        </p>
                        <p className="text-[11px] text-[#88837a] truncate flex items-center gap-1 mt-0.5">
                          <Phone size={12} />
                          <span>{selectedOrder.customer.phone}</span>
                        </p>
                      </div>
                    </div>

                    {/* WhatsApp Action button */}
                    <a
                      href={`https://wa.me/${selectedOrder.customer.phone.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#25d366]/15 hover:bg-[#25d366]/25 border border-[#25d366]/35 text-[#25d366] text-[11px] font-semibold transition-all duration-200 cursor-pointer shrink-0 text-center leading-tight"
                    >
                      <WhatsappLogo size={14} weight="fill" />
                      <span className="hidden sm:inline">Contact on WhatsApp</span>
                      <span className="sm:hidden">WhatsApp</span>
                    </a>
                  </div>

                  {/* Product Item Row */}
                  <div className="flex items-center justify-between gap-3 py-2 border-b border-[#1c1811]">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 p-1 flex items-center justify-center shrink-0 overflow-hidden">
                        <img
                          src={selectedOrder.product.image}
                          alt={selectedOrder.product.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="min-w-0">
                        <h5 className="font-semibold text-white text-xs sm:text-sm truncate">
                          {selectedOrder.product.name}
                        </h5>
                        <p className="text-[#88837a] text-xs mt-0.5">
                          Qty: {selectedOrder.product.quantity} × ₦
                          {selectedOrder.product.unitPrice.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <span className="font-bold text-white text-xs sm:text-sm shrink-0">
                      ₦{selectedOrder.total.toLocaleString()}
                    </span>
                  </div>

                  {/* Financial Breakdown */}
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between text-[#88837a]">
                      <span>Subtotal</span>
                      <span className="text-white font-medium">
                        ₦{selectedOrder.total.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-[#88837a]">
                      <span>Delivery</span>
                      <span className="text-white font-medium">
                        ₦{selectedOrder.deliveryFee.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base font-bold text-white pt-1 border-t border-[#1c1811]">
                      <span>Total</span>
                      <span>
                        ₦{(selectedOrder.total + selectedOrder.deliveryFee).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs text-[#88837a]">Payment:</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#10b981]/20 text-[#10b981] text-[11px] font-semibold">
                        {selectedOrder.paymentMethod}
                      </span>
                    </div>
                  </div>

                  {/* Delivery Address */}
                  <div className="pt-2 border-t border-[#1c1811] space-y-1.5">
                    <span className="text-xs text-[#88837a] font-medium block">
                      Delivery Address:
                    </span>
                    <div className="flex items-start gap-2 text-xs text-white">
                      <MapPin size={15} className="text-[#f6b91c] shrink-0 mt-0.5" />
                      <p className="leading-relaxed">{selectedOrder.deliveryAddress}</p>
                    </div>
                  </div>

                  {/* Order Progress Steps Timeline */}
                  <div className="pt-2 border-t border-[#1c1811] space-y-3">
                    <div className="space-y-3 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1.5px] before:bg-[#231e15]">
                      {selectedOrder.timeline.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-3 relative pl-6">
                          {/* Dot / Indicator */}
                          <div
                            className={`absolute left-0 top-0.5 w-4 h-4 rounded-full flex items-center justify-center ${
                              step.completed && !step.current
                                ? "bg-[#22c55e] text-black"
                                : step.current
                                ? "bg-[#f6b91c] text-black animate-pulse"
                                : "bg-[#231e15] border border-[#383124]"
                            }`}
                          >
                            {step.completed && !step.current && (
                              <Check size={10} weight="bold" />
                            )}
                            {step.current && (
                              <div className="w-1.5 h-1.5 rounded-full bg-black" />
                            )}
                          </div>
                          <div>
                            <p
                              className={`text-xs font-semibold ${
                                step.completed || step.current ? "text-white" : "text-[#6a6456]"
                              }`}
                            >
                              {step.title}
                            </p>
                            {step.time && (
                              <p className="text-[11px] text-[#88837a] mt-0.5">
                                {step.time}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 pt-2 border-t border-[#1c1811]">
                    <button
                      type="button"
                      onClick={handleMarkAsShipped}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#ffd35c] to-[#f6b91c] hover:from-[#ffe082] hover:to-[#f7c033] text-[#161100] font-bold text-xs sm:text-sm shadow-[0_4px_16px_rgba(246,185,28,0.2)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer"
                    >
                      <Package size={16} weight="bold" />
                      <span>Mark as shipped</span>
                    </button>

                    <a
                      href={`mailto:${selectedOrder.customer.email}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#14120e] hover:bg-[#1c1812] border border-[#231e15] hover:border-[#f6b91c]/30 text-white font-medium text-xs sm:text-sm transition-all duration-200 cursor-pointer no-underline text-center"
                    >
                      <EnvelopeSimple size={16} />
                      <span>Contact customer</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
