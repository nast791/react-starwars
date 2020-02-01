import React, {Component} from 'react';
import {DataService} from '../../services/DataService.js';
import './RandomPlanet.scss';
import {Spinner} from "../Spinner/Spinner";
import {ErrorIndicator} from "../ErrorIndicator/ErrorIndicator";

export class RandomPlanet extends Component {
  constructor() {
    super();
    this.dataService = new DataService();

    this.state = {
      planet: {},
      loading: true,
      error: false
    };
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    })
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    });
  }

  updatePlanet = () => {
    const id = (Math.floor(Math.random() * 17)) + 2;
    this.dataService.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
  }

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = hasData ? <PlanetView planet={planet}/> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}


const PlanetView = ({planet}) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <React.Fragment>
      <img className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}