import React from 'react'
import Header from '../Header/Header'
import MainSidebar from '../MainSidebar/MainSidebar'

import cls from './style.module.css'

export default function Layout({children}) {
  // сборщик всех частей страницы
    return (
    <div className={cls.box}>
      
      <div className={cls.sidebar} >
        <MainSidebar />
      </div>

      <div className={cls.content} >
        <Header />

        <div className={cls.content_body}>
          {children}
        </div>
      </div>

    </div>
  )
}
