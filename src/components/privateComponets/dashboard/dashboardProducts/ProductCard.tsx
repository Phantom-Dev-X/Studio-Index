import { PencilSimpleIcon, DotsThreeIcon } from "@phosphor-icons/react";

export interface ProductData {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  status: "Published" | "Draft";
  image: string;
}

/** Wavy SVG separator that sits between the image and the info section */
function WavySeparator() {
  return (
    <div className="absolute -top-[14px] left-0 right-0 z-10 pointer-events-none">
      <svg
        viewBox="0 0 400 20"
        preserveAspectRatio="none"
        className="w-full h-[14px] block"
        fill="#1a1610"
      >
        <path d="M0 20 Q50 0 100 12 Q150 24 200 10 Q250 -2 300 14 Q350 26 400 8 L400 20 Z" />
      </svg>
    </div>
  );
}

function formatPrice(n: number): string {
  return "₦" + n.toLocaleString();
}

export function ProductCard({ product }: { product: ProductData }) {
  const statusColor =
    product.status === "Published"
      ? "bg-[#20D985] text-[#0a2918]"
      : "bg-[#f6b91c] text-[#1a1200]";

  return (
    <div className="group rounded-2xl overflow-hidden border border-[#231e15] hover:border-[#f6b91c]/40 bg-[#110f0c] transition-all duration-300 hover:shadow-[0_0_24px_rgba(246,185,28,0.08)] flex flex-col">
      {/* Image area */}
      <div className="relative aspect-[4/3] bg-[#0c0b09] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Status badge */}
        <span
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wide uppercase ${statusColor}`}
        >
          {product.status}
        </span>
      </div>

      {/* Info section with wavy top */}
      <div className="relative bg-[#1a1610] flex-1">
        <WavySeparator />
        <div className="px-3.5 sm:px-4 pt-3 pb-3 sm:pb-3.5 flex flex-col gap-2">
          {/* Product name */}
          <h3 className="text-sm sm:text-[15px] font-semibold text-white truncate leading-tight">
            {product.name}
          </h3>

          {/* Prices row */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm sm:text-base font-bold text-[#f6b91c]">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-xs text-[#6a6456] line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
            {product.discount && (
              <span className="ml-auto text-[10px] sm:text-xs font-bold text-[#20D985] bg-[#20D985]/15 px-2 py-0.5 rounded-full">
                {product.discount}%
              </span>
            )}
          </div>

          {/* Actions row */}
          <div className="flex items-center gap-2 mt-1">
            <button
              type="button"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#231e15] hover:bg-[#2e2819] border border-[#3a3226] hover:border-[#f6b91c]/40 text-[#d4cfc5] hover:text-white text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer"
            >
              <PencilSimpleIcon size={14} weight="bold" />
              <span>Edit</span>
            </button>
            <button
              type="button"
              className="w-9 h-9 rounded-xl bg-[#231e15] hover:bg-[#2e2819] border border-[#3a3226] hover:border-[#f6b91c]/40 text-[#88837a] hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer shrink-0"
            >
              <DotsThreeIcon size={18} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

