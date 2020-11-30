import React, { Component } from 'react'

export default class Square extends Component {
  constructor(props) {
    super();
    this.state = {
      className: "blackSquare",
      letter: props.letter,
      onReveal: props.onReveal
    }
  }

  onMouseEnter() {
    this.setState({
      className: "whiteSquare"
    })
    this.state.onReveal()
  }

  isRevealed() {
    console.log("isRevealed: " + this.state)
    return this.state.revealed
  }

  render() {
    return (
      <div
        onMouseEnter={() => this.onMouseEnter()}
        className={this.state.className}
      >
        <p>{this.state.letter}</p>

      </div>


    )
  }
}
