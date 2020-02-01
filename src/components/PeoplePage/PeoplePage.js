import React, {Component} from 'react';
import {ItemList} from "../ItemList/ItemList";
import {PersonDetails} from "../PersonDetails/PersonDetails";
import {ErrorIndicator} from "../ErrorIndicator/ErrorIndicator";

export class PeoplePage extends Component {
  constructor() {
    super();
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
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={selectedPerson}/>
        </div>
      </div>
    );
  }
}