
import { timeTypes } from '../config'

/**
 * Get time type from time splat
 * 
 * Examples: 
 *   2016/06/01 ==> timeTypes.DAILY
 *   2016/06/w1 ==> timeTypes.WEEKLY
 *   2016/05/m1  ==> timeTypes.MONTHLY
 */
function getTimeType(timeSplat) {
  if(timeSplat.slice(-2, -1) === 'w') {
    return timeTypes.WEEKLY
  } else if (timeSplat.slice(-2, -1) === 'm') {
    return timeTypes.MONTHLY
  } else {
    return timeTypes.DAILY
  }
}

// test
// console.log( getTimeType('2016/06/w1') )
// console.log( getTimeType('2016/06/01') )
// console.log( getTimeType('2016/06/m1') )

export default getTimeType