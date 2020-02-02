import React, {Component} from 'react';
import {ItemDetails} from "../ItemDetails/ItemDetails";
import {Record} from "../Record/Record";
import {Error} from "../Error/Error";
import {Row} from "../Row/Row";
import {HocItemList} from "../ItemList/ItemList";
import {Consumer} from '../DataServiceContext/DataServiceContext';

export class ShipsPage extends Component {
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
        {({getAllShips}) => {
          return (
            <HocItemList onItemSelected={this.onSelected} getData={getAllShips}>
              {(item) => (<span>{item.name}</span>)}
            </HocItemList>
          );
        }}
      </Consumer>
    );

    const details = (
      <Consumer>
        {({getShip, getShipImage}) => {
          return (
            <ItemDetails itemId={itemId} getData={getShip} getImageUrl={getShipImage}>
              <Record label="Model" field="model"/>
              <Record label="Manufacturer" field="manufacturer"/>
              <Record label="Cost" field="costInCredits"/>
              <Record label="Length" field="length"/>
              <Record label="Crew" field="crew"/>
              <Record label="Passengers" field="passengers"/>
              <Record label="Cargo capacity" field="cargoCapacity"/>
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