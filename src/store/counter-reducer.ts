
export type addCountAT = {
    type: 'ADD-COUNT'
}

export type resetCountAT = {
    type: 'RESET-COUNT'
}

export type switcherAT = {
    type: 'SWITCHER'
}

export type setCountStartAT = {
    type: 'SET-COUNT-START',
    vals: number
}

export type setCountMaxAT = {
    type: 'SET-COUNT-MAX',
    valm: number
}

export type setCountAllAT = {
    type: 'SET-COUNT-ALL'
}

export type getCountAllAT = {
    type: 'GET-COUNT-ALL'
}

export type initialStateType = {
    countStart: number,
    countMax: number,
    countCurrent: number,
    StartCallback: number,
    MaxCallback: number,
    switcher: boolean
}

const initialState: initialStateType = {
    countStart: 0,
    countMax: 5,
    countCurrent: 1,
    StartCallback: 0,
    MaxCallback: 5,
    switcher: true
}

export type actionsType = addCountAT
    | resetCountAT
    | switcherAT
    | setCountStartAT
    | setCountMaxAT
    | setCountAllAT
    | getCountAllAT

export const counterReducer = (state: initialStateType = initialState, action: actionsType): initialStateType => {
    switch (action.type) {
        case 'ADD-COUNT' : {
            let copyState = {...state}
            if (copyState.countCurrent < copyState.countMax) {
                copyState.countCurrent = copyState.countCurrent + 1
            }
            return copyState
        }
        case 'RESET-COUNT' : {
            return {...state, countCurrent: state.countStart}
        }
        case "SWITCHER" : {
            let copyState = {...state}
            copyState.switcher = !copyState.switcher
            return copyState
        }
        case 'SET-COUNT-START' : {
            return {...state, StartCallback: action.vals}
        }
        case 'SET-COUNT-MAX' : {
            return {...state, MaxCallback: action.valm}
        }
        case 'SET-COUNT-ALL' : {
            let copyState = {...state}
            copyState.countStart = copyState.StartCallback
            copyState.countMax = copyState.MaxCallback
            if (copyState.countCurrent < copyState.StartCallback || copyState.countCurrent > copyState.MaxCallback) {
                copyState.countCurrent = copyState.StartCallback

            }

            //созранеям в локал стораж
            localStorage.setItem('countStart', JSON.stringify(copyState.StartCallback))
            localStorage.setItem('countMax', JSON.stringify(copyState.MaxCallback))

            return copyState
        }
        case 'GET-COUNT-ALL' : {
            let copyState = {...state}
            let stringValueCountStart = localStorage.getItem('countStart')
            if (stringValueCountStart) {
                let numberValueCountStart = JSON.parse(stringValueCountStart)
                copyState.countStart = numberValueCountStart
                copyState.StartCallback = numberValueCountStart
                copyState.countCurrent = numberValueCountStart
            }

            let stringValueCountMax = localStorage.getItem('countMax')
            if (stringValueCountMax) {
                let numberValueCountMax = JSON.parse(stringValueCountMax)
                copyState.countMax = numberValueCountMax
                copyState.MaxCallback = numberValueCountMax
            }

            return copyState
        }
        default:
            return state
    }
}


export const addCount = (): addCountAT => {
    return {
        type: 'ADD-COUNT'
    }
}

export const resetCount = (): resetCountAT => {
    return {
        type: 'RESET-COUNT'
    }
}

export const switcher = (): switcherAT => {
    return {
        type: 'SWITCHER'
    }
}

export const setCountStart = (vals: number): setCountStartAT => {
    return {
        type: 'SET-COUNT-START',
        vals
    }
}

export const setCountMax = (valm: number): setCountMaxAT => {
    return {
        type: 'SET-COUNT-MAX',
        valm
    }
}

export const setCountAll = (): setCountAllAT => {
    return  {
        type: 'SET-COUNT-ALL'
    }
}

export const getCountAll = (): getCountAllAT => {
    return {
        type: 'GET-COUNT-ALL'
    }
}








