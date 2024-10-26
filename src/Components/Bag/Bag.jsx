import React from 'react';

const Bag = ({bagNum}) => {
    return (
        <div>
            <div className='border border-orange-600 rounded-lg w-full'>
                <h1 className=' font-bold p-6'>Bag {bagNum}</h1>

            </div>
        </div>
    );
};

export default Bag;