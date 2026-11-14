import {
  BagIcon,
  EyeIcon,
  ShoppingCartIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { StatCard } from "../../shared/StatCard";
import type { StatCardData } from "../../shared/StatCard";

const homeStats: StatCardData[] = [
  {
    label: "Total Sales",
    value: "₦0",
    change: "0%",
    color: "#FFC329",
    icon: BagIcon as Icon,
    sparkData: [0, 2, 1, 5, 4, 8, 7],
    gradientId: "sparkSalesHome",
  },
  {
    label: "Total Orders",
    value: "0",
    change: "0%",
    color: "#20D985",
    icon: ShoppingCartIcon as Icon,
    sparkData: [0, 1, 3, 2, 6, 5, 9],
    gradientId: "sparkOrdersHome",
  },
  {
    label: "New Customers",
    value: "0",
    change: "0%",
    color: "#2494FF",
    icon: UsersThreeIcon as Icon,
    sparkData: [0, 2, 1, 4, 3, 7, 8],
    gradientId: "sparkCustomersHome",
  },
  {
    label: "Store Views",
    value: "0",
    change: "0%",
    color: "#FF941C",
    icon: EyeIcon as Icon,
    sparkData: [0, 3, 2, 5, 4, 7, 10],
    gradientId: "sparkViewsHome",
  },
];

export default function StatsCard() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
      {homeStats.map((stat) => (
        <StatCard key={stat.gradientId} {...stat} />
      ))}
    </div>
  );
}
