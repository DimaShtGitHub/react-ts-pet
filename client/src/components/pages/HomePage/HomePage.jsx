import React from 'react'
import Home from '../../containers/Home/Home'
import Layout from '../../sections/Layout/Layout'

import cls from './style.modules.css'

export default function HomePage() {
  return (
    <div className={cls.container}>
        <Layout >
          <Home />
        </Layout>
    </div>
  )
}
