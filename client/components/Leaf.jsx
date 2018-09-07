import React from 'react'
import Tone from 'tone'

export default class Leaf extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      styles: this.props.styles,
      img: this.props.img,
      id: this.props.id,
      synth: new Tone.Synth().toMaster(),
      note: this.props.note
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let synth = this.state.synth
    let note = this.state.note
    synth.triggerAttackRelease(note, '8n')
    this.props.addNoteToSong(note)
  }

  render(){
    if(this.props.id){
      return (
        <React.Fragment>
          <img onClick={this.handleClick} id={this.state.id} src={this.state.img} alt="leaf" style={this.props.styles}/>
        </React.Fragment>
      )
    } else {
        return null
    }
  }
}