import { initState } from './initState'
import rootReaducer from './rootReducer'
import thunk from 'redux-thunk'

import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'


export const store = createStore(
    rootReaducer, 
    initState, 
    composeWithDevTools(applyMiddleware(thunk)))

export const dispatch = store.dispatch