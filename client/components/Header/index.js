
import React from 'react'
import style from './style.css'

function Header({ date, handleAddDay, handleSubtractDay }) {
  return (
    <header className={style.header}>
      <button className={style.btn} onClick={handleSubtractDay} > ⥢ </button>
      {date}
      <button className={style.btn} onClick={handleAddDay} > ⥤ </button>
    </header>
  )
}

export default Header
