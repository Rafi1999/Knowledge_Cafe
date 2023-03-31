import React from 'react';

const Bookmark = ({bookmark}) => {
    
    return (
        <div>
            <p className='border rounded-lg px-2 font-medium py-3 mt-2 bg-white'>{bookmark}</p>
            </div>
    );
};

export default Bookmark;