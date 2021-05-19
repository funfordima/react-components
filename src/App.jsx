import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import ButtonSandbox from './components/Button/ButtonSandbox';
import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React components
        </a>
        <nav className='nav'>
          <NavLink to='/'>
            Button component
          </NavLink>
        </nav>
      </header>

      <main className='main'>
        <Switch>
          <Route exact path='/' component={ButtonSandbox} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
