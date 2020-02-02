import {Component} from "react";
import React from "react";
import {ErrorIndicator} from "../ErrorIndicator/ErrorIndicator";
import {Spinner} from "../Spinner/Spinner";

export const HocDataView = (View) => {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        data: null,
        loading: true,
        error: false
      }
    }

    componentDidMount() {
      const {getData} = this.props;
      this.setState({
        loading: true,
        error: false
      });
      getData().then((data) => {
        this.setState({
          data,
          loading: false
        });
      }).catch(() => {
        this.setState({
          error: true,
          loading: false
        });
      });
    }

    render() {
      const {data, loading, error} = this.state;
      if (loading) {
        return <Spinner/>
      }

      if (error) {
        return <ErrorIndicator/>
      }

      return <View {...this.props} data={data}/>
    }
  }
}