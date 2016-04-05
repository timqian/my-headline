
import React from 'react'
import Box from '../../components/Box'
import style from './style.css'

const allLinks = { 
  'v2ex': [
    {title:'纯 纯 纯 a fake title', url:'www.v2ex.com/timqian'},
    {title:'another fake title', url:'www.v2ex.com/timqian'},
    {title:'a fake title', url:'http://www.v2ex.com/member/timqian'},
    {title:'anotht 纯 Google Play er fake titlas dfas dfasdfas dfasdfas dfasdfae', url:'www.v2ex.com/timqian'},
    {title:'third fake title', url:'www.v2ex.com/timqian'},
    {title:'a fake title', url:'http://www.v2ex.com/member/timqian'},
    {title:'another fake titlas dfas dfasdfas dfasdfas dfasdfae', url:'www.v2ex.com/timqian'},
    {title:'third fake title', url:'www.v2ex.com/timqian'},
    {title:'a fake title', url:'http://www.v2ex.com/member/timqian'},
    {title:'another fake titlas dfas dfasdfas dfasdfas dfasdfae', url:'www.v2ex.com/timqian'},     
  ],
  'medium': [
    {title:'a fake title', url:'www.v2ex.com/timqian'},
    {title:'another fake t 纯 Google Play title', url:'www.v2ex.com/timqian'},
    {title:'a fake title', url:'http://www.v2ex.com/member/timqian'},
    {title:'another fake titlas dfas dfasdfas dfasdfas dfasdfae', url:'www.v2ex.com/timqian'},
    {title:'third fake title', url:'www.v2ex.com/timqian'},
    {title:'a fake title', url:'http://www.v2ex.com/member/timqian'},
    {title:'anothert 纯 Google Play  fake titlas dfas dfasdfas dfasdfas dfasdfae', url:'www.v2ex.com/timqian'},
    {title:'third fake title', url:'www.v2ex.com/timqian'},
    {title:'a fake title', url:'http://www.v2ex.com/member/timqian'},
    {title:'another fake titlas dfas dfasdfas dfasdfas dfasdfae', url:'www.v2ex.com/timqian'},
  ],
  'Reddit': [
    {title:'a fake title', url:'www.v2ex.com/timqian'},
    {title:'another fake title', url:'www.v2ex.com/timqian'},
    {title:'a fake title', url:'http://www.v2ex.com/member/timqian'},
    {title:'anothet 纯 Google Play r fake titlas dfas dfasdfas dfasdfas dfasdfae', url:'www.v2ex.com/timqian'},
    {title:'third fake title', url:'www.v2ex.com/timqian'},
    {title:'a fake t 纯 Google Play title', url:'http://www.v2ex.com/member/timqian'},
    {title:'another fake titlas dfas dfasdfas dfasdfas dfasdfae', url:'www.v2ex.com/timqian'},
    {title:'third fake title', url:'www.v2ex.com/timqian'},
    {title:'a fake title', url:'http://www.v2ex.com/member/timqian'},
    {title:'anothet 纯 Google Play r fake titlas dfas dfasdfas dfasdfas dfasdfae', url:'www.v2ex.com/timqian'},
  ],
  'HN': [
    {title:'a fake title', url:'www.v2ex.com/timqian'},
    {title:'another fake title', url:'www.v2ex.com/timqian'},
    {title:'a fake title', url:'http://www.v2ex.com/member/timqian'},
    {title:'anotht 纯 Google Play er fake titlas dfas dfasdfas dfasdfas dfasdfae', url:'www.v2ex.com/timqian'},
    {title:'third fake title', url:'www.v2ex.com/timqian'},
    {title:'a fake title', url:'http://www.v2ex.com/member/timqian'},
    {title:'another fake titlas dfas dfasdfas dfasdfas dfasdfae', url:'www.v2ex.com/timqian'},
    {title:'third fake title', url:'www.v2ex.com/timqian'},
    {title:'a fake title', url:'http://www.v2ex.com/member/timqian'},
    {title:'another fake titlas dfas dfasdfas dfasdfas dfasdfae', url:'www.v2ex.com/timqian'},
  ],
}


function AllBoxes({ allLinks }) {
  const Boxes = Object.keys(allLinks).map(site => {
    return <Box site={site} links={allLinks[site]} />
  })
  
  return <div>{Boxes}</div>
}

class Container extends React.Component {
  
  render() {
    return (
      <div>
        <div>date picker</div>
        <div>
          <AllBoxes allLinks={allLinks} />
        </div>
      </div>
	  )
  }
}

export default Container
