'use client';

import { useState } from 'react';

export default function Button() {
    const [msg, setMsg] = useState("Hello!");

    const handleMsg = () => {
      setMsg("Hello, NextJS! - Clicked");
    }

    return(
        <>
            <p className="text-orange-700 font-bold">{msg}</p>
            <button onClick={handleMsg} className='hover:opacity-90 p-2 rounded-md bg-emerald-900 text-white'>Click me!</button>
        </>
    )
}