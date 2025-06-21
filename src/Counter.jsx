import { useState } from 'react';
import './Counter.css';
export default function Counter(){
    const [count,setCount]=useState(0)
    return(<>
    <div>
        <center>
         <button onClick={() => setCount(count - 1)}>
            Click me for -
        </button>
        </center>
    <center>
        <button onClick={() => setCount(count + 1)}>
            Click me for + 
        </button>
    </center>
    <center>
         <button onClick={() => setCount(0)}>
            Click me to clear
        </button>
        </center>
        
    </div>
        <center>
        <p>You clicked {count} time
        </p>
        </center>
    </>);
}