import React, { useState } from 'react';
export default function HookExample() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Guest");
    const [checked, setChecked] = useState(true);
    return (
        <div>
            <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
            />

            <h1>count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <h1>Name: {name}</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />{" "}
        </div>
    );
}

