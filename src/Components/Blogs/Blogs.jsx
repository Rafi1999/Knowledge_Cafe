import React, { useEffect, useState } from 'react';
import Single from '../Single/Single';
import Sidebar from '../Sidebar/Sidebar';
import { ToastContainer, toast } from 'react-toastify';


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
      const previousBook = localStorage.getItem("bookmark");
      if(previousBook){
        const getBooks = JSON.parse(localStorage.getItem("bookmark"));
        const a = getBooks?.filter(b=> b==book)
        if(a[0]){
            toast("You have already bookmarked this")
        }
        const newlydone = [...getBooks,book]
        localStorage.setItem("bookmark",JSON.stringify(newlydone))
        setBookmarks(newlydone);
      }
      else{
        localStorage.setItem("bookmark",JSON.stringify(newBook))
        setBookmarks(newBook);
      }
    }
    const [readTime,setReadTime] = useState(0);
    const handleRead = (time) =>{
        const previousTime = JSON.parse(localStorage.getItem("readTime"));
        if(previousTime){
            const sum = previousTime + time;
            localStorage.setItem("readTime",sum)
            setReadTime(sum)
        }
        else{
            localStorage.setItem("readTime",time)
            setReadTime(time)
        }
    }
    return (
        <div className='flex flex-col md:flex-row gap-3'>
        <div className='w-fit md:w-9/12'>
           {
            blogs.map(blog=><Single key={blog.id} blog={blog} handleRead={handleRead} handleSideBar={handleSideBar}></Single>)
           }
        </div>
        <div className='w-auto md:w-2/5'>
        <Sidebar readTime={readTime} bookmarks={bookmarks}></Sidebar>
        </div>
        </div>
    );
};

export default Blogs;
