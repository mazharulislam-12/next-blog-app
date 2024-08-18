import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ title, description, category, image, id }) => {
    return (
        <div className="bg-white border border-black hover:shadow-lg rounded-lg overflow-hidden flex flex-col">
            <div className="relative w-full h-64">
                <Link href={`/blogs/${id}`}>
                    <Image src={image} alt={title || 'Blog image'} width={400} height={400} className="border-b border-black " />
                </Link>
            </div>
            <div className="p-4 flex-1">
                <p className="px-2 py-1 inline-block bg-black text-white text-sm">{category}</p>
                <h5 className="mt-2 mb-2 text-lg font-medium tracking-tight text-gray-900">{title}</h5>
                <p className="text-sm tracking-tight text-gray-700">{description}</p>
            </div>
            <div className="px-4 pb-4">
                <Link href={`/blogs/${id}`} className="inline-flex items-center py-2 font-semibold text-center">
                    Read more <Image src={assets.arrow} alt="arrow icon" width={12} className="ml-2" />
                </Link>
            </div>
        </div>
    );
};

export default BlogItem;
