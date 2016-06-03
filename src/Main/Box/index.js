
import React from 'react'
import style from './style.css'
import {siteColor} from '../../config'

function Box({ site, links }) {
  return (
    <div className={style.box}>
      <h3 className={style.site} style={{background: siteColor[site]}}>
        {site}
        <small><small><small> - top 10 </small></small></small>
      </h3>
      { links.map( link => <a className={style.link} href={link.url}> {link.title} </a> ) }
    </div>
  )
}

export default Box
