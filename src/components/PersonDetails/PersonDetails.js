import React, {Component} from 'react';
import './PersonDetails.scss'
import {DataService} from "../../services/DataService";
import {Spinner} from "../Spinner/Spinner";

export class PersonDetails extends Component {
  constructor() {
    super();
    this.dataService = new DataService();
    this.state = {
      person: null,
      loading: true
    }
  }

  componentDidMount() {
    this.updatePerson();
  }

  updatePerson() {
    this.setState({ loading: true });
    const {personId} = this.props;
    if (!personId) return;
    this.dataService.getPerson(personId).then((person) => {
      this.setState({
        person,
        loading: false
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  render() {
    const {person, loading} = this.state;

    if (!person) {
      return <span>Select a person from a list</span>;
    }

    const spinner = loading ? <Spinner/> : null;
    const content = loading ? null : <PersonView person={person}/>;

    return (
      <div className="person-details card">
        {spinner}
        {content}
      </div>
    );
  }
}


const PersonView = ({person}) => {
  const { id, name, gender, birthYear, eyeColor } = person;
  return (
    <React.Fragment>
      <img className="person-image"
           src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}