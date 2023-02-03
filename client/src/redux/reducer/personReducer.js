
import {initState} from '../initState'

export const personReducer = (state = initState, action) => {
    const {type, payload} = action 

    switch (type) {
        case 'USER_TYPING':
            return {...state, person: {name: payload.name, surName: payload.surName, age: payload.age }}
    
        default:
            return initState;
    }
}