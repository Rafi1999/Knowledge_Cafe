import React from 'react';
import Blogs from './Components/Blogs/Blogs';
import Header from './Components/Header/Header';

const App = () => {
  return (
    <div className=' m-10'>
        <Header></Header>
        <Blogs></Blogs>
    </div>
  );
};

export default App;