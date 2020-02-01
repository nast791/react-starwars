import React, {Component} from 'react';
import './ItemList.scss';
import {Spinner} from "../Spinner/Spinner";

export class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      itemsList: null,
    }
  }

  componentDidMount() {
    const {getData} = this.props;
    getData().then((itemsList) => {
      this.setState({
        itemsList
      });
    });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const {id} = item;
      const label = this.props.renderItem(item);
      return (
        <li className="list-group-item" key={id} onClick={() => this.props.onItemSelected(id)}>
          {label}
        </li>
      );
    });
  }

  render() {
    const {itemsList} = this.state;

    if (!itemsList) {
      return <Spinner/>
    }

    const items = this.renderItems(itemsList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}