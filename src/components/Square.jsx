import React, { Component } from 'react'

export default class Square extends Component {
  constructor(props) {
    super();
    this.state = {
      className: "blackSquare",
      letter: props.letter,
      incrementRevealCount: props.incrementRevealCount,
      revealed: false,
    }
  }

  onMouseEnter() {
    if (this.state.letter != "" && !this.state.revealed) {
      this.state.incrementRevealCount()
    }
    this.setState({
      className: "whiteSquare",
      revealed: true
    })
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
