import React from 'react';
import './App.scss';
import BrewMethods from './components/BrewMethods';
import { BREW_METHODS } from './constants';

class App extends React.Component {
  
  renderBrewMethods = () => {
    return BREW_METHODS.map(method => {
      return <BrewMethods method={method}/>
    })
  }

  render() {
    return (
      <div className='coffee-bean-background'>
        <h1 className='app-header custom-text'>Barista Helper</h1>
        <h3 className='instructions custom-text'>Pick a brew method</h3>
        {this.renderBrewMethods()}
        
      </div>
    );
  }

}

export default App;
