import { combineReducers } from "redux"
import { createStore } from "redux"
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../utils/localstorage";

const rootReducer = combineReducers({
        counter: counterReducer
})

export const store = createStore(rootReducer, loadState())

store.subscribe (() => {
    saveState({
            counter: store.getState().counter
        })
})

export type AppStateType = ReturnType<typeof rootReducer>

export type AppStoreType = typeof store

