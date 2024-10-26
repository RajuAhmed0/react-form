import React from 'react';
import MathStd from '../MathStd/MathStd';

const MathTeacher = () => {
    return (
        <div className='border border-purple-500 w-full p-2'>
            <h1 className='text-2xl font-bold p-6'>MathTeacher</h1>
            <div className='flex gap-2'>
                <MathStd mathStd={'- 3'}></MathStd>
                <MathStd mathStd={'- 4'}></MathStd>
            </div>
        </div>
    );
};

export default MathTeacher;