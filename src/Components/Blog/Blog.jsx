import React from 'react';

const Blog = () => {
    return (
        <div className='mt-10 bg-gray-400'>
        <h4 className='text-2xl  md:text-3xl font-bold text-center underline'>Answer To The Questions</h4>
            <p className='font-medium text-xl text-red-600 my-3'>1. Props vs State</p>
            <p className='text-base md:text-xl'>Ans: Props are read-only. State changes is asynchronous. Props are immutable whereas State is mutable. Props allows to pass data from one component to another on the other hand State holds the information of the Components.</p>
            <p className='font-medium text-xl text-red-600 my-3'>2. How does useState work?</p>
            <p className='text-base md:text-xl'>Ans: useState is a React hook. It allows to add state to a functional component. It returns array with two values.</p>
            <p className='font-medium text-xl text-red-600 my-3'>3. What is the purpose of useEffect other than fetching data?</p>
            <p className='text-base md:text-xl'>Ans: useEffect is a React hook. Other than fetching data it can be used for setting up and cleaning event listeners, updating the component value</p>
            <p className='font-medium text-xl text-red-600 my-3'>4. How Does React work?</p>
            <p className='text-base md:text-xl'>Ans: React works by allowing to create reusable components that can be rendered on a web page. React uses a virtual DOM to keep track of changes made in the web page. React doesn't re-render the whole page instead updates the parts of the actual DOM that have been changed.</p>
        </div>
    );
};

export default Blog;