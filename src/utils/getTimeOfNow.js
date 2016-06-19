
import moment from 'moment'
import { timeTypes } from '../config';

/**
 * @param  {String} timeType
 * @return {String} time of now of the given type
 * 
 * @example
 *   
 */
function getTimeOfNow(timeType) {
  switch (timeType) {
    case timeTypes.DAILY:
      return moment().subtract(1, 'days').format('YYYY/MM/DD')
    
    case timeTypes.MONTHLY:
      return moment().subtract(1, 'months').format('YYYY/MM') + '/mm'
    
    case timeTypes.WEEKLY:
      const weekOfMonth = moment().day(-8).week() - moment().day(-8).startOf('month').week() + 1
      return `${moment().day(-8).format('YYYY/MM')}/w${weekOfMonth}`
  }
}

// test
console.log( getTimeOfNow(timeTypes.WEEKLY) )

export default getTimeOfNow