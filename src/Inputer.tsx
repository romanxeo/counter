import React, {ChangeEvent, useState} from 'react';
import s from './App.module.css';

type PropsType = {
    countS: number
    countM: number
    CountStartCallback: (val: number) => void
    CountMaxCallback: (val: number) => void
}

function Inputer(props: PropsType) {

    let [countStart, setCountStart] = useState<number>(props.countS);
    let [countMax, setCountMax] = useState<number>(props.countM);


    const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        setCountStart(e.currentTarget.valueAsNumber)
        props.CountStartCallback(e.currentTarget.valueAsNumber)
    }

    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        setCountMax(e.currentTarget.valueAsNumber)
        props.CountMaxCallback(e.currentTarget.valueAsNumber)
    }

    return (
        <div>
            <div className = {s.Texter}>
                <span >Start value</span> <input type='number' value={countStart} min={0} max={countMax-1} onChange={onChangeHandlerStart}/>
            </div>
            <div className = {s.Texter}>
                <span >Max value</span> <input type='number' value={countMax} min={countStart+1} max={100} onChange={onChangeHandlerMax}/>
            </div>
        </div>
    );
}

export default Inputer;
