import { BagIcon, XIcon } from "@phosphor-icons/react";
import { addToCart } from "../../services/storefront/cartService";
import { useState } from "react";
import { SendWhatappMsg } from "../../services/storefront/SendWhatappMsg";
import { formatMoney } from "../../utils/formatCurrency";
import { naijaData } from "../../lib/nigeriaData";

interface BagPageProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export function BagPage({ isOpen = true, onClose }: BagPageProps) {
    const [selected, setSelected] = useState('Select State')
    const [selectedLga, setSelectedLga] = useState('Select Local Govt / City')
    const [reload, setReload] = useState(false);
    function getTotal(): number {
        let total = 0;
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        cart.forEach((item: any) => {
            total += (item.quantity * item.price)
        });
        window.dispatchEvent(new Event('totalUpdated'))
        return total
    }

    if (!isOpen) return null;
    const cartStr = localStorage.getItem('cart');
    const cart: any[] = cartStr ? JSON.parse(cartStr) : [];


    return (
        <div
            className="fixed top-0 right-0 w-screen h-full backdrop-blur-[12px] bg-black/50 flex flex-col items-end z-50 transition-all duration-300"
            onClick={onClose}
        >
            <div
                className="w-full max-w-[450px] h-full bg-[#0e0e12] border-l border-[#27272a] shadow-2xl flex flex-col text-white"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Bag Header */}
                <div className="flex justify-between items-center place-content-between w-full border-b border-[#1f1f23] px-4 py-2">
                    {/* Carrier div: carries the bag icon + text, 60% width, 50px height, centered */}
                    <div className="max-w-[1000px] flex items-center w-[60%] py-1">
                        <BagIcon size={20} color="#fbbf24" weight="bold" className="mr-3 shrink-0" />
                        <p className="text-[clamp(13px,3vw,15px)] font-semibold text-[#fafafa] tracking-wide select-none">
                            Your Shopping Bag
                        </p>
                    </div>
                    {/* Cancel (X) icon beside carrier div with mr-3 */}
                    <XIcon
                        size={20}
                        className="mr-3 cursor-pointer text-zinc-400 hover:text-white transition-colors"
                        onClick={onClose}
                    />
                </div>

                {/* Bag Body Div */}
                <div className="flex-1 relative flex flex-col w-full overflow-hidden">
                    {/* Scrollable Content Area */}
                    <div className="flex-1 overflow-y-auto px-3 py-4 pb-[140px] flex flex-col gap-3">
                        {/* Bag Item Main Div */}
                        {cart && cart.map((item: any) => {
                            return (item.quantity !== 0 &&
                                (<div key={item.id} className="flex w-full mr-9 h-fit p-4 border border-[#27272a] bg-[#141418] rounded-xl items-center">
                                    {/* Product Image */}
                                    <img
                                        src={item.image_url}
                                        alt={item.name}
                                        className="w-[60px] h-[60px] object-cover rounded-lg shrink-0"
                                    />

                                    {/* Details beside image */}
                                    <div className="ml-3 flex flex-col gap-1">
                                        <p className="text-[12px] font-semibold text-white">
                                            {item.name}
                                        </p>
                                        <p className="text-[12px] text-amber-400 font-mono font-medium">
                                            ₦{formatMoney(item.price * item.quantity)}
                                        </p>

                                        {/* Quantity Selector Div */}
                                        <div className="border border-[#27272a] bg-[#0a0a0a] w-fit px-2 py-1 flex items-center gap-2 rounded-md mt-1">
                                            <p className="text-[12px] cursor-pointer text-zinc-400 hover:text-white select-none"
                                                onClick={() => {
                                                    addToCart(item,
                                                        'subtract',
                                                        setReload, reload)
                                                }
                                                }>
                                                -
                                            </p>
                                            <p className="text-[12px] font-mono select-none text-white font-medium">
                                                {item.quantity}
                                            </p>
                                            <p
                                                onClick={() => addToCart(item, 'add', setReload, reload)}
                                                className="text-[12px] cursor-pointer text-zinc-400 hover:text-white select-none">
                                                +
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                )

                            )
                        })}

                        {/* WhatsApp Dispatch Info Div */}
                        <div className="px-3 flex flex-col gap-2 mt-2">
                            <p className="text-[11px] font-bold uppercase tracking-[-0.02em] text-[#fbbf24]">
                                WhatsApp Dispatch Info
                            </p>

                            {/* Customer Name */}
                            <input
                                type="text"
                                placeholder="Your Name (e.g. Omotolani)"
                                className="w-full px-3 py-2 text-xs bg-[#0a0a0a] border border-[#27272a] rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                            />

                            {/* State and LGA/City dropdowns on same line */}
                            <div className="flex gap-2 w-full">
                                <select
                                    onChange={(e) => { setSelected(e.target.value); console.log(e.target.value) }}
                                    className="w-1/2 px-3 py-2 text-xs bg-[#0a0a0a] border border-[#27272a] rounded-lg text-white focus:outline-none focus:border-amber-400 transition-colors cursor-pointer">
                                    <option value="Select State">Select State</option>
                                    {Object.keys(naijaData).map((item) => {
                                        return (
                                            <option key={item} value={item}>{item}</option>
                                        )
                                    })}
                                </select>

                                <select
                                    onChange={(e) => { setSelectedLga(e.target.value) }}
                                    className="w-1/2 px-3 py-2 text-xs bg-[#0a0a0a] border border-[#27272a] rounded-lg text-white focus:outline-none focus:border-amber-400 transition-colors cursor-pointer">
                                    <option value="Select Local Govt / City">Select Local Govt / City</option>
                                    {(naijaData as Record<string, string[]>)[selected]?.map((item: string) => {
                                        return (
                                            <option key={item} value={item}>{item}</option>
                                        )
                                    })}
                                </select>
                            </div>

                            {/* Delivery Address Line */}
                            <input
                                type="text"
                                placeholder="Delivery Address Line"
                                className="w-full px-3 py-2 text-xs bg-[#0a0a0a] border border-[#27272a] rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Pinned Bottom Section */}
                    <div className="absolute bottom-0 left-0 w-full px-3 py-6 bg-[#0a0a0a] border-t border-[#1f1f23] flex flex-col gap-3">
                        {/* First Div: Total Due and Price */}
                        <div className="flex justify-between items-center place-content-between">
                            <p className="text-xs text-zinc-400 uppercase tracking-wider font-medium">
                                Total Due
                            </p>
                            <p className="text-[17px] font-bold font-mono text-amber-400">
                                ₦{formatMoney(getTotal())}
                            </p>
                        </div>

                        {/* Second Div: Button to Send Order to WhatsApp */}
                        <button
                            type="button"
                            onClick={() => SendWhatappMsg('123456fnfjnjdd', '2349169637488', selected, selectedLga)}
                            className="w-full h-[30px] bg-[#10b981] hover:bg-[#059669] text-black font-bold text-xs rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md"
                        >
                            Send Official Order to WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BagPage;
