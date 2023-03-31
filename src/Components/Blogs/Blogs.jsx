import React, { useEffect, useState } from 'react';
import Single from '../Single/Single';
import Sidebar from '../Sidebar/Sidebar';



const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className='flex gap-3'>
        <div className='w-9/12'>
           {
            blogs.map(blog=><Single key={blog.id} blog={blog}></Single>)
           }
        </div>
        <div className='w-2/5'>
        <Sidebar></Sidebar>
        </div>
        </div>
    );
};

export default Blogs;
