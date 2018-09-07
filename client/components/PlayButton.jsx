import React from 'react'

export default class PlayButton extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <img onClick={this.props.playSong} src="play-button.svg" alt="play button" width={140}/>
    )
  }
}