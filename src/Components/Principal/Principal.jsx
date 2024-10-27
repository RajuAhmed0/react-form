import React, { createContext } from 'react';
import CommTeacher from '../CommTeacher/CommTeacher';
import SciTeacher from '../SciTeacher/SciTeacher';
import MathTeacher from '../MathTeacher/MathTeacher';
export const Context = createContext()

const Principal = () => {
    const gift = 'Gold-Trophy'
    const gift2 = 'Silver-Trophy'
    const gift3 = 'Meddel'
    return (
       <Context.Provider value={{gift, gift2, gift3}}>
         <div className='border border-purple-500'>
            <h1 className='text-2xl font-bold p-6'>Principal</h1>
            <div className='flex gap-6 m-5'>
                <CommTeacher ></CommTeacher>
                <MathTeacher></MathTeacher>
                <SciTeacher give={gift3}></SciTeacher>

            </div>
        </div>
       </Context.Provider>
    );
};

export default Principal;