import { useState } from 'react';
import './Counter.css';


export default function Counter() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("type here");
    function onTextChange(event) {
        console.log("This function is called:"+event.target.value);
        console.error("This is error");
        setValue(event.target.value);

    }

    return (
        <>
        <center>
        <input className = 'Text-box'value={value} onChange={(event)=>onTextChange(event)}/>
        <p className='first-input' >U type {value.length} character</p>
        <p >{value} Clecius to {value*1.8+32} Fahrenheit</p>
        <p>{value} kilometers to {value*0.62137119} miles</p>
        <p>{value} kilobyte to {value*1024} byte</p>
        <p>{value} mb to {value*1048576} byte</p>
        <p>{value} baht {value*4.46} yen </p>
        </center>
        <hr className='hr1-style'/>
        <div className="counter-container">
            <div className="button-row">
                <button  className="Borders" onClick={() => setCount(count - 1)}>
                    Click me for -
                </button>
                <button className="Borders" onClick={() => setCount(count + 1)}>
                    Click me for +
                </button>
                <button className="Borders" onClick={() => setCount(0)}>
                    Click me to clear
                </button>
            </div>
            <p className="counter-text" >You clicked {count} time</p>
        </div>
        </>
    );
}