import React from 'react'
import cls from './mainSide.module.css'

import VerticalNav from '../VerticalNav/VerticalNav'


// этот компонент позволит нам создать логотип над панелью со ссылками
function MainSidebar() {
  

  return (
    <div className={cls.container}>
  
      <VerticalNav />
    </div>
  )
}

export default MainSidebar