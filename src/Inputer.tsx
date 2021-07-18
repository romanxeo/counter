import React, {ChangeEvent, useState} from 'react';
import s from './App.module.css';

type PropsType = {
    StartCallback: number
    MaxCallback: number
    CountStartCallback: (val: number) => void
    CountMaxCallback: (val: number) => void
}

function Inputer(props: PropsType) {

    const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        props.CountStartCallback(e.currentTarget.valueAsNumber)
    }

    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        props.CountMaxCallback(e.currentTarget.valueAsNumber)
    }

    return (
        <div>
            <div className = {s.Texter}>
                <span >Start value</span> <input type='number' value={props.StartCallback} min={0} max={props.MaxCallback-1} onChange={onChangeHandlerStart}/>
            </div>
            <div className = {s.Texter}>
                <span >Max value</span> <input type='number' value={props.MaxCallback} min={props.StartCallback+1} max={100} onChange={onChangeHandlerMax}/>
            </div>
        </div>
    );
}

export default Inputer;
