import React, { useEffect, useState } from 'react';
import Blog from '../Blog/blog';


const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div>
            {
                blogs.map(blog => <Blog data={blog} key={blog.id}></Blog>)
            }
        </div>
    );
};

export default Blogs;
