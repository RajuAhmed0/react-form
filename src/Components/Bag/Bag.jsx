import React, { useContext } from 'react';
import { Context } from '../Principal/Principal';

const Bag = ({ bagNum, give3 }) => {
    const gift = useContext(Context)
    // console.log(gift.gift);
    return (
        <div>
            <div className='border border-orange-600 rounded-lg w-full'>
                <h1 className=' font-bold p-6'>Bag {bagNum}</h1>
                {bagNum === "1" &&
                    <>{gift.gift}</>
                }
                {bagNum === "7" &&
                    <>{gift.gift2}</>
                }
                {bagNum === "11" &&
                    <>{gift.gift3}</>
                }
               

            </div>
        </div>
    );
};

export default Bag;