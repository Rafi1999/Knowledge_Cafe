import React from 'react';

const Sidebar = (props) => {
    const {bookmarks} = props;
    const {readTime} = props;
    bookmarks.map(bookmark=>{
        let sum = 0
        sum += bookmark.read_time
        return sum;  
    })
    console.log(bookmarks.blog_title);
    
    return (
        <div>
        <div className='text-center'>
            <h3 className='mt-3 text-2xl text-blue-600 border-blue-500 border py-3 rounded-lg font-bold'>Spent time on read : {readTime}</h3>
        </div>
        <div className='mt-2 border rounded-lg px-3 py-2'>
            <h4 className='font-bold text-2xl'>Bookmarked Blogs: {bookmarks.length}</h4>
            <p>{bookmarks.blog_title}</p>
        </div>
        </div>
    );
};

export default Sidebar;