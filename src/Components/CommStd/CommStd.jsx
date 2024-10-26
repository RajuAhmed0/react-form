import React from 'react';
import Bag from '../Bag/Bag';

const CommStd = ({ commStd }) => {
    return (
        <div className='border border-purple-500 w-full'>
            <h1 className='text-xl font-bold p-3'>CommStd {commStd}</h1>
        
            {commStd === "- 1" &&
                <div className='flex gap-2 m-6'>
                    <Bag bagNum={"1"}></Bag>
                    <Bag bagNum={"2"}></Bag>
                </div>
            }
            {commStd === "- 2" &&
                <div className='flex gap-2 m-6'>
                    <Bag bagNum={"3"}></Bag>
                    <Bag bagNum={"4"}></Bag>
                </div>
            }

        </div>
    );
};

export default CommStd;