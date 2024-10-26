import React from 'react';
import CommTeacher from '../CommTeacher/CommTeacher';
import SciTeacher from '../SciTeacher/SciTeacher';
import MathTeacher from '../MathTeacher/MathTeacher';

const Principal = () => {
    return (
        <div className='border border-purple-500'>
            <h1 className='text-2xl font-bold p-6'>Principal</h1>
            <div className='flex gap-6 m-5'>
                <CommTeacher></CommTeacher>
                <MathTeacher></MathTeacher>
                <SciTeacher></SciTeacher>

            </div>
        </div>
    );
};

export default Principal;