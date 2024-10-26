import React from 'react';
import CommStd from '../CommStd/CommStd';

const CommTeacher = () => {
    return (
        <div className='border border-purple-500 w-full p-2'>
            <h1 className='text-2xl font-bold p-6'>CommTeacher</h1>
            <div className='flex gap-2'> 
            <CommStd commStd={"- 1"}></CommStd>
            <CommStd commStd={"- 2"}></CommStd>
            </div>
            

        </div>
    );
};

export default CommTeacher;