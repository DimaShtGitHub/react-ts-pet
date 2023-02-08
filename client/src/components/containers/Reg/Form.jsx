import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { edit, clear } from "../../../redux/main/personActions"

import cls from './Form.module.css'

const Form = () => {
    const personContent = useSelector(state => state.person)
    const dispatch = useDispatch()
    
    const editPerson = () => {
        dispatch(clear())
    }

    const submitHandler = (e) => {
        e.preventDefault()
        
        dispatch(edit(e.target))
    }

    return (
        <>
            <div className={cls.blank}>

                <h1>Form</h1>

                <p>Name: {personContent.person.name}</p>
                <p>SurName: {personContent.person.surName}</p>
                <p>Age: {personContent.person.age}</p>

                <div onClick={editPerson} className={cls.blank_button}>clear form</div>
            </div>

            <div className={cls.blank}>
                <form onSubmit={submitHandler}>
                    <input 
                        name={'name'}
                        placeholder={'name'}
                    />

                    <input
                        name={'sur-name'}
                        placeholder={'sur-name'}
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