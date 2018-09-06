import React from 'react'
//import Leaf from './Leaf'

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
    this.updateCanvas = this.updateCanvas.bind(this)
  }

  componentDidMount(){
    this.updateCanvas()
  }

  updateCanvas(){
    const ctx = this.refs.canvas.getContext('2d');
    this.setState = {
      ctx: ctx
    }
  }
  render() {
    console.log(this.state.ctx)
    return (
      <React.Fragment>
        
      <canvas ref="canvas" width="1920" height="1080"></canvas>
      {this.state.leaves.map(leaf => {
        return <h1>fuuuuuuuuu</h1>
      })}
      </React.Fragment>
    )
  }
}

export default App

{/* <Leaf x={leaf.x} y={leaf.y} ctx={this.state.ctx}/> */}