import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';

export class Header extends Component {
  render() {
    return (
      <div className="header d-flex">
        <h3>
          <Link to="/react-starwars/">Star DB</Link>
        </h3>
        <ul className="d-flex">
          <li>
            <Link to="/react-starwars/people/">People</Link>
          </li>
          <li>
            <Link to="/react-starwars/planets/">Planets</Link>
          </li>
          <li>
            <Link to="/react-starwars/ships/">Starships</Link>
          </li>
          <li>
            <Link to="/react-starwars/login/">Login</Link>
          </li>
          <li>
            <Link to="/react-starwars/secret/">Secret</Link>
          </li>
        </ul>
      </div>
    );
  }
}