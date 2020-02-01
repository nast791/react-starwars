import React, {Component} from 'react';
import {DataService} from '../../services/DataService.js';
import {Header} from '../Header/Header.js';
import {RandomPlanet} from '../RandomPlanet/RandomPlanet.js';
import {PeoplePage} from '../PeoplePage/PeoplePage.js';
import {PlanetDetails} from '../PlanetDetails/PlanetDetails.js';
import {StarshipDetails} from '../StarshipDetails/StarshipDetails.js';
import './App.scss';


export class App extends Component {
  constructor() {
    super();
    this.dataService = new DataService();
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </div>
    );
  }
}