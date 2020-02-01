import React, {Component} from 'react';
import {ItemList} from "../ItemList/ItemList";
import {PersonDetails} from "../PersonDetails/PersonDetails";
import {ErrorIndicator} from "../ErrorIndicator/ErrorIndicator";
import {DataService} from "../../services/DataService";
import {Row} from "../Row/Row"

export class PeoplePage extends Component {
  constructor() {
    super();
    this.dataService = new DataService();
    this.state = {
      selectedPerson: null,
      hasError: false
    }
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    const {hasError, selectedPerson} = this.state;
    if (hasError) {
      return <ErrorIndicator/>;
    }

    const itemList = (
      <ItemList onItemSelected={this.onPersonSelected} getData={this.dataService.getAllPeople} renderItem={(item) => (<span>{item.name}</span>)}/>
    );

    const personDetails = (
      <PersonDetails personId={selectedPerson}/>
    );

    return (
      <Row left={itemList} right={personDetails} />
    );
  }
}