
import React from 'react'
import style from './style.css'
import {siteColor} from '../../config'

function Box({ site, links }) {
  return (
    <div className={style.box}>
      <div className={style.site} style={{background: siteColor[site]}}>
        {site} 🔥
      </div>
      { links.map( link => <a className={style.link} href={link.url}> {link.title} </a> ) }
    </div>
  )
}

export default Box
