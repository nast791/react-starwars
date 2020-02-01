import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App/App';

ReactDOM.render(<App/>, document.getElementById('root'));

/* Методы жизненного цикла:

MOUNTING
constructor() => render() => componentDidMount()

UPDATES
New Props
          => render() => componentDidUpdate(prevProps, prevState)
setState()

UNMOUNTING
componentWillUnmount()

ERROR
componentDidCatch(error, info)

*/