import React, { Component } from 'react'


export default class Modal extends Component {

  render() {

    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

    return (
      <div className={showHideClassName}>
        <div className="modal-main">
          {this.props.children}
          <button onClick={this.props.handleClose}>close</button>
        </div>
      </div>
    );

  }
}


