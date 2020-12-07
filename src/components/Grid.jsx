import React, { Component } from 'react'
import Square from './Square'


export default class Grid extends Component {

  constructor(props) {
    super();
    this.state = {
      revealCount: 0 //everytime we reveal a square with a letter, we add to the count.
    }
  }

  incrementRevealCount() {
    console.log("onLetterReveal")
    this.setState((currentState) => ({
      revealCount: currentState.revealCount + 1
    }
    ))
  }

  render() {

    console.log("revealCount: " + this.state.revealCount)

    const name = "Sabrina";
    const indexToLetter = {};
    const length = 20 * 20
    const squares = []

    if (this.state.revealCount == name.length) {
      console.log("WINNER");
    }

    for (let i = 0; i < name.length; i++) {
      const squareIndex = Math.floor(Math.random() * length);
      const letter = name[i];
      indexToLetter[squareIndex] = letter;
    }
    // {99: 'S', 2: 'A', 562: 'B', ...}

    console.log(indexToLetter)
    for (let i = 0; i < length; i++) {
      const currentLetter = indexToLetter[i];
      if (currentLetter == undefined) {
        squares.push(<Square letter="" incrementRevealCount={() => this.incrementRevealCount()} />)
      } else {
        squares.push(<Square letter={currentLetter} incrementRevealCount={() => this.incrementRevealCount()} />)
      }
    }

    if (this.state.revealCount === name.length) {
      alert("you win")
    }

    return (
      <div className="grid-container" >
        {/* {alert("TEST!")} */}
        {squares}
      </div>)
  }
}

