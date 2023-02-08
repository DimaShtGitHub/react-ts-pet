import React from 'react'

import { Link, useNavigate, useLocation} from 'react-router-dom'
import cls from './style.module.css'
import {getKey} from '../../../helpers/randomId'


export default function VerticalNav() {
  const navigate = useNavigate()



  return (
    <div className={cls.container}>

      <button onClick={() => navigate(-1)}>click me, get history state</button>

      {/* <Link  className={cls.element} key={getKey()} to={'/form'}>Forma</Link> */}

      <Link  className={cls.element} key={getKey()} to={'/main'}>Main</Link>

      <Link  className={cls.element} key={getKey()} to={'/'}>Home</Link>

      <Link  className={cls.element} key={getKey()} to={'/reg'}>Registration</Link>

      
    </div>
  )
}
