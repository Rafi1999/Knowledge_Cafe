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
    const [bookmarks,setBookmarks] = useState([])
    const handleSideBar= (book)=>
    {
      const newBook = [...bookmarks,book];
      setBookmarks(newBook);
    }
    const [readTime,setReadTime] = useState(0)
    const handleRead = (r) =>{
        setReadTime(readTime+r);
    }
    return (
        <div className='flex gap-3'>
        <div className='w-9/12'>
           {
            blogs.map(blog=><Single key={blog.id} blog={blog} handleRead={handleRead} handleSideBar={handleSideBar}></Single>)
           }
        </div>
        <div className='w-2/5'>
        <Sidebar readTime={readTime} bookmarks={bookmarks}></Sidebar>
        </div>
        </div>
    );
};

export default Blogs;
