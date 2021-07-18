import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import Counter from "./Counter";
import Button from "./Button";
import Inputer from "./Inputer";

function App() {

    const countS = 0;
    const countM = 8;
    const countC = 0;
    const sw = true;

    let [countStart, setCountStart] = useState<number>(countS);
    let [countMax, setCountMax] = useState<number>(countM);
    let [countCurrent, setCountCurrent] = useState<number>(countC);

    let [StartCallback, setStartCallback] = useState<number>(countS);
    let [MaxCallback, setMaxCallback] = useState<number>(countM);

    let [switcher, setSwitcher] = useState<boolean>(sw);

    useEffect(() => {
            let stringValueCountStart = localStorage.getItem('countStart')
            if (stringValueCountStart) {
                let numberValueCountStart = JSON.parse(stringValueCountStart)
                setCountStart(numberValueCountStart)
                setStartCallback(numberValueCountStart)
            }

            let stringValueCountMax = localStorage.getItem('countMax')
            if (stringValueCountMax) {
                let numberValueCountMax = JSON.parse(stringValueCountMax)
                setCountMax(numberValueCountMax)
                setMaxCallback(numberValueCountMax)
            }
        }, []
    )

    const CountStartCallback = (vals: number) => {
        setStartCallback(vals)
    }

    const CountMaxCallback = (valm: number) => {
        setMaxCallback(valm)
    }

    //выставляем данные в основном стейте
    const setCountAll = () => {
        setCountStart(StartCallback)
        setCountMax(MaxCallback)
        if (countCurrent < StartCallback || countCurrent > MaxCallback) {
            setCountCurrent(StartCallback)
        }

        //созранеям в локал стораж
        localStorage.setItem('countStart', JSON.stringify(StartCallback))
        localStorage.setItem('countMax', JSON.stringify(MaxCallback))
    }

    const addCount = () => {
        if (countCurrent < countMax) {
            let newCount = countCurrent + 1;
            setCountCurrent(newCount);
        }
    }

    const reset = () => {
        setCountCurrent(countStart);
    }

    const switcherFunc = () => {
        setSwitcher(!switcher)
    }

    let switchContainer =
        <div className={s.MainTwo}>
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

            <Button name={'SETTINGS'}
                    callback={switcherFunc}
                    countCurrent={countCurrent}
                    countStart={countStart}
                    countMax={countMax}/>

        </div>
    if (!switcher) {
        switchContainer =
            <div className={s.MainTwo}>
                <Inputer StartCallback={StartCallback}
                         MaxCallback={MaxCallback}
                         CountStartCallback={CountStartCallback}
                         CountMaxCallback={CountMaxCallback}/>

                <Button name={'SET'}
                        callback={setCountAll}
                        countCurrent={countCurrent}
                        countStart={countStart}
                        countMax={countMax}/>

                <Button name={'COUNTER'}
                        callback={switcherFunc}
                        countCurrent={countCurrent}
                        countStart={countStart}
                        countMax={countMax}/>
            </div>
    }


    return (
        <body className={s.App}>

        <div className={s.Main}>
            <Inputer StartCallback={StartCallback}
                     MaxCallback={MaxCallback}
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


        <hr/>

        {switchContainer}

        </body>
    );
}

export default App;
