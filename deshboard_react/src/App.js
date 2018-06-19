import React, { Component } from 'react';
import Category from './componets/Category.js';
import logo from './logo.svg';
import './public/css/App.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
          <Category name="BTC" items={['Ùltimas 24 Hoas','ùltimos 12 Meses']} icon="file-text-o"/>
          <Category name="ETH"  items={['Ùltimas 24 Hoas','ùltimos 12 Meses']} icon="file-text-o"/>
        </ul>
      </div>
    );
  }
}


export default App;
