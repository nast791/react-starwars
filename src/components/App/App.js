import React, {Component} from 'react';
import {DataService} from '../../services/DataService.js';
import {Header} from '../Header/Header.js';
import {RandomPlanet} from '../RandomPlanet/RandomPlanet.js';
import {ItemList} from '../ItemList/ItemList.js';
import {PersonDetails} from '../PersonDetails/PersonDetails.js';
import {PlanetDetails} from '../PlanetDetails/PlanetDetails.js';
import {StarshipDetails} from '../StarshipDetails/StarshipDetails.js';
import './App.scss';


export class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <RandomPlanet />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList />
          </div>
          <div className="col-md-6">
            <PersonDetails />
          </div>
        </div>
      </div>
    );
  }
}