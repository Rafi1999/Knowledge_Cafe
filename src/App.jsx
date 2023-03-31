import React from 'react';
import Blogs from './Components/Blogs/Blogs';
import Header from './Components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from './Components/Blog/Blog';

const App = () => {
  return (
    <div className=' my-5 mx-5 lg:mx-28'>
        <Header ></Header>
        <Blogs></Blogs>
        <Blog></Blog>
        <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;