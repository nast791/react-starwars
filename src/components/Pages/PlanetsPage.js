import React, {Component} from 'react';
import {ItemDetails} from "../ItemDetails/ItemDetails";
import {Record} from "../Record/Record";
import {Error} from "../Error/Error";
import {Row} from "../Row/Row";
import {HocItemList} from "../ItemList/ItemList";
import {Consumer} from '../DataServiceContext/DataServiceContext';

export class PlanetsPage extends Component {
  constructor() {
    super();
    this.state = {
      itemId: null,
    }
  }

  onSelected = (id) => {
    this.setState({
      itemId: id
    });
  };

  render() {
    const {itemId} = this.state;

    const itemList = (
      <Consumer>
        {({getAllPlanets}) => {
          return (
            <HocItemList onItemSelected={this.onSelected} getData={getAllPlanets}>
              {(item) => (<span>{item.name}</span>)}
            </HocItemList>
          );
        }}
      </Consumer>
    );

    const details = (
      <Consumer>
        {({getPlanet, getPlanetImage}) => {
          return (
            <ItemDetails itemId={itemId} getData={getPlanet} getImageUrl={getPlanetImage}>
              <Record label="Population" field="population"/>
              <Record label="Rotation period" field="rotationPeriod"/>
              <Record label="Diameter" field="diameter"/>
            </ItemDetails>
          );
        }}
      </Consumer>
    );

    return (
      <Error>
        <Row left={itemList} right={details} />
      </Error>
    );
  }
}