
import ReactDOM from 'react-dom'
import React from 'react'

const allLinks = { 
  'v2ex': [
    {title:'a fake title', url:'http://www.v2ex.com/member/timqian'},
    {title:'another fake title', url:'www.v2ex.com/timqian'},
    {title:'third fake title', url:'www.v2ex.com/timqian'},
  ],
  'HN': [
    {title:'a fake title', url:'www.v2ex.com/timqian'},
    {title:'another fake title', url:'www.v2ex.com/timqian'},
  ],
  'medium': [
    {title:'a fake title', url:'www.v2ex.com/timqian'},
    {title:'another fake title', url:'www.v2ex.com/timqian'},
  ],
}


function LinkRow({ title, url }) {
  return (
    <li>
      <a href={url}>{title}</a>
    </li>
    )
}

function Box({ site, links }) {
  return (
    <div>
      <p>{site}</p>
      <ul>
        {
          links.map( link => {
            return <LinkRow title={link.title} url={link.url} />
          })
        }
      </ul>
    </div>
  )
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

/*{{}}
 * Render the above component into the div#app
 */
ReactDOM.render(<Container />, document.getElementById('root'))
