
import React from 'react'
import Box from '../Box'
import style from './style.css'

function Boxes({ linksObj }) {
  const boxArr = Object.keys(linksObj).map(site => {
    return <Box site={ site } links={ linksObj[site] } />
  })

  return <div className={style.boxes}>{ boxArr }</div>
}

export default Boxes
