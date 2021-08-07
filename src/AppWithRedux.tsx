import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import Counter from "./Counter";
import Button from "./Button";
import Inputer from "./Inputer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./store/store";
import {
    getCountAll,
    initialStateType,
    setCountMax,
    setCountStart,
    setCountAll,
    addCount, resetCount, switcher
} from './store/counter-reducer';


function AppWithRedux() {

    const count = useSelector<AppStateType, initialStateType>(state => state.counter)
    const dispatch = useDispatch()


/*
    useEffect(() => {
        const action = getCountAll()
        dispatch(action)
    }, [])
*/


    const setCountStartFunc = (vals: number) => {
        const action = setCountStart(vals)
        dispatch(action)
    }

    const setCountMaxFunc = (valm: number) => {
        const action = setCountMax(valm)
        dispatch(action)
    }

    const setCountAllFunc = () => {
        const action = setCountAll()
        dispatch(action)
    }

    const addCountFunc = () => {
        const action = addCount()
        dispatch(action)
    }

    const resetCountFunc = () => {
        const action = resetCount()
        dispatch(action)
    }

    const switcherFunc = () => {
        const action = switcher()
        dispatch(action)
    }


    let switchContainer =
        <div className={s.MainTwo}>
            <Counter countCurrent={count.countCurrent}
                     countMax={count.countMax}/>

            <Button name={'ADD'}
                    callback={addCountFunc}
                    countCurrent={count.countCurrent}
                    countStart={count.countStart}
                    countMax={count.countMax}/>

            <Button name={'RESET'}
                    callback={resetCountFunc}
                    countCurrent={count.countCurrent}
                    countStart={count.countStart}
                    countMax={count.countMax}/>

            <Button name={'SETTINGS'}
                    callback={switcherFunc}
                    countCurrent={count.countCurrent}
                    countStart={count.countStart}
                    countMax={count.countMax}/>

        </div>

    if (!count.switcher) {
        switchContainer =
            <div className={s.MainTwo}>
                <Inputer StartCallback={count.StartCallback}
                         MaxCallback={count.MaxCallback}
                         CountStartCallback={setCountStartFunc}
                         CountMaxCallback={setCountMaxFunc}/>

                <Button name={'SET'}
                        callback={setCountAllFunc}
                        countCurrent={count.countCurrent}
                        countStart={count.countStart}
                        countMax={count.countMax}/>

                <Button name={'COUNTER'}
                        callback={switcherFunc}
                        countCurrent={count.countCurrent}
                        countStart={count.countStart}
                        countMax={count.countMax}/>
            </div>
    }


    return (
        <body className={s.App}>

        <div className={s.Main}>
            <Inputer StartCallback={count.StartCallback}
                     MaxCallback={count.MaxCallback}
                     CountStartCallback={setCountStartFunc}
                     CountMaxCallback={setCountMaxFunc}/>

            <Button name={'SET'}
                    callback={setCountAllFunc}
                    countCurrent={count.countCurrent}
                    countStart={count.countStart}
                    countMax={count.countMax}/>
        </div>

        <div className={s.Main}>
            <Counter countCurrent={count.countCurrent}
                     countMax={count.countMax}/>

            <Button name={'ADD'}
                    callback={addCountFunc}
                    countCurrent={count.countCurrent}
                    countStart={count.countStart}
                    countMax={count.countMax}/>

            <Button name={'RESET'}
                    callback={resetCountFunc}
                    countCurrent={count.countCurrent}
                    countStart={count.countStart}
                    countMax={count.countMax}/>
        </div>


        <hr/>

        {switchContainer}

        </body>
    );
}

export default AppWithRedux;
