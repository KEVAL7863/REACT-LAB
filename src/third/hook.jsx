import react, { useState } from 'react';
export default function HookExample() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

