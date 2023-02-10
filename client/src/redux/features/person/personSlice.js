import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: 'alex', 
    surname: 'lev', 
    age: '36'
}

const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        get: (state) => {
            return state
        },
        edit: (state, action) => {
            return {...state, ...action.payload}
        },
        clear: (state) => {
            return {...state, name: '', surname: '', age: ''}
        }
    }
})

export const {get, clear, edit} = personSlice.actions

export default personSlice.reducer