'use client'

import { assets } from '@/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {

  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    title: '',
    description: '',
    category: 'Startup',
    author: 'Alex Bennett',
    author_img: '/author_img.png'
  })

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((data) => ({ ...data, [name]: value }));
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('author', data.author);
    formData.append('author-img', data.author_img);
    formData.append('image', image);
    const respond = await axios.post('/api/blog', formData);
    console.log(respond.data);
    if (respond.data.success) {
      toast.success('Blog added successfully!');
    }
    else{
      toast.error('Something went wrong, please try again later.');
    }
  }

  return (
    <>
      <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <p className="text-xl">Upload Thumbnail</p>
        <label htmlFor="image">
          <Image src={!image ? assets.upload_area : URL.createObjectURL(image)} alt='' width={140} height={70} />
        </label>
        <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
        <p className="text-xl mt-4">Blog Title</p>
        <input name='title' value={data.title} onChange={onChangeHandler} type="text" placeholder='Type here' className='w-full sm:w-[500px] mt-4 px-4 py-3 border ' />
        <p className="text-xl mt-4">Blog Description</p>
        <textarea name='description' value={data.description} onChange={onChangeHandler} placeholder='write content here' rows={6} className='w-full sm:w-[500px] mt-4 px-4 py-3 border ' />
        <p className="text-xl mt-4">Blog Tag</p>
        <select name="category" value={data.category} onChange={onChangeHandler} className='w-40 mt-4 px-4 py-3 border text-gray-500'>
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button type='submit' className="mt-8 w-40 h-12 bg-black text-white">ADD</button>
      </form>
    </>
  )
}

export default page