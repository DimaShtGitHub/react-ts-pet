import { combineReducers } from "redux";
import { personReducer } from "./personReducer"

// rootReducer он же 'state' в useSelector(state => state.****)

const rootReaducer = combineReducers({
    person: personReducer
})

export default rootReaducer