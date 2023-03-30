import React from 'react';

const Header = () => {
    return (
        <div>
           <nav className='flex justify-between'>
            <h3  className='text-4xl font-bold'>Knowledge Cafe</h3>
            <div className='flex flex-row gap-3 text-2xl'>
            <a href="/Shop">Blog</a><a href="/Order">About</a><a href="/Login">Login</a>
            </div>
            
        </nav> 
        </div>
        
    );
};

export default Header;