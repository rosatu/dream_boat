import React, { Component} from 'react';
import Trip from './components/Trip'
import './App.css';
import TripForm from './components/TripForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Plan A New Trip</h1>
          <TripForm />
        </header>
        <div>
          <Trip/>
        </div>
      </div>

    );
  }
}

export default App;
