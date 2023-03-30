import React from 'react';

const Single = (props) => {
    const {author_name,blog_title,cover_img,author_img,publish_date,read_time} = props.blog;
    return (
        <div className='my-2'>
            <div className="card w-3/5 h-1/2 bg-base-100 shadow-xl">
  <figure><img className='container h-full' src={cover_img} alt="Shoes" /></figure>
  <div className="card-body">
  <div className='flex justify-between'>
  <div className='flex gap-3'>
  <img className='rounded-full w-14 object-cover' src={author_img} alt="" />
    <div className='grid'><h2 className="card-title">{author_name}</h2><p>{publish_date}</p></div></div>
    <div>
    <p>0<span>{read_time}</span> min read</p>
    </div>
    </div>
    <p className='text-4xl font-bold'>{blog_title}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Single;