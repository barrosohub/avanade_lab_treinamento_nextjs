'use client'; // use client is a new feature in NextJS. Represents that this file is a client-side file.

import { useState } from 'react';

/**
 * A button component that displays a message and changes it when clicked.
 * @returns {JSX.Element} The JSX element representing the button component.
 */
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