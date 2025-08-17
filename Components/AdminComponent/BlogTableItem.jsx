import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const BlogTableItem = ({author_image,title,author,date,mongoId,deleteBlog}) => {

    const blogDate = new Date(date)

  return (
    <tr className='bg-white border-b'>
        <th scope='row' className='flex items-center gap-3 px-4 py-4 font-medium text-gray-900 whitespace-nowrap'>
          <Image src={author_image?author_image:assets.profile_icon} alt='Author' width={40} height={40} className="rounded-full" />
          <p>{author?author:'Unknown Author'}</p>
        </th>
        <td className='px-4 py-4'>
          {title?title:'No Title'}
        </td>
        <td className='px-4 py-4'>
          {blogDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </td>
        <td onClick={() => (deleteBlog(mongoId))} className='px-4 py-4 cursor-pointer'>
          x
        </td>
    </tr>
  )
}

export default BlogTableItem