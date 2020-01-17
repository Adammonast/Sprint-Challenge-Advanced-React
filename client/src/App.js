import React from 'react';
import data from "./data";
import InfoCard from "./Components/InfoCard";
import Navbar from "./Components/Navbar";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      info: []
    };
    console.log("constructor is running")
  }

  componentDidMount() {
    this.setState({ 
      info: data 
    });
    console.log("component did mount is running", data);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "component did update is running",
      prevState.info,
      this.state.info
    );
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <Navbar />
          <h1>2019 Women's Olympics Players</h1>
        </div>
        <div className="card" data-testid="card">
          <h2>Player Data</h2>
          <div className="card-info">
            <InfoCard info={this.state.info} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

