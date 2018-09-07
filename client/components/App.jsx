import React from 'react'
import Leaf from './Leaf'
import SaveButton from './SaveButton';
import PlayButton from './PlayButton';
import {saveSong as apiSaveSong} from '../api.js'
import Tone from 'tone'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      song: [],
      lastSong: [],
      synth: new Tone.Synth().toMaster(),
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
    this.playSong = this.playSong.bind(this)
  }

  addNoteToSong(note) {
    console.log("addNoteToSong: " + note)
    let song = this.state.song
    song.push(note)
    this.setState({
      song: song
    })
  }

  saveSong(){
    if(this.state.song.length > 0){
      console.log("Saved!")
      let song = {song: JSON.stringify(this.state.song)}
      apiSaveSong(song, () => {})
      this.setState({
        song: [],
        lastSong: song.song
      })
    }
  }

  playSong() {
    let song = JSON.parse(this.state.lastSong)
    let synth = this.state.synth
    console.log(song)
    let intLength = 0
    let int = setInterval(()=> {
      console.log(song[intLength])
      synth.triggerAttackRelease(song[intLength], '8n')
      intLength++
      if(intLength > song.length) {clearInterval(int)}
    }, 1000)
  }

  render() {
      let k = -1
      return (
        <React.Fragment>
          {this.state.leaves.map(leaf => {
            k++
            return <Leaf key={k} id={"leaf" + k} styles={leaf.styles} img={leaf.imgSrc} note={leaf.note} addNoteToSong={this.addNoteToSong}/>
          })}
          <div className="save-button">
            <SaveButton saveSong={this.saveSong}/>
            <PlayButton playSong={this.playSong}/>
          </div>
        </React.Fragment>
      )
  }
}

export default App