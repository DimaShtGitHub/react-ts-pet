import { initState } from './initState'
import rootReaducer from './reducer/rootReducer'

import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'


export const store = createStore(rootReaducer, initState, composeWithDevTools(applyMiddleware()))