export class DataService {
  constructor() {
   this._apiBase = 'https://swapi.co/api';
  }

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(res.status);
    }
    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }

  async getAllShips() {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformShip);
  }

  async getShip(id) {
    const ship = await this.getResource(`/starships/${id}/`);
    return this._transformShip(ship);
  }

  _getId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet(planet) {
    return {
      id: this._getId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    }
  }

  _transformPerson(person) {
    return {
      id: this._getId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor,
    }
  }

  _transformShip(ship) {
    return {
      id: this._getId(ship),
      name: ship.name,
      model: ship.model,
      manufacturer: ship.manufacturer,
      costInCredits: ship.costInCredits,
      length: ship.length,
      crew: ship.crew,
      passengers: ship.passengers,
      cargoCapacity: ship.cargoCapacity,
    }
  }
}
