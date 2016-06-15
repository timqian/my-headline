
import axios from 'axios'
import { dataUrl } from '../config'

async function getHeadlines(timeSplat) {
  const { data } = await axios.get(`${dataUrl}/${timeSplat}.json`, {timeout: 7000})
    .catch(res => {
      alert('Seems no data here~')
    })
  return data
}

export default getHeadlines