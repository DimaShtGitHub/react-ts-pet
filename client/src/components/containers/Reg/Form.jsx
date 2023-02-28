import React from 'react'
import { useSelector, useDispatch } from "react-redux"
// import { edit, clear } from "../../../redux/main/personActions"
import {edit, clear} from '../../../redux/features/person/personSlice'

import cls from './Form.module.css'

const Form = () => {
    const personContent = useSelector(state => state.person)
    const dispatch = useDispatch()
    
    const clearPerson = () => {
        dispatch(clear())
    }

    const submitHandler = (e) => {
        e.preventDefault()
        
        const packingInputs = (e) => {
            const obj = {
                [e.target[0].name]: e.target[0].value,
                [e.target[1].name]: e.target[1].value,
                [e.target[2].name]: e.target[2].value
            }

            console.log(obj);
            return obj
        }

        packingInputs(e)

        

        dispatch(edit(packingInputs(e)))
    }

    return (
        <>
            <div className={cls.blank}>

                <h1>Form</h1>

                <p>Name: {personContent.name}</p>
                <p>SurName: {personContent.surname}</p>
                <p>Age: {personContent.age}</p>

                <div onClick={clearPerson} className={cls.blank_button}>clear form</div>
            </div>

            <div className={cls.blank}>
                <form onSubmit={submitHandler}>
                    <input 
                        name={'name'}
                        placeholder={'name'}
                    />

                    <input
                        name={'surname'}
                        placeholder={'surname'}
                    />
                    <input
                        name={'age'}
                        placeholder={'age'}
                    />
                    <button> send</button>
                </form>
            </div>
        </>
    )
}

export default Form