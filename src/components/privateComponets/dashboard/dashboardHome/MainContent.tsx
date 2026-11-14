import GreetingHeader from "./mainContent/GreetingHeader";
import StatsCard from "./mainContent/StatsCard";
import SalesOverveiw from "./mainContent/SalesOverveiw";
import TopProduct from "./mainContent/TopProduct";
import RecentOrder from "./mainContent/RecentOrder";
import StoreStatus from "./mainContent/StoreStatus";
import AiCard from "./mainContent/AiCard";
import BuyProCard from "./mainContent/BuyProCard";

interface StoreStatusItem {
  id: string;
  label: string;
  completed: boolean;
}

interface MainContentProps {
  storeStatusItems: StoreStatusItem[];
}

export default function MainContent({ storeStatusItems }: MainContentProps) {
  return (
    <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8 xl:p-10 relative z-10">
      <div className="w-full max-w-[1700px] mx-auto space-y-6 sm:space-y-7 lg:space-y-8">
        {/* ─── Greeting Header & Date Filter ─── */}
        <GreetingHeader />
        {/* ─── 4 Stat Cards ─── */}
        <StatsCard />
        {/* ─── Row 2: Sales Overview & Top Products ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {/* Sales Overview (left 7-8 cols) */}
          <SalesOverveiw />
          {/* Top Products (right 5-4 cols) */}
          <TopProduct />
        </div>
        {/* ─── Row 3: Recent Orders, Store Status, AI Card ─── */}
        <div className="grid grid-cols-1 min-[529px]:grid-cols-2 min-[1492px]:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {/* Recent Orders */}
          <RecentOrder />
          {/* Your Store Status */}
          <StoreStatus storeStatusItems={storeStatusItems} />
          {/* Let AI Work for You */}
          <AiCard />
          {/* Go Pro Card — Only visible on tablet / ~980px screens (hidden on mobile and desktop) */}
          <BuyProCard />
        </div>
      </div>
    </main>
  );
}
