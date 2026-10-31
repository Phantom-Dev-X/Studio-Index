import { BagIcon } from "@phosphor-icons/react/dist/ssr";
import userImage from "../assets/products/amaka-avatar.jpg"
import { WhatsappLogoIcon } from "@phosphor-icons/react";


export function SellersInfo() {
    function Image() {

        const imageStyles = () => {
            return ("rounded-full object-cover object-top size-20")
        };

        function GetImage() {
            return (
                <img
                    src={userImage}
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
                <p className={nameStyles()} style={{ color: "#f9fafb" }}>Amaka's Premuim Fits</p>
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
                    @amaka_wears
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
                    Curated luxury thrifts and premium streetwear. Delivery nationwide.
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
        return (
            <div className="flex sm:flex-col flex-wrap justify-center w-full">
                <span
                    className="text-[10px] mx-0.5 mb-2 pl-3 pr-3 py-1 w-fit rounded-full flex gap-1 items-center"
                    style={{ color: "#a3a3a3", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)" }}
                >
                    <div style={{ background: "#10b981" }} className="size-1.25 rounded-full"></div>
                    Verified Merchant
                </span>
                <span
                    className="text-[10px] mx-2 mb-2 pl-3 pr-3 py-1 w-fit rounded-full flex gap-1 items-center"
                    style={{ color: "#a3a3a3", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)" }}
                >
                    <div style={{ background: "#10b981" }} className="size-1.25 rounded-full"></div>
                    Standard Users
                </span>
                <span
                    className="text-[10px] mx-2 mb-2 pl-3 pr-3 py-1 w-fit rounded-full flex gap-1 items-center"
                    style={{ color: "#a3a3a3", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)" }}
                >
                    <div style={{ background: "#10b981" }} className="size-1.25 rounded-full"></div>
                    Clothes and accessories
                </span>
            </div>
        )
    }

    function Bag() {

        return (
            <div
                className="mb-5 rounded-4xl w-[90%] sm:flex-1 px-5 flex flex-col gap-2"
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
                        >0</div>
                        <BagIcon
                            weight="regular"
                            size={20}
                            color="#fbbf24"
                        />
                    </div>
                    <div className="">
                        <p className="text-[10px] font-bold" style={{ color: "#a3a3a3" }}>YOUR SHOPPING BAG</p>
                        <h3 className="text-[13px] font-bold" style={{ color: "#fafafa" }}>₦0</h3>
                    </div>
                </div>
                <div className="flex gap-1 mb-3">
                    <button
                        className="font-bold text-[12px] flex-1 px-5 rounded-xl"
                        style={{ background: "#fbbf24", color: "#0a0a0a" }}
                    >OPEN BAG</button>
                    <div
                        className="py-1 px-1.5 rounded-[5px]"
                        style={{ background: "rgba(16, 185, 129, 0.14)", border: "1px solid rgba(16, 185, 129, 0.35)" }}
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
        <div
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
                        <Pills />
                    </div>
                    <Bag />
                </div>

            </div>
        </div>
    )
}