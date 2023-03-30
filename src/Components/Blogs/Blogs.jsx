import React, { useEffect, useState } from 'react';
import Single from '../Single/Single';



const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div>
        <div>
           {
            blogs.map(blog=><Single key={blog.id} blog={blog}></Single>)
           }
        </div>
        <div>

        </div>
        </div>
    );
};

export default Blogs;
