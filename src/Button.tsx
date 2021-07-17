import React from 'react';
import s from './App.module.css';

type PropsType = {
    name: string;
    callback: () => void
    countCurrent: number
    countStart: number
    countMax: number
}

function Button(props: PropsType) {

    const onClickHandler = () => {
        props.callback();
    }

    let active = false
    if (props.name === 'ADD') {
        if (props.countCurrent >= props.countMax) {
            active = true
        }
        else {
            active = false
        }
    }
    if (props.name === 'RESET') {
        if (props.countCurrent !== props.countStart) {
            active = false
        }
        else {
            active = true
        }
    }

    return (
        <button className={s.Button} disabled={active} onClick={onClickHandler}>{props.name}</button>
    );
}

export default Button;
