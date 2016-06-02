
import React from 'react'
import style from './style.css'

function Header({ date, handleAddDay, handleSubtractDay }) {
  return (
    <header className={style.header}>
      <button className={style.btn} onClick={handleSubtractDay} > ⇦ </button>
      {date}
      <button className={style.btn} onClick={handleAddDay} > ⇨ </button>
      {/*<a href="https://github.com/login/oauth/authorize?client_id=ff88a96e99d104ba468a"> Setting </a>*/}
    </header>
  )
}

export default Header
