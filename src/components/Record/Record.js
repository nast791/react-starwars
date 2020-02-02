import React, {Component} from 'react';

export class Record extends Component {
  render() {
    const {item, field, label} = this.props;
    return (
      <li className="list-group-item">
        <span className="term">{label}</span>
        <span>{item[field]}</span>
      </li>
    );
  }
}