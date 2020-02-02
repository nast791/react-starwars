import React, {Component} from 'react';
import {ErrorIndicator} from "../ErrorIndicator/ErrorIndicator";

export class Error extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    }
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>
    }
    return this.props.children;
  }
}