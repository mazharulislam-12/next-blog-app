import { blog_data } from "@/Assets/assets";
import BlogItem from "./BlogItem";
import { useState } from "react";

const BlogList = () => {
    const [menu, setMenu] = useState('All');
    
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
            <div className="flex justify-center gap-6 my-10">
                <button 
                    onClick={() => setMenu('All')}  
                    className={`py-1 px-1 lg:px-4 rounded-sm ${menu === 'All' ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
                >
                    All
                </button>
                <button 
                    onClick={() => setMenu('Technology')} 
                    className={`py-1 px-1 lg:px-4 rounded-sm ${menu === 'Technology' ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
                >
                    Technology
                </button>
                <button 
                    onClick={() => setMenu('Startup')} 
                    className={`py-1 px-1 lg:px-4 rounded-sm ${menu === 'Startup' ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
                >
                    Startup
                </button>
                <button 
                    onClick={() => setMenu('Lifestyle')} 
                    className={`py-1 px-1 lg:px-4 rounded-sm ${menu === 'Lifestyle' ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
                >
                    Lifestyle
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16 xl:mx-24">
                {filteredData.map((item) => (
                    <BlogItem 
                        key={item.id} 
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
