import React, {useState} from 'react';
import s from './App.module.css';
import Counter from "./Counter";
import Button from "./Button";
import Inputer from "./Inputer";

function App() {

    let countM = 6;
    let countS = 0;
    let countC = 0;

    let [StartCallback, setStartCallback] = useState<number>(countS);
    let [MaxCallback, setMaxCallback] = useState<number>(countM);
    let [countStart, setCountStart] = useState<number>(countS);
    let [countMax, setCountMax] = useState<number>(countM);
    let [countCurrent, setCountCurrent] = useState<number>(countC);

    const CountStartCallback = (vals: number) => {
        setStartCallback(vals)
    }

    const CountMaxCallback = (valm: number) => {
        setMaxCallback(valm)
    }

    const setCountAll = () => {
        setCountStart(StartCallback)
        setCountMax(MaxCallback)
        if (countCurrent < StartCallback || countCurrent > MaxCallback) {
            setCountCurrent(StartCallback)
        }

    }

    const addCount = () => {
        if (countCurrent < countMax) {
            let newCount = countCurrent + 1;
            setCountCurrent(newCount);
        }
    }

    const reset = () => {
        let newCount = countStart;
        setCountCurrent(newCount);
    }

    return (
        <body className={s.App}>
            <div className={s.Main}>
                <Inputer countS={countStart}
                         countM={countMax}
                         CountStartCallback={CountStartCallback}
                         CountMaxCallback={CountMaxCallback}/>

                <Button name={'SET'}
                        callback={setCountAll}
                        countCurrent={countCurrent}
                        countStart={countStart}
                        countMax={countMax}/>
            </div>
            <div className={s.Main}>
                <Counter countCurrent={countCurrent}
                         countMax={countMax}/>

                <Button name={'ADD'}
                        callback={addCount}
                        countCurrent={countCurrent}
                        countStart={countStart}
                        countMax={countMax}/>

                <Button name={'RESET'}
                        callback={reset}
                        countCurrent={countCurrent}
                        countStart={countStart}
                        countMax={countMax}/>
            </div>
        </body>
    );
}

export default App;
