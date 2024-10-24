import React, { useState } from 'react';

const StateFrom = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitBtn = (e) => {
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(password)
    }

    const setPass = (e) => {
        setPassword(e.target.value)
    }


    return (
        <div className='mt-4'>
            <form onSubmit={submitBtn}>
                <input
                    onChange={(e) => setName(e.target.value)}
                    className='border-2 text-xl p-2 w-96' type="text" name="name" placeholder='Your Name' />
                <br />
                <br />
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    className='border-2 text-xl p-2 w-96' type="email" name="email" placeholder='Email' />
                <br />
                <br />
                <input
                    onChange={setPass}
                    className='border-2 text-xl p-2 w-96' type="password" name="password" placeholder='Password' />
                <br />
                <br />
                <input className='rounded-lg text-xl p-2 bg-red-500' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StateFrom;