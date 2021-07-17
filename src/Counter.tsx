import React from 'react';
import s from './App.module.css';

type PropsType = {
    countCurrent: number;
    countMax: number;
}

function Counter(props: PropsType) {
    return (
        <div className={props.countCurrent < props.countMax ? `${s.Counter}`:`${s.Counter} ${s.CounterMax}`}>{props.countCurrent}</div>
    );
}

export default Counter;
