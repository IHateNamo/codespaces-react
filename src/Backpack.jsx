import './Backpack.css';
import { useState } from 'react';

function Item({ name }) {
    const [pack, setPack] = useState(0);

    function RandomDice() {
        let num = Math.round(Math.random() * 6) + 1;
        setPack(num);
    }

    if (pack % 4 == 0)
        return (<li onClick={RandomDice}>{name}⚀</li>);
    if (pack % 4 == 1)
        return (<li onClick={RandomDice}>{name}⚁</li>);
    if (pack % 4 == 2)
        return (<li onClick={RandomDice}>{name}⚂</li>);
    if (pack % 4 == 3)
        return (<li onClick={RandomDice}>{name}⚅</li>);
    if (pack % 4 == 4)
        return (<li onClick={RandomDice}>{name}⚄</li>);
    if (pack % 4 == 5)
        return (<li onClick={RandomDice}>{name}⚃</li>);
}

export default function Backpack() {
    const items = ["Sungglasses", "PowerBank", "Towel ", "Shampoo", "wallet"];
    return (<>

        <div class="container" >
            <h1 className='Tittle'>Gooner.Bet  ♣️ </h1>
        
            <ul>
                {items.map(i=><Item name={i}/>)}
            </ul>
        </div>

    </>
    );
}

