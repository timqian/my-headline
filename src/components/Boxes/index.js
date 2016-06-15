
import React from 'react'
import Box from '../Box'
import style from './style.css'

function Boxes({ headlines }) {
  const boxArr = Object.keys(headlines).map(site => {
    return <Box site={ site } links={ headlines[site] } />
  })

  return (
    <div className={style.container}>
      <div className={style.boxes}>
        { boxArr }
      </div>
    </div>
  )
}

export default Boxes
