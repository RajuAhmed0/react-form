import React from 'react';
import Bag from '../Bag/Bag';

const MathStd = ({mathStd}) => {
    return (
        <div className='border border-purple-500 w-full'>
            <h1 className='text-xl font-bold p-3'>CommStd {mathStd}</h1>
        
            {mathStd === "- 3" &&
                <div className='flex gap-2 m-6'>
                    <Bag bagNum={"5"}></Bag>
                    <Bag bagNum={"6"}></Bag>
                </div>
            }
            {mathStd === "- 4" &&
                <div className='flex gap-2 m-6'>
                    <Bag bagNum={"7"}></Bag>
                    <Bag bagNum={"8"}></Bag>
                </div>
            }

        </div>
    );
};

export default MathStd;