import createAction from "../createAction"
import { personActionTypes } from "./personActionTypes"
import { dispatch } from "../store"

export const edit = (data) => {
    // return {type: 'USER_TYPING', payload: {name: data[0].value, surName: data[1].value, age: data[2].value}}
    return dispatch(createAction(personActionTypes.get, {name: data[0].value, surName: data[1].value, age: data[2].value}))
}

export const clear = () => {
    return dispatch(createAction(personActionTypes.clear))
}