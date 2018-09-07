import React from 'react'

export default class SaveButton extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.saveSong()
  }
  render(){
    return(
      <svg width="140" height="140">
        <circle cx="70" cy="70" r="70" onClick={this.handleClick} fill="darkred"/>
      </svg>
    )
  }
}

//style={fill: "red", stroke: "3px solid darkgrey"}