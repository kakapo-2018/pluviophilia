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
          x: 500,
          y: 500
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
    this.setState({
      ctx: ctx
    })
  }
  render() {
    console.log(this.state.ctx)
    if (this.state.ctx) {
      console.log("truthy")
      return (
        <React.Fragment>
          <canvas ref="canvas" width="1920" height="1080"></canvas>
          {this.state.leaves.map(leaf => {
            return <Leaf x={leaf.x} y={leaf.y} ctx={this.state.ctx}/>
          })}
        </React.Fragment>
      )
    }
    else {
      console.log("falsy")
      return (<canvas ref="canvas" width="1920" height="1080"></canvas>)
      //return null
    }
  }
}

export default App

{/* <Leaf x={leaf.x} y={leaf.y} ctx={this.state.ctx}/> */}