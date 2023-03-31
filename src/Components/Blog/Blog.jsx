import React from 'react';

const Blog = () => {
    return (
        <div className='mt-10'>
            <p>1. Props vs State</p>
            <p>Ans: Props are read-only. State changes is asynchronous. Props are immutable whereas State is mutable. Props allows to pass data from one component to another on the other hand State holds the information of the Components.</p>
            <p>2. How does useState work?</p>
            <p>Ans: useState is a React hook. It allows to add state to a functional component. It returns array with two values.</p>
            <p>3. What is the purpose of useEffect other than fetching data?</p>
            <p>Ans: useEffect is a React hook. Other than fetching data it can be used for setting up and cleaning event listeners, updating the component value</p>
            <p>4. How Does React work?</p>
            <p>Ans: React works by allowing to create reusable components that can be rendered on a web page. React uses a virtual DOM to keep track of changes made in the web page. React doesn't re-render the whole page instead updates the parts of the actual DOM that have been changed.</p>
        </div>
    );
};

export default Blog;