
import {initState} from '../initState'
import { personActionTypes } from './personActionTypes'

export const personReducer = (state = initState, action) => {
    const {type, payload} = action 

    switch (type) {
        case personActionTypes.get:
            return {...state, person: {name: payload.name, surName: payload.surName, age: payload.age }}
        
        case personActionTypes.clear:
            return {...state, person: {name: '', surName: '', age: ''}}
            
        default:
            return initState;
    }
}