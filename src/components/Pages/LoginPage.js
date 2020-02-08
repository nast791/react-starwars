import React from 'react';
import {Redirect} from 'react-router-dom';

export const LoginPage = ({isLoggedIn, onLogin}) => {
  if (isLoggedIn) {
    return <Redirect to="/react-starwars/"/>
  }
  return (
    <div className="jumbotron">
      <p>Login to see secret page</p>
      <button className="btn btn-primary" onClick={onLogin} type="button">Login</button>
    </div>
  )
}