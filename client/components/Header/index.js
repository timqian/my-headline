
import React from 'react'
import style from './style.css'

function Header({ date, handleAddDay, handleSubtractDay }) {
  return (
    <header className={style.header}>
      <button onClick={handleSubtractDay} > - </button>
      {date}
      <button onClick={handleAddDay} > + </button>
    </header>
  )
}

export default Header
