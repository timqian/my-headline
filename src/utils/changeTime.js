
import moment from 'moment'
import { timeTypes } from '../config'
import getTimeType from '../utils/getTimeType'

/**
 * add or minus timeSplat
 * 
 * Example:
 *   
 */
function changeTime(timeSplat, add = true) {
  const [year, month] = timeSplat.split('/')
  if(add) {
    switch ( getTimeType(timeSplat) ) {
      case timeTypes.DAILY:
        return moment(timeSplat).add(1, 'days').format('YYYY/MM/DD')

      case timeTypes.WEEKLY: {
        const monthlyWeekNum = Number( timeSplat.slice(-1) )
        // console.log(monthlyWeekNum, `${year}/${month}`)
        const passedWeeks = moment(`${year}/${month}`, 'YYYY/MM').week() + monthlyWeekNum - 1
        // console.log(passedWeeks, `${year}W${passedWeeks}`)
        const newMoment = moment(`${year}W${passedWeeks}`)
        // console.log(newMoment.format('YYYY/MM/DD'))
        const newYearMonth = newMoment.format('YYYY/MM')
        const newMonthlyWeekNum = newMoment.week() - newMoment.startOf('month').week() + 1
        return `${newYearMonth}/w${newMonthlyWeekNum}`
      }

      case timeTypes.MONTHLY:
        const newMonth = moment(`${year}/${month}`, 'YYYY/MM').add(1, 'months').format('YYYY/MM')
        return newMonth + '/mm'
    }
  } else {
    switch ( getTimeType(timeSplat) ) {
      case timeTypes.DAILY:
        return moment(timeSplat).subtract(1, 'days').format('YYYY/MM/DD')

      case timeTypes.WEEKLY: {
        const monthlyWeekNum = Number( timeSplat.slice(-1) )
        // console.log(monthlyWeekNum, `${year}/${month}`)
        const passedWeeks = moment(`${year}/${month}`, 'YYYY/MM').week() + monthlyWeekNum - 1
        // console.log(passedWeeks, `${year}W${passedWeeks}`)
        const newMoment = moment(`${year}W${passedWeeks}`).subtract(2, 'weeks')
        // console.log(newMoment.format('YYYY/MM/DD'))
        const newYearMonth = newMoment.format('YYYY/MM')
        const newMonthlyWeekNum = newMoment.week() - newMoment.startOf('month').week() + 1
        return `${newYearMonth}/w${newMonthlyWeekNum}`
      }

      case timeTypes.MONTHLY:
        const newMonth = moment(`${year}/${month}`, 'YYYY/MM').subtract(1, 'months').format('YYYY/MM')
        return newMonth + '/mm'
    }   
  }
}


// tests

// console.log( changeTime('2016/06/01', true) )
// console.log( changeTime('2016/06/01', false) )
console.log( changeTime('2016/05/w4', true) )
console.log( changeTime('2016/05/w4', false) )
console.log( changeTime('2016/06/w2', true) )
console.log( changeTime('2016/06/w2', false) )
console.log( changeTime('2016/07/w5', true) )
// console.log( changeTime('2016/06/mm', true) )
// console.log( changeTime('2016/06/mm', false) )


export default changeTime