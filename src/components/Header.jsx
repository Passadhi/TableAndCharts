import { Link } from 'react-router-dom'
import React from 'react'
import style from './style.module.css'


export default function Header () {
  

  return (
    <div className={style.container} >
    <div> <Link style={{ textDecoration: 'none', color: 'blue' }} to={"/"}>Table</Link> </div>
    <div> <Link style={{ textDecoration: 'none', color: 'blue' }} to={"/chartVolume"}>Chart volume</Link> </div>
    <div> <Link style={{ textDecoration: 'none', color: 'blue' }} to={"/chartPrice"}>Chart price</Link> </div>
    </div>
  )
}



