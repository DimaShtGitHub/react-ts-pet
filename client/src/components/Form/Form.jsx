import { useSelector, useDispatch } from "react-redux"
import cls from './Form.module.css'

const Form = () => {
    const person = useSelector(state => state.person)
    const dispatch = useDispatch()
    
    const editPerson = () => {
        dispatch({type: 'USER_TYPING', payload: {name: '', surName: '', age: ''}})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        let input = e.target
        dispatch({type: 'USER_TYPING', payload: {name: input[0].value, surName: input[1].value, age: input[2].value}})
    }

    return (
        <>
            <div className={cls.blank}>

                <h1>Form</h1>

                <p>Name: {person.person.name}</p>
                <p>SurName: {person.person.surName}</p>
                <p>Age: {person.person.age}</p>

                <div onClick={editPerson} className={cls.blank_button}>clear form</div>
            </div>

            <div className={cls.blank}>
                <form onSubmit={submitHandler}>
                    <input 
                        placeholder={'name'}
                    />

                    <input
                        placeholder={'sur-name'}
                    />
                    <input
                        placeholder={'age'}
                    />
                    <button> send</button>
                </form>
            </div>
        </>
    )
}

export default Form