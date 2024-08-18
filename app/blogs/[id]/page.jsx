'use client'
import { assets, blog_data } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const page = ({ params }) => {

    const [data, setData] = useState(null);

    const fetchBlogData = () => {
        for (let i = 0; i < blog_data.length; i++)
            if (Number(params.id) === blog_data[i].id) {
                setData(blog_data[i]);
                console.log(blog_data[i])
                break;
            }
    }

    useEffect(() => {
        fetchBlogData();
    }, [])
    return (data ? <>
        <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <Link href='/'>
                    <Image src={assets.logo} width={180} className='w-[130px] sm:w-auto ' alt='logo' />
                </Link>
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 lg:px-6 border border-black shadow-[-7px_2px_0px_#000000]'>Get Started
                    <Image src={assets.arrow} alt='logo arrow' />
                </button>
            </div>
            <div className='text-center my-20 '>
                <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto '>{data.title}</h1>
                <Image className='mx-auto mt-6 border border-white rounded-full ' src={data.author_img} width={60} height={60} alt='author' />
                <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
            </div>
        </div>

        <div className='max-5 max-w-[800px] md:mx-auto mt-[-10px] mb-10 '>
            <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt='img' />
            <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
            <p>{data.description}</p>
            <h3 className='my-5 text-lg font-semibold'>Step 1: {data.step_1}</h3>
            <p>{data.description_2}</p>
            <h3 className='my-5 text-lg font-semibold'>Step 2: {data.step_2}</h3>
            <p>{data.description_3}</p>
            <h3 className='my-5 text-lg font-semibold'>Step 3: {data.step_3}</h3>
            <p>{data.description_4}</p>
            <div className='my-24 '>
                <p className='text-black font-semibold my-4'>Share this airtcle on social media</p>
                <div className='flex'>
                    <Image src={assets.facebook_icon} alt='fb' width={50} />
                    <Image src={assets.twitter_icon} alt='fb' width={50} />
                    <Image src={assets.googleplus_icon} alt='fb' width={50} />
                </div>
            </div>

        </div>
        <Footer />
    </> : <></>
    );
};

export default page;