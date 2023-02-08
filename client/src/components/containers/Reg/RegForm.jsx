import React from 'react'
import cls from './style.module.css'

export default function RegForm() {

    const handleSubmit = (data) => {
        console.log(data)
    }

  return (
            //className={} onClick={} onChange={}
    <div>
        RegForm

        <form onSubmit={handleSubmit()}>
            <input type={'text'} name={'name'} />
            <input type={'email'} name={'email'} />
            <input type={'password'} name={'password'}/>

            <button type="submit">registration</button>
        </form>
    </div>
  )
}
