import React from 'react'

export default class Leaf extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      x: this.props.x,
      y: this.props.y,
      ctx: this.props.ctx
    }
  }

  render(){
    try {
      if (this.state.ctx) {
        console.log(this.state.ctx)
        return (
          <React.Fragment>
          {this.state.ctx.fillRect(this.state.x, this.state.y, 100, 100)}
          <h3>fucking rectangles</h3>
          </React.Fragment>
        )
      } else {
        console.log("ctx not defined")
        return null
      }
    } catch (error) {
      console.log("I fucking hate react")
      return null
    }
    
  }

}