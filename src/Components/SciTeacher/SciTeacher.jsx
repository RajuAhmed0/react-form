import React from 'react';
import SciStd from '../SciStd/SciStd';

const SciTeacher = () => {
    return (
        <div className='border border-purple-500 w-full p-2'>
            <h1 className='text-2xl font-bold p-6'>SciTeacher</h1>
            <div className='flex gap-2'>
                <SciStd sciStd={'- 5'}></SciStd>
                <SciStd sciStd={'- 6'}></SciStd>
            </div>
        </div>
    );
};

export default SciTeacher;