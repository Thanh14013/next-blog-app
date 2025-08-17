'use client'

import BlogTableItem from '@/Components/AdminComponent/BlogTableItem'
import React, { useEffect, useState }  from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'


const page = () => {

    const [blogs, setBlogs] = useState([])

    const fetchBlogs = async () => {
        const respond = await axios.get('/api/blog')
        setBlogs(respond.data.blogs)
    }

    const deleteBlog = async (mongoId) => {
      const respond = await axios.delete(`/api/blog?id=${mongoId}`)
      toast.success(respond.data.message)
    }


    useEffect(() => {
        fetchBlogs()
    }, [])


  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1>All Blogs</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-white text-left uppercase bg-gray-500">
            <tr>
              <th scope='col' className='px-4 py-3'>
                Author Name
              </th>
              <th scope='col' className='px-4 py-3'>
                Blog Title
              </th>
              <th scope='col' className='px-4 py-3'>
                Date
              </th>
              <th scope='col' className='px-4 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <BlogTableItem key={index} author_image={blog.author_image} title={blog.title} author={blog.author} date={blog.date} mongoId={blog._id} deleteBlog={deleteBlog} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page