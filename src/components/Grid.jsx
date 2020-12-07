import React, { Component } from 'react'
import Square from './Square'
import Modal from './Modal'


export default class Grid extends Component {

  constructor(props) {
    super();
    this.state = {
      name: "Sabrina",
      revealCount: 0, //everytime we reveal a square with a letter, we add to the count.
      showModalWin: false,
      showModalStart: true
    }
  }

  incrementRevealCount() {
    const revealCount = this.state.revealCount + 1
    const showModalWin = this.state.name.length === revealCount
    this.setState({
      revealCount: revealCount,
      showModalWin: showModalWin
    })
  }

  hideModalStart = () => {
    this.setState({ showModalStart: false });
  }

  hideModalWin = () => {
    this.setState({ showModalWin: false });
  }

  render() {

    console.log("revealCount: " + this.state.revealCount)

    const indexToLetter = {};
    const length = 20 * 20
    const squares = []

    for (let i = 0; i < this.state.name.length; i++) {
      const squareIndex = Math.floor(Math.random() * length);
      const letter = this.state.name[i];
      indexToLetter[squareIndex] = letter;
    }

    console.log(indexToLetter)
    for (let i = 0; i < length; i++) {
      const currentLetter = indexToLetter[i];
      if (currentLetter === undefined) {
        squares.push(<Square letter="" incrementRevealCount={() => this.incrementRevealCount()} />)
      } else {
        squares.push(<Square letter={currentLetter} incrementRevealCount={() => this.incrementRevealCount()} />)
      }
    }

    return (
      <div className="grid-container" >
        <Modal show={this.state.showModalStart} handleClose={this.hideModalStart}>
          <p>Instructions...</p>
        </Modal>
        <Modal show={this.state.showModalWin} handleClose={this.hideModalWin}>
          <p>You win!</p>
        </Modal>
        {squares}
      </div>)
  }
}

