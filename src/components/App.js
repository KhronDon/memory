import React, { Component } from 'react'
import shuffle from 'array-shuffle'
import BoxItem from './BoxItem'

import imagesData from '../images.json'

class App extends Component {

  constructor () {
    super()
    this.state = {
      matches: [],
      picks: [],
      won: false,
      images: shuffle(imagesData)
    }
  }

  choose (card) {
    if (this.state.picks.length === 2 || this.state.matches.includes(card)) { return }
    this.setState({
      picks: [...this.state.picks, card]
    }, () => {
      console.log(this.state.picks)
      if (this.state.picks.length === 2) {
        this.check()
      }
    })
  }

  check () {
    const picks = this.state.picks
    if (this.state.images[picks[0]] === this.state.images[picks[1]]) {
      this.setState({
        matches: [...this.state.matches, ...picks],
        picks: []
      }, () => {
        if (this.state.matches.length === this.state.images.length) {
          this.setState({
            won: true
          })
        }
      })
    } else {
      setTimeout(() => {
        this.setState({ picks: [] })
      }, 1000)
    }
  }

  render () {
    const picks = this.state.picks
    const matches = this.state.matches
    const images = this.state.images
    return <div>
      <h1>{this.state.won ? 'Yeah! You Member!' : 'Member?'}</h1>
      <table>
        <tbody>
          <tr>
            <BoxItem image={images[0]} isUp={picks.includes(0) || matches.includes(0)} handleClick={() => this.choose(0)} />
            <BoxItem image={images[1]} isUp={picks.includes(1) || matches.includes(1)} handleClick={() => this.choose(1)} />
            <BoxItem image={images[2]} isUp={picks.includes(2) || matches.includes(2)} handleClick={() => this.choose(2)} />
            <BoxItem image={images[3]} isUp={picks.includes(3) || matches.includes(3)} handleClick={() => this.choose(3)} />
          </tr>
          <tr>
            <BoxItem image={images[4]} isUp={picks.includes(4) || matches.includes(4)} handleClick={() => this.choose(4)} />
            <BoxItem image={images[5]} isUp={picks.includes(5) || matches.includes(5)} handleClick={() => this.choose(5)} />
            <BoxItem image={images[6]} isUp={picks.includes(6) || matches.includes(6)} handleClick={() => this.choose(6)} />
            <BoxItem image={images[7]} isUp={picks.includes(7) || matches.includes(7)} handleClick={() => this.choose(7)} />
          </tr>
          <tr>
            <BoxItem image={images[8]} isUp={picks.includes(8) || matches.includes(8)} handleClick={() => this.choose(8)} />
            <BoxItem image={images[9]} isUp={picks.includes(9) || matches.includes(9)} handleClick={() => this.choose(9)} />
            <BoxItem image={images[10]} isUp={picks.includes(10) || matches.includes(10)} handleClick={() => this.choose(10)} />
            <BoxItem image={images[11]} isUp={picks.includes(11) || matches.includes(11)} handleClick={() => this.choose(11)} />
          </tr>
          <tr>
            <BoxItem image={images[12]} isUp={picks.includes(12) || matches.includes(12)} handleClick={() => this.choose(12)} />
            <BoxItem image={images[13]} isUp={picks.includes(13) || matches.includes(13)} handleClick={() => this.choose(13)} />
            <BoxItem image={images[14]} isUp={picks.includes(14) || matches.includes(14)} handleClick={() => this.choose(14)} />
            <BoxItem image={images[15]} isUp={picks.includes(15) || matches.includes(15)} handleClick={() => this.choose(15)} />
          </tr>
        </tbody>
      </table>
    </div>
  }
}

export default App
