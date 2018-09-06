import React from 'react'

export default class Leaf extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      styles: this.props.styles,
      img: this.props.img,
      id: this.props.id
    }
  }

  render(){
    if(this.props.id){
      return (
        <React.Fragment>
          <img id={this.state.id} src={this.state.img} alt="leaf" style={this.props.styles}/>
          {console.log(this.state.id)}
        </React.Fragment>
      )
    } else {
        return null
    }
  }
}