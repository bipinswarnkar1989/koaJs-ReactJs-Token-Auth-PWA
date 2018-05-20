import React, { Component } from 'react';

export default class Appwrapper extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
};
