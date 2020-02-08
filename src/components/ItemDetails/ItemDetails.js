import React, {Component} from 'react';
import './ItemDetails.scss'
import {Spinner} from "../Spinner/Spinner";

export class ItemDetails extends Component {
  constructor() {
    super();
    this.state = {
      item: null,
      image: null,
      loading: true
    }
  }

  componentDidMount() {
    this.updateItem();
  }

  updateItem() {
    this.setState({ loading: true });
    const {itemId, getData, getImageUrl} = this.props;
    if (!itemId) return;
    getData(itemId).then((item) => {
      this.setState({
        item,
        image: getImageUrl(item),
        loading: false
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  render() {
    const {item, image, loading} = this.state;

    if (!item) {
      return <span>Select a item from a list</span>;
    }

    const spinner = loading ? <Spinner/> : null;
    const content = loading ? null : <ItemView name={item.name} image={image} list={this.props.children} item={item}/>;

    return (
      <div className="person-details card">
        {spinner}
        {content}
      </div>
    );
  }
}


const ItemView = ({item, name, image, list}) => {
  return (
    <React.Fragment>
      <img className="person-image" src={image} />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(list, (child) => {
              return React.cloneElement(child, {item});
            })
          }
        </ul>
      </div>
    </React.Fragment>
  )
}