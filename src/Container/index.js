
import React from 'react'
import { Link } from 'react-router'
import style from './style.css'

class Container extends React.Component {

  render() {
    return (
      <div className={style.container}>
        <header >
          <ul className={style.ul}>
            <li className={style.li}><a className={style.a} href="#">Daily</a></li>
            <li className={style.li}><a className={style.a} href="#">Weekly</a></li>
            <li className={style.li}><a className={style.a} href="#">Monthly</a></li>
          </ul>
        </header>
        
        {this.props.children}
      </div>
	  )
  }
}

export default Container
