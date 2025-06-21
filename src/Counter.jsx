import { useState } from 'react';
import './Counter.css';

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className="counter-container">
            <div className="button-row">
                <button onClick={() => setCount(count - 1)}>
                    Click me for -
                </button>
                <button onClick={() => setCount(count + 1)}>
                    Click me for +
                </button>
                <button onClick={() => setCount(0)}>
                    Click me to clear
                </button>
            </div>
            <p className="counter-text">You clicked {count} time</p>
        </div>
    );
}