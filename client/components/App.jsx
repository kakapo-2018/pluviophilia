import React from 'react'
import Leaf from './Leaf'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      leaves: [
        {
          styles: {
            position: "absolute",
            left: 34,
            top: 9,
            transform: "rotate(" + 0 + "deg)",
            width: "300px"
          },
          imgSrc: '/leaf.svg'
        },
        {
          styles: {
            position: "absolute",
            left: 500,
            top: 9,
            transform: "rotate(" + 80 + "deg)",
            width: "300px"
          },
          imgSrc: '/leaf.svg'
        },
        {
          styles: {
            position: "absolute",
            left: 1055,
            top: 9,
            transform: "rotate(" + 74 + "deg)",
            width: "300px"
          },
          imgSrc: '/leaf.svg'
        },
        {
          styles: {
            position: "absolute",
            left: 1500,
            top: 13,
            transform: "rotate(" + 74 + "deg)",
            width: "300px"
          },
          imgSrc: '/leaf.svg'
        },
        {
          styles: {
            position: "absolute",
            left: 105,
            top: 602,
            transform: "rotate(" + 0 + "deg)",
            width: "300px"
          },
          imgSrc: '/bush.svg'
        },
        {
          styles: {
            position: "absolute",
            left: 532,
            top: 602,
            transform: "rotate(" + 323 + "deg)",
            width: "300px"
          },
          imgSrc: '/bush.svg'
        },
        {
          styles: {
            position: "absolute",
            left: 1145,
            top: 602,
            transform: "rotate(" + 357 + "deg)",
            width: "300px"
          },
          imgSrc: '/bush.svg'
        },
        {
          styles: {
            position: "absolute",
            left: 1582,
            top: 602,
            transform: "rotate(" + 349 + "deg)",
            width: "300px"
          },
          imgSrc: '/bush.svg'
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
            return <Leaf key={k} id={"leaf" + k} styles={leaf.styles} img={leaf.imgSrc}/>
          })}
        </React.Fragment>
      )
  }
}

export default App