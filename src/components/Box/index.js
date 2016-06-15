
import React from 'react'
import style from './style.css'
import {siteColor} from '../../config'

function Box({ site, links }) {
  return (
    <div className={style.box}>
      <h3 className={style.site} style={{background: siteColor[site]}}>
        {site} 🔥
      </h3>
      { links.map( (link, i) => {
        return <OneHeadline title={link.title} url={link.url} score={link.score} i={i} />
      })}
    </div>
  )
}

function OneHeadline({title, url, score, i}) {
  return (
    <div className={style.oneHeadline} >
      <a className={style.link}  href={url}> 
        <span style={{color:'#aaa'}}>{i}. </span> 
        {title}
      </a>
      <a href={url} className={style.score}> {score} </a>  
    </div>
  )
}

export default Box
