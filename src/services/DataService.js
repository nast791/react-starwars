export class DataService {
  constructor() {
   this._apiBase = 'https://swapi.co/api';
   this._imageBase = 'https://starwars-visualguide.com/assets/img/';
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(res.status);
    }
    return await res.json();
  }

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  }

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  }

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }

  getAllShips = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformShip);
  }

  getShip = async (id) => {
    const ship = await this.getResource(`/starships/${id}/`);
    return this._transformShip(ship);
  }

  getPersonImage = ({id}) => {
    return `${this._imageBase}/characters/${id}.jpg`;
  }

  getPlanetImage = ({id}) => {
    return `${this._imageBase}/planets/${id}.jpg`;
  }

  getShipImage = ({id}) => {
    return `${this._imageBase}/starships/${id}.jpg`;
  }

  _getId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = (planet) => {
    return {
      id: this._getId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    }
  }

  _transformPerson = (person) => {
    return {
      id: this._getId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    }
  }

  _transformShip = (ship) => {
    return {
      id: this._getId(ship),
      name: ship.name,
      model: ship.model,
      manufacturer: ship.manufacturer,
      costInCredits: ship.cost_in_credits,
      length: ship.length,
      crew: ship.crew,
      passengers: ship.passengers,
      cargoCapacity: ship.cargo_capacity,
    }
  }
}
