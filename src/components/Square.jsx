import React, { Component } from 'react'

export default class Square extends Component {
  constructor(props) {
    super();
    this.state = {
      className: "blackSquare",
      letter: props.letter,
    }
  }

  onMouseEnter() {
    this.setState({
      className: "whiteSquare"
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
