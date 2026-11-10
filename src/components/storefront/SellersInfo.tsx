import { BagIcon } from "@phosphor-icons/react/dist/ssr";
import userPic from "../../assets/products/chioma-avatar.jpg"
import { WhatsappLogoIcon } from "@phosphor-icons/react";
import { supabaseFunctions } from "../../services/storefront/storeService";
import { useEffect, useState } from "react";
import { formatMoney } from "../../utils/formatCurrency";


export function SellersInfo({ username, setIsBagOpen, count }: { username?: string, setIsBagOpen?: (val: boolean) => void, count?: number }) {
    let [profilePic] = useState(userPic);
    let [, setTotal] = useState(0)
    let [SellersInfo, setSellersInfo] = useState<any>(null)
    function UpdateTotal() {
        let amount = 0;
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        cart.forEach((item: any) => {
            amount += (item.quantity * item.price)
        });
        setTotal(amount);
        return amount
    }
    async function getSellersInfo(uName?: string) {
        if (!uName) return;
        const info = await supabaseFunctions.getSellerInfo(uName);
        setSellersInfo(info)
        window.addEventListener('totalUpdated', UpdateTotal)

    }
    useEffect(() => {
        getSellersInfo(username)

    }, []);
    const infoData = SellersInfo || {
        avatar_url: profilePic || "/src/assets/products/amaka-avatar.jpg",
        bio: "Luxury Ankara prints, ready-to-wear dresses & custom fittings in Lagos.",
        business_tags: ['Womenswear', 'Luxury Thrifts', 'Ready-to-Wear'],
        created_at: "2026-10-27T19:29:22.084802+00:00",
        id: "11111111-1111-1111-1111-111111111111",
        store_name: "Amaka Wears & Boutique",
        username: "amaka_wears",
        whatsapp_number: "2348012345678"
    };


    function Image() {

        const imageStyles = () => {
            return ("rounded-full object-cover object-top size-20")
        };

        function GetImage() {
            return (
                <img
                    src={infoData.avatar_url}
                    alt="your profile picture" className={imageStyles()}
                />


            )
        };

        const imageShadowStyle = () => {
            return (
                "m-4 rounded-full w-fit transition-all duration-300 relative"
            )
        };

        function GetImageShadow() {
            return (
                <div
                    className={imageShadowStyle()}
                    style={{
                        backgroundColor: "#171717",
                        border: "1px solid #262626",
                        boxShadow: "0 0 25px rgba(16, 185, 129, 0.18)",
                    }}
                    onMouseEnter={e => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 32px rgba(16, 185, 129, 0.35)";
                        (e.currentTarget as HTMLDivElement).style.borderColor = "#10b981";
                    }}
                    onMouseLeave={e => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 25px rgba(16, 185, 129, 0.18)";
                        (e.currentTarget as HTMLDivElement).style.borderColor = "#262626";
                    }}
                >
                    {<GetImage />}

                    <span
                        className="text-[8px] px-2 py-0.5 rounded-full font-medium absolute -right-2 top-[80%]"
                        style={{
                            background: "#262626",
                            color: "#a3a3a3",
                            border: "1px solid #404040",
                        }}
                    >
                        Standard
                    </span>

                </div>
            )
        };

        function GetCenteredImage() {
            return (
                <div className="justify-center inline-flex">
                    <GetImageShadow />
                </div>
            )
        };

        return (
            <GetCenteredImage />
        )
    };

    function StoreName() {
        const nameStyles = () => {
            return (
                "font-bold text-[18px] w-[90vw] tracking-wider"
            )
        };

        function GetName() {
            return (
                <p className={nameStyles()} style={{ color: "#f9fafb" }}>{infoData.store_name}</p>
            )
        };

        const nameContainerStyles = () => {
            return (
                "inline-flex justify-center w-full text-center sm:text-start"
            )
        };

        function NameContainer() {
            return (
                <div
                    className={nameContainerStyles()}>
                    <GetName />
                </div>
            )
        };
        return (
            <NameContainer />
        )
    };

    function Username() {
        function Username() {
            const UsernameStyles = () => {
                return ("text-[11px] font-bold tracking-widest")
            }
            return (
                <p className={UsernameStyles()} style={{ color: "#fbbf24" }}>
                    @{infoData.username}
                </p>
            )
        }
        function GetUserName() {
            const UsernameDivStyles = () => {
                return ("flex w-full justify-center sm:justify-start mt-0.5")
            }
            return (
                <div className={UsernameDivStyles()}>
                    <Username />
                </div>
            )
        }
        return (
            <GetUserName />
        )
    };

    function Description() {
        function Descriptions() {
            const DescriptionStyles = () => {
                return ("text-[11px] w-[68vw] max-w-md font-semibold text-center sm:text-start")
            }
            return (
                <p className={DescriptionStyles()} style={{ color: "#a3a3a3" }}>
                    {infoData.bio}
                </p>
            )
        }
        return (
            <div className="flex w-full justify-center mt-1 mb-2">
                <Descriptions />
            </div>
        )
    };

    function Pills() {
        const tagsArray = [...infoData.business_tags];
        (tagsArray.length === 1 ? tagsArray.push('Verified Merchant', 'Standard User') : tagsArray.length === 2 ? tagsArray.push('Verified Merchant') : null)
        return (
            (tagsArray.map((prop) => {
                return (

                    <span
                        className="text-[10px] mx-0.5 mb-2 pl-3 pr-3 py-1 w-fit rounded-full flex gap-1 items-center"
                        style={{ color: "#a3a3a3", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)" }}
                    >
                        <div style={{ background: "#10b981" }} className="size-1.25 rounded-full"></div>
                        {prop}
                    </span>

                )
            }))

        )
    }

    function Bag() {

        return (
            <div
                className="mb-5 rounded-4xl w-[90%] sm:w-full max-w-[340px] sm:flex-1 px-5 flex flex-col gap-2 transition-all duration-300"
                style={{
                    border: "2px solid rgba(78, 73, 54, 0.59)",
                    background: "#0a0a0a",
                }}
            >
                <div className="flex mt-4.5 gap-2">
                    <div
                        className="w-fit rounded-[5px] px-1 py-1 h-7 relative"
                        style={{
                            border: "1px solid #fbbf24",
                            background: "rgba(251, 191, 36, 0.12)",
                        }}
                    >
                        <div
                            className="text-center flex items-center justify-center rounded-full font-bold text-[12px] size-3 absolute -top-1 -right-1"
                            style={{ background: "#10b981", color: "#052e16" }}
                        >{count}</div>
                        <BagIcon
                            weight="regular"
                            size={20}
                            color="#fbbf24"
                        />
                    </div>
                    <div className="">
                        <p className="text-[10px] font-bold" style={{ color: "#a3a3a3" }}>YOUR SHOPPING BAG</p>
                        <h3 className="text-[13px] font-bold" style={{ color: "#fafafa" }}>₦{formatMoney(UpdateTotal())}</h3>
                    </div>
                </div>
                <div className="flex gap-1 mb-3">
                    <button
                        className="font-bold text-[12px] flex-1 px-5 rounded-xl cursor-pointer transition-all duration-200"
                        style={{ background: "#fbbf24", color: "#0a0a0a" }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLButtonElement).style.background = "#fde047";
                            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 20px -5px rgba(251, 191, 36, 0.35)";
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLButtonElement).style.background = "#fbbf24";
                            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                            (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                        }}
                        onClick={() => { setIsBagOpen?.(true) }}
                    >OPEN BAG</button>
                    <div
                        className="py-1 px-1.5 rounded-[5px] cursor-pointer transition-all duration-200"
                        style={{ background: "rgba(16, 185, 129, 0.14)", border: "1px solid rgba(16, 185, 129, 0.35)" }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLDivElement).style.background = "#10b981";
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLDivElement).style.background = "rgba(16, 185, 129, 0.14)";
                        }}
                    >
                        <WhatsappLogoIcon
                            weight="regular"
                            size={20}
                            color="#10b981"
                        />
                    </div>
                </div>
            </div>
        )
    }

    return (
        (SellersInfo ?
            (<div
                className="flex flex-col items-center sm:max-w-[900px] md:max-w-[980px] relative rounded-4xl w-full mb-10"
                style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(18, 18, 20, 0.78)",
                }}
            >
                <div className="h-px w-[60%] absolute top-0 inset-x-0 mx-auto pointer-events-none" style={{
                    background: "linear-gradient(to right, rgba(255, 255, 255, 0.05) 0%, #fbbe248c 30%, #fbbe248c 60%, rgba(255, 255, 255, 0.05) 100%)"
                }}></div>
                <div className="flex sm:pt-5 sm:items-center flex-col sm:flex-row sm:flex-wrap w-[90%] sm:w-[97%] items-center">
                    <Image />
                    <div className="flex sm:flex-1 flex-col items-center sm:flex-row">
                        <div className="sm:w-[60%] sm:mx-4 sm:max-w-[250px]">
                            <StoreName />
                            <Username />
                            <Description />
                            <div className="flex sm:flex-col flex-wrap justify-center w-full"><Pills /></div>

                        </div>
                        <Bag />
                    </div>

                </div>
            </div>) : (<p>hello</p>)
        )

    )
}






