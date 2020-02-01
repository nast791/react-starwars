import React, {Component} from 'react';
import './ItemList.scss';
import {DataService} from "../../services/DataService";
import {Spinner} from "../Spinner/Spinner";

export class ItemList extends Component {
  constructor() {
    super();
    this.dataService = new DataService();
    this.state = {
      peopleList: null,
    }
  }

  componentDidMount() {
    this.dataService.getAllPeople().then((peopleList) => {
      this.setState({
        peopleList
      });
    });
  }

  renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <li className="list-group-item" key={id} onClick={() => this.props.onItemSelected(id)}>
          {name}
        </li>
      );
    });
  }

  render() {
    const {peopleList} = this.state;

    if (!peopleList) {
      return <Spinner/>
    }

    const items = this.renderItems(peopleList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}