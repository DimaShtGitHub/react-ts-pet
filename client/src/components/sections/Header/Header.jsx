import React from 'react'
import cls from './style.module.css'

export default function Header() {
  return (
    <div className={cls.container}>
      <div className={cls.logo}>
        React-Ts-Pet
      </div>
    </div>
  )
}
