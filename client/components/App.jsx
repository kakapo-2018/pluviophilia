import React from 'react'
import Leaf from './Leaf'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      leaves: [
        {
          x: 10,
          y: 10
        },
        {
          x: 50,
          y: 50
        }
      ]
    }
  }

  render() {
      let k = -1
      return (
        <React.Fragment>
          {this.state.leaves.map(leaf => {
            k++
            return <Leaf key={k} x={leaf.x} y={leaf.y} ctx={this.state.ctx}/>
          })}
        </React.Fragment>
      )
  }
}

export default App