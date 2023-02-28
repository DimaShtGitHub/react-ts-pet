import React from 'react'
import { useForm } from 'react-hook-form'

export default function RegForm() {
    const { 
        register, 
        handleSubmit, 
        watch, 
        formState: { errors } 
    } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch('example'));
    // const handleSubmit = (data) => {
    //     console.log(data)
    // }

  return (
            //className={} onClick={} onChange={}
    <div>
        RegForm

        <form onSubmit={handleSubmit(onSubmit)}>
            
            {/* <input type={'text'} name={'name'} />
            <input type={'email'} name={'email'} />
            <input type={'password'} name={'password'}/>

            <button type="submit">registration</button> */}

            <input defaultValue={'test'} {...register('example')}/>

            <input {...register('exampleRequired')} />
            {errors.exmpleRequired && <span>This field is required</span>}
            <input type={'submit'} />

        </form>
    </div>
  )
}
