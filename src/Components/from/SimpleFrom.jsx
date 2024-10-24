import React from 'react';

const SimpleFrom = () => {

    const submitBtn = (e) => {
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.password.value)
    }

    return (
        <div className='mt-4'>
            <form onSubmit={submitBtn}>
                <input className='border-2 text-xl p-2 w-96' type="text" name="name" placeholder='Your Name' />
                <br />
                <br />
                <input className='border-2 text-xl p-2 w-96' type="email" name="email" placeholder='Email' />
                <br />
                <br />
                <input className='border-2 text-xl p-2 w-96' type="password" name="password" placeholder='Password' />
                <br />
                <br />
                <input className='rounded-lg text-xl p-2 bg-red-500' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleFrom;