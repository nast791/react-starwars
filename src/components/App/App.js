import React, {Component} from 'react';
import {DataService} from '../../services/DataService.js';
import {Provider} from '../DataServiceContext/DataServiceContext.js';
import {Header} from '../Header/Header.js';
import {RandomPlanet} from '../RandomPlanet/RandomPlanet.js';
import {PeoplePage} from '../Pages/PeoplePage.js';
import {PlanetsPage} from '../Pages/PlanetsPage.js';
import {ShipsPage} from '../Pages/ShipsPage.js';
import {LoginPage} from '../Pages/LoginPage.js';
import {SecretPage} from '../Pages/SecretPage.js';
import './App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

export class App extends Component {
  constructor() {
    super();
    this.dataService = new DataService();

    this.state = {
      isLoggedIn: false
    }
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <Provider value={this.dataService}>
        <Router basename="/react-starwars">
          <div className="wrapper container">
            <Header />
            <RandomPlanet />
            <Switch>
              <Route path="/" exact render={() => <h2>Welcome to StarDB</h2>} />
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planets/" component={PlanetsPage} />
              <Route path="/ships/" component={ShipsPage} />
              <Route path="/login/" render={() => (<LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin}/>)} />
              <Route path="/secret/"  render={() => (<SecretPage isLoggedIn={isLoggedIn} />)} />
              <Route render={() => <h2>Page not found</h2>}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}