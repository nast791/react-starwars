import React, {Component} from 'react';
import PropTypes from "prop-types";
import './ItemList.scss';
import {HocDataView} from "../HocDataView/HocDataView";

export class ItemList extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
  }

  renderItems(arr) {
    return arr.map((item) => {
      const {id} = item;
      const label = this.props.children(item);
      return (
        <li className="list-group-item" key={id} onClick={() => this.props.onItemSelected(id)}>
          {label}
        </li>
      );
    });
  }

  render() {
    const { data } = this.props;
    const items = this.renderItems(data);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}

export const HocItemList = HocDataView(ItemList);