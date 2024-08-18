import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <div className="py-5 px-5 md:px-12 lg:px-28">
            <div className="flex justify-between items-center">
                <Link href='/'>
                    <Image src={assets.logo} width={180} alt="" className="w-[130px] sm:w-auto " />
                </Link>
                <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black" style={{ boxShadow: "-5px 2px 0 #000000" }}>Get Started <Image src={assets.arrow} /> </button>
            </div>
            <div className="text-center my-8 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-5xl font-medium">Latest Blog</h1>
                <p className="mt-10 maxw-[740px] m-auto text-xs sm:text-base ">A sleek blog website delivering fresh articles, insightful content, and seamless navigation for an <br /> engaging and enjoyable reading experience.</p>
                <form className=" shadow-[-7px_2px_0_#000000] flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black" action="">
                    <input type="email" name="" id="" placeholder="Enter Your Email" className="pl-4 outline-none " />
                    <button type="submit" className="border-l border-black py-4 px-4 sm:px-6  active:bg-gray-600 active:text-white">Subcribe</button>
                </form>
            </div>
        </div>
    );
};

export default Header;