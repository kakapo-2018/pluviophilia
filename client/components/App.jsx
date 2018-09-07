import React from 'react'
import Leaf from './Leaf'
import SaveButton from './SaveButton';
import {saveSong as apiSaveSong} from '../api.js'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      song: [],
      leaves: [
        {
          styles: {
            position: "absolute",
            left: 34,
            top: 9,
            transform: "rotate(" + 0 + "deg)",
            width: "300px"
          },
          note: "C4",
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
          note: "B4",
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
          note: "D4",
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
          note: "E4",
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
          note: "G4",
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
          note: "F4",
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
          note: "A4",
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
          note: "G3",
          imgSrc: '/bush.svg'
        }
      ]
    }
    this.addNoteToSong = this.addNoteToSong.bind(this)
    this.saveSong = this.saveSong.bind(this)
  }

  addNoteToSong(note) {
    console.log("addNoteToSong: " + note)
    let song = this.state.song
    song.push(note)
    this.setState({
      song: song
    })
    this.playSong(this.state.song)
  }

  saveSong(){
    if(this.state.song.length > 0){
      console.log("Saved!")
      this.playSong(this.state.song)
      let song = {song: JSON.stringify(this.state.song)}
      apiSaveSong(song, () => {})
      this.setState({
        song: []
      })
    }
  }

  playSong(song) {
    console.log(song)
  }

  render() {
      let k = -1
      return (
        <React.Fragment>
          <SaveButton saveSong={this.saveSong}/>
          {this.state.leaves.map(leaf => {
            k++
            return <Leaf key={k} id={"leaf" + k} styles={leaf.styles} img={leaf.imgSrc} note={leaf.note} addNoteToSong={this.addNoteToSong}/>
          })}
        </React.Fragment>
      )
  }
}

export default App