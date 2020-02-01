import React, {Component} from 'react';
import './ErrorIndicator.scss';
import icon from './death-star.png';

export class ErrorIndicator extends Component {
  render() {
    return (
      <div className="error-indicator">
        <img src={icon} alt="error"/>
        <span className="boom">BOOM!</span>
        <span>something has gone terribly wrong</span>
        <span>(but we already sent droids to fix it)</span>
      </div>
    );
  }
}