import * as React from 'react';
import './App.css';

import Table from 'antd/lib/table'

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <Table>
          <Table.Column title="some long enough text"/>
          <Table.Column title="some long enough text"/>
          <Table.Column title="some long enough text"/>
          <Table.Column render={/* type () here and wait for intellisense, then use arrows */} width={0}/>
          <Table.Column title="some long enough text"/>
          <Table.Column title="some long enough text"/>
          <Table.Column title="some long enough text"/>
        </Table>
        </p>
      </div>
    );
  }
}

export default App;
