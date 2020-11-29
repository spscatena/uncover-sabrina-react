import React, { Component } from 'react'
import Square from './Square'


export default class Grid extends Component {

  render() {


    const name = "Sabrina";
    const indexToLetter = {};
    const length = 20 * 20
    const squares = []

    for (let i = 0; i < name.length; i++) {
      const squareIndex = Math.floor(Math.random() * length);
      const letter = name[i];
      indexToLetter[squareIndex] = letter;
    }
    console.log(indexToLetter)
    for (let i = 0; i < length; i++) {
      const currentLetter = indexToLetter[i];
      if (currentLetter == undefined) {
        squares.push(<Square letter="" />)
      } else {
        squares.push(<Square letter={currentLetter} />)
      }
    }

    return (
      <div className="grid-container" >
        {squares}
      </div>)
  }
}

