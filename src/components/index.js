
import React from 'react'
import moment from 'moment'
import axios from 'axios'
import queryString from 'query-string'
import { browserHistory } from 'react-router'
import { dataUrl, apis, timeTypes } from '../config'
import defineTimeType from '../utils/getTimeType'
import getHeadlines from '../utils/getHeadlines'
import changeTime from '../utils/changeTime'
import getTimeOfNow from '../utils/getTimeOfNow'
import Boxes from './Boxes'
import style from './style.css'

// headline url: https://raw.githubusercontent.com/timqian/my-headline-crawler/master/data/2016/04/11.json
class Container extends React.Component {
  constructor(props, context) {
    super(props, context)
    const { splat } = this.props.params
    const time = splat ? splat : moment().subtract(1, 'days').format('YYYY/MM/DD')
    this.state = {
      time,
      timeType: defineTimeType(time),
      headlines: {},
    }
  }

  async componentDidMount() {
    const headlines = await getHeadlines(this.state.time)
    this.setState({ headlines })
  }

  async handleTimeChange(add = true) {
    const time = changeTime(this.state.time, add)
    const headlines = await getHeadlines(time)
    this.setState({ time, headlines })
    browserHistory.push(`/my-headline/${time}`) // update url
  }

  async handleTimeTypeChange(timeType) {
    const time = getTimeOfNow(timeType)
    const headlines = await getHeadlines(time)
    this.setState({ 
      time, headlines,
      timeType: defineTimeType(time)
    })
    browserHistory.push(`/my-headline/${time}`) // update url
  }

  isActive(timeType) {
    if(timeType === this.state.timeType) {
      return style.aActive
    } else {
      return ''
    }
  }

  render() {
    return (
      <div className={style.container}>

        <header className={style.header}>
          <div className={style.div}>
            <ul className={style.ul}>
              <li className={style.li}>
                <a className={`${style.a} ${this.isActive(timeTypes.DAILY)}`} href="#" 
                  onClick={ () => {this.handleTimeTypeChange(timeTypes.DAILY)} }>
                  Daily
                </a>
              </li>
              <li className={style.li}>
                <a className={`${style.a} ${this.isActive(timeTypes.WEEKLY)}`} href="#" id="aaa"
                  onClick={ () => {this.handleTimeTypeChange(timeTypes.WEEKLY)} }>
                  Weekly
                </a>
              </li>
              <li className={style.li}>
                <a className={`${style.a} ${this.isActive(timeTypes.MONTHLY)}`} href="#" 
                  onClick={ () => {this.handleTimeTypeChange(timeTypes.MONTHLY)} }>
                  Monthly
                </a>
              </li>
            </ul>
          </div>
        </header>

        <div className={style.header2}>
          <button className={style.btn} onClick={() => {this.handleTimeChange(false)}}> ⇦ </button>
            {this.state.time}
          <button className={style.btn} onClick={() => {this.handleTimeChange(true)}}> ⇨ </button>
        </div>

        <Boxes headlines={this.state.headlines} />
      </div>
	  )
  }
}


export default Container
