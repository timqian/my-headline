
import React from 'react'
import moment from 'moment'
import axios from 'axios'
import queryString from 'query-string'
import { dataUrl, apis } from '../config'
import Header from './Header'
import Boxes from './Boxes'


class Container extends React.Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      date: location.hash.slice(1) ? location.hash.slice(1) : moment().subtract(1, 'days').format('YYYY-MM-DD'),
      // example: https://raw.githubusercontent.com/timqian/my-headline-crawler/master/data/2016-04-11.json
      linksObj: {},
    }
  }

  // fetch link object and set state
  fetchLinksObj(date) {
    return axios.get(`${dataUrl}/${date}.json`, {timeout: 7000})
      .then(res => { this.setState({linksObj: res.data}); })
      // .catch(err => { alert(err.data); });
  }

  handleAddDay() {
    const newDate = moment(this.state.date).add(1, 'days').format('YYYY-MM-DD');
    this.fetchLinksObj(newDate)
      .then(() => {
        this.setState({ date: newDate });
        location.hash = newDate;
      })
      .catch(err => {
        alert(err.data)
      });
  }

  handleSubtractDay() {
    const newDate = moment(this.state.date).subtract(1, 'days').format('YYYY-MM-DD');
    this.fetchLinksObj(newDate)
      .then(() => {
        this.setState({ date: newDate });
        location.hash = newDate;
      })
      .catch(err => {
        alert(err.data)
      });
  }

  componentDidMount() {
    this.fetchLinksObj(this.state.date);
    // For github login
    // const githubCode = queryString.parse(location.search).code;
    // axios.get(`${apis.getGithubAccessToken}/${githubCode}`)
    //   .then(res => {
    //     console.log(res)
    //   })
  }

  render() {
    return (
      <div>
         <Header date={this.state.date}
           handleAddDay={this.handleAddDay.bind(this)}
           handleSubtractDay={this.handleSubtractDay.bind(this)}
         />

         <Boxes linksObj={this.state.linksObj} />
      </div>
	  )
  }
}

export default Container
