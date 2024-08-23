import { assets } from "@/Assets/assets";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
            <Image src={assets.logo_light} width={120} height={40} alt="Light logo" />
            <p className="text-sm text-white">All rights reserved. Copyright @bloger</p>
            <div className="flex gap-4">
                <Image src={assets.facebook_icon} alt="Facebook icon" width={40} height={40} />
                <Image src={assets.twitter_icon} alt="Twitter icon" width={40} height={40} />
                <Image src={assets.googleplus_icon} alt="Google+ icon" width={40} height={40} />
            </div>
        </div>
    );
};

export default Footer;
