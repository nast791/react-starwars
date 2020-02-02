import React, {Component} from 'react';
import {DataService} from '../../services/DataService.js';
import {Provider} from '../DataServiceContext/DataServiceContext.js';
import {Header} from '../Header/Header.js';
import {RandomPlanet} from '../RandomPlanet/RandomPlanet.js';
import {PeoplePage} from '../Pages/PeoplePage.js';
import {PlanetsPage} from '../Pages/PlanetsPage.js';
import {ShipsPage} from '../Pages/ShipsPage.js';
import './App.scss';


export class App extends Component {
  constructor() {
    super();
    this.dataService = new DataService();
  }

  render() {
    return (
      <Provider value={this.dataService}>
        <div className="wrapper">
          <Header />
          <RandomPlanet />
          <PeoplePage />
          <PlanetsPage />
          <ShipsPage />
        </div>
      </Provider>
    );
  }
}