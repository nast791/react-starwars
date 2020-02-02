import React, {Component} from 'react';
import {ItemDetails} from "../ItemDetails/ItemDetails";
import {Record} from "../Record/Record";
import {Error} from "../Error/Error";
import {Row} from "../Row/Row";
import {HocItemList} from "../ItemList/ItemList";
import {Consumer} from '../DataServiceContext/DataServiceContext';

export class PeoplePage extends Component {
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
        {({getAllPeople}) => {
          return (
            <HocItemList onItemSelected={this.onSelected} getData={getAllPeople}>
              {(item) => (<span>{item.name}</span>)}
            </HocItemList>
          );
        }}
      </Consumer>
    );

    const details = (
      <Consumer>
        {({getPerson, getPersonImage}) => {
          return (
            <ItemDetails itemId={itemId} getData={getPerson} getImageUrl={getPersonImage}>
              <Record label="Gender" field="gender"/>
              <Record label="Birth Year" field="birthYear"/>
              <Record label="Eye Color" field="eyeColor"/>
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