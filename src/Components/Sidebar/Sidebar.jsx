import React, { useEffect, useState } from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Sidebar = ({bookmarks,readTime}) => {
    const [time,setTime] = useState(readTime);
    const [books,setBooks] = useState(bookmarks);
    
    useEffect(()=>{
        const getReadTime = localStorage.getItem("readTime");
        const getBooks = JSON.parse(localStorage.getItem("bookmark"));
        setTime(getReadTime)
        setBooks(getBooks)
    },[readTime,bookmarks])
    return (
        <div>
        <div className='text-center'>
            <h3 className='mt-3 text-2xl text-blue-600 border-blue-500 border py-3 rounded-lg font-bold'>Spent time on read : {time?time: 0}minute</h3>
        </div>
        <div className='mt-2 border rounded-lg px-3 py-2'>
            <h4 className='font-bold text-2xl'>Bookmarked Blogs: {books?books.length:0}</h4>
            {
            books?.map((book,index)=><Bookmark key={index} bookmark={book}></Bookmark>)
            }
        </div>
        </div>
    );
};

export default Sidebar;