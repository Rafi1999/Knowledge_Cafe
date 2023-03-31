import React from 'react';
import Blogs from './Components/Blogs/Blogs';
import Header from './Components/Header/Header';

const App = () => {
  return (
    <div className=' my-5 sm:mx-5 lg:mx-28'>
        <Header ></Header>
        <Blogs></Blogs>
    </div>
  );
};

export default App;