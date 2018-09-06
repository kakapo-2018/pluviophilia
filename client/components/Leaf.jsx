import React from 'react'

export default class Leaf extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      x: this.props.x,
      y: this.props.y
    }
  }

  render(){
    return (
      <React.Fragment>
        <img src="/leaf.svg" alt="leaf"/>
        {console.log("leafrender")}
      </React.Fragment>
    )
  }
}