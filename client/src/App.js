import React from 'react';

import InfoCard from "./Components/InfoCard";
import Navbar from "./Components/Navbar";
import './App.css';
// import { response } from 'express';
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      info: []
    };
    console.log("constructor is running")
  };

  componentDidMount() {
    axios
    .get("http://localhost:5000/api/players")
    .then(response => {
      console.log("response data: ", response.data)
      this.setState({
        info: [...response.data]
      });
    });
  };

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
        <div className="main-card" data-testid="card">
          <h2>Player Data</h2>
          <div className="info">
            <InfoCard info={this.state.info} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

