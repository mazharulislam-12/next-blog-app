import { blog_data } from "@/Assets/assets";
import BlogItem from "./BlogItem";
import { useState } from "react";

const BlogList = () => {
    const [menu, setMenu] = useState('All');

    const categories = ['All', 'Technology', 'Startup', 'Lifestyle'];

    const filteredData = blog_data.filter((item) => {
        if (menu === 'All') return true;
        return item.category === menu;
    });

    const rows = [];
    for (let i = 0; i < filteredData.length; i += 4) {
        rows.push(filteredData.slice(i, i + 4));
    }

    return (
        <div>
            <div className="flex justify-center gap-4 my-6">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setMenu(category)}
                        className={`py-2 px-4 rounded-md text-sm ${menu === category ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16 mx-4 lg:mx-24">
                {filteredData.map((item) => (
                    <BlogItem
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        category={item.category}
                    />
                ))}
            </div>
        </div>
    );
};

export default BlogList;
