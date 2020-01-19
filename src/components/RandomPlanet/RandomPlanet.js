import React, {Component} from 'react';
import {DataService} from '../../services/DataService.js';
import './RandomPlanet.scss';
import {Spinner} from "../Spinner/Spinner";

export class RandomPlanet extends Component {
  constructor() {
    super();
    this.state = {
      planet: {},
      loading: true
    };
    this.dataService = new DataService();
    this.onPlanetLoaded = (planet) => {
      this.setState({
        planet,
        loading: false
      });
    }
    this.updatePlanet();
  }

  updatePlanet() {
    const id = (Math.floor(Math.random() * 18)) + 1;
    this.dataService.getPlanet(id).then(this.onPlanetLoaded);
  }

  render() {
    const { planet, loading } = this.state;

    const spinner = loading ? <Spinner/> : null;
    const content = loading ? null : <PlanetView planet={planet}/>;

    return (
      <div className="random-planet jumbotron rounded">
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

// class PlanetView extends Component  {
//   render({planet: {planet}} = RandomPlanet.state) {
//     const { id, name, population, rotationPeriod, diameter } = planet;
//     return (
//       <React.Fragment>
//         <img className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
//         <div>
//           <h4>{name}</h4>
//           <ul className="list-group list-group-flush">
//             <li className="list-group-item">
//               <span className="term">Population</span>
//               <span>{population}</span>
//             </li>
//             <li className="list-group-item">
//               <span className="term">Rotation Period</span>
//               <span>{rotationPeriod}</span>
//             </li>
//             <li className="list-group-item">
//               <span className="term">Diameter</span>
//               <span>{diameter}</span>
//             </li>
//           </ul>
//         </div>
//       </React.Fragment>
//     )
//   }
// }