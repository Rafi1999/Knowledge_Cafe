import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Single = (props) => {
    const {author_name,blog_title,cover_img,author_img,publish_date,read_time} = props.blog;
    return (
        <div className='mt-3'>
            <div className="card bg-base-100 shadow-xl">
  <figure><img className='container h-full' src={cover_img} alt="Shoes" /></figure>
  <div className="card-body">
  <div className='flex justify-between'>
  <div className='flex gap-3'>
  <img className='rounded-full w-14 object-cover' src={author_img} alt="" />
    <div className='grid'><h2 className="card-title">{author_name}</h2><p>{publish_date}</p></div></div>
    <div>
    <div className='flex gap-2'>
    <p>0<span>{read_time}</span> min read</p>
    <button ><FontAwesomeIcon icon={faBookmark} /></button>
    </div>
    </div>
    </div>
    <p className='text-4xl font-bold'>{blog_title}</p>
    <div className="card-actions">
      <button className="text-blue-500">Mark as read</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Single;