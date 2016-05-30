
import React from 'react'
import style from './style.css'

function Box({ site, links }) {
  return (
    <div className={style.box}>
      <div className={style.site}>{site}</div>  
      { links.map( link => <a className={style.link} href={link.url}> {link.title} </a> ) }
    </div>
  )
}

export default Box
