import React, { useContext } from 'react';
import Bag from '../Bag/Bag';
import { Context } from '../Principal/Principal';

const SciStd = ({ sciStd, give}) => {
    return (
        <div className='border border-purple-500 w-full'>
            <h1 className='text-xl font-bold p-3'>SciStd {sciStd}</h1>

            {sciStd === "- 5" &&
                <div className='flex gap-2 m-6'>
                    <Bag bagNum={"9"}></Bag>
                    <Bag bagNum={"10"}></Bag>
                </div>
            }
            {sciStd === "- 6" &&
                <div className='flex gap-2 m-6'>
                    <Bag bagNum={"11"} givd={give}></Bag>
                    <Bag bagNum={"12"}></Bag>
                </div>
            }
             </div>
    );
};

export default SciStd;