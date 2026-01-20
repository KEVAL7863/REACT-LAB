import React, { useState } from "react";

export default function HookExample() {
    const [user, setUser] = useState({
        name: "Guest",
        age: 25,
        ce: true,
        city: "Rajkot"
    });
    return (
        <>
            <input
                type="number"
                placeholder="age"
                value={user.age}
                onChange={(e) => setUser({ ...user, age: e.target.value })}
            />
            <input
                type="text"
                placeholder="city"
                value={user.city}
                onChange={(e) => setUser({ ...user, city: e.target.value })}
            />
        </>
    );
}