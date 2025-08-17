'use client'

import { assets, blog_data } from '@/Assets/assets';
import React, { useState, useEffect, use } from 'react'
import Image from 'next/image';
import Footer from '@/Components/Footer';
import Link from 'next/link';
import axios from 'axios';
import { set } from 'mongoose';
const page = ({params}) => {

    const resolvedParams = use(params);

    const [data,setData] = useState(null);

    const fetchBlogData = async () =>{
        const respond = await axios.get('/api/blog',{
            params:{
                id:resolvedParams.id
            }
        })
        setData(respond.data.blog);
    }
    
    useEffect(() => {
        fetchBlogData();
    }, [])

  return (data? <>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className="flex justify-between items-center">
            <Link href='/'>
            <Image src={assets.logo} alt='' className="w-[130px] sm:w-auto" />
            </Link>
            <button className='flex items-center gap-2  font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
                Get Started <Image src={assets.arrow} alt='' className="w-4 h-4" />
            </button>
        </div>
        <div className="text-center my-24">
            <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
            <Image src={data.author_image} alt='' width={60} height={60} className='mx-auto mt-6 border border-white rounded-full' />
            <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
        </div>
    </div>
    <div className="mx-5 max-w-[800px] md:mx-auto mx-[-100px] mb-10">
        <Image src={data.image} alt='' width={1280} height={720} className='border border-white' />
        <h1 className="my-8 text-[26px] font-semibold">Introduction</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">Step 1: Self-Reflection and Goal Setting</h3>
        <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae autem nemo quibusdam temporibus quos exercitationem alias porro impedit amet. Corporis sed facere sit quaerat. At qui deserunt in nulla eligendi.</p>
        <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae autem nemo quibusdam temporibus quos exercitationem alias porro impedit amet. Corporis sed facere sit quaerat. At qui deserunt in nulla eligendi.</p>
        <h3 className="my-5 text-[18px] font-semibold">Step 2: Self-Reflection and Goal Setting</h3>
        <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae autem nemo quibusdam temporibus quos exercitationem alias porro impedit amet. Corporis sed facere sit quaerat. At qui deserunt in nulla eligendi.</p>
        <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae autem nemo quibusdam temporibus quos exercitationem alias porro impedit amet. Corporis sed facere sit quaerat. At qui deserunt in nulla eligendi.</p>
        <h3 className="my-5 text-[18px] font-semibold">Step 3: Self-Reflection and Goal Setting</h3>
        <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae autem nemo quibusdam temporibus quos exercitationem alias porro impedit amet. Corporis sed facere sit quaerat. At qui deserunt in nulla eligendi.</p>
        <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae autem nemo quibusdam temporibus quos exercitationem alias porro impedit amet. Corporis sed facere sit quaerat. At qui deserunt in nulla eligendi.</p>
        <h3 className="my-5 text-[18px] font-semibold">Conclusion</h3>
        <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae autem nemo quibusdam temporibus quos exercitationem alias porro impedit amet. Corporis sed facere sit quaerat. At qui deserunt in nulla eligendi.</p>
        <div className="my-24">
            <p className="text-black font font-semibold my-4">Share this article on social media</p>
            <div className="flex">
                <Image src={assets.twitter_icon} alt='Twitter' width={50} />
                <Image src={assets.facebook_icon} alt='Facebook' width={50} />
                <Image src={assets.googleplus_icon} alt='LinkedIn' width={50} />
            </div>
        </div>
    </div>
    <Footer />
    </>:<></>
  )
}

export default page