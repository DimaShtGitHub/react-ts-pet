import React from 'react'
import Form from '../../containers/Reg/Form'
import RegForm from '../../containers/Reg/RegForm'
import Layout from '../../sections/Layout/Layout'

import cls from './style.module.css'

export default function RegPage() {
  return (
    <div className={cls.container}>
        <Layout>
            <RegForm />
            <Form />
        </Layout>
    </div>
  )
}
