import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var request = require("request");

class App extends Component {

  FindByKeyWord (req, res, next) {

      var API_KEY = "AIzaSyAF3uz9TVGZ-PqhRXnRqFl4QR4Q32eaXzs";
      var BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json?address=";

      var address = "Powell Street, San Francisco CA";

      var url = BASE_URL + address + "&key=" + API_KEY;

      request(url, function (error, response, body) {
          if (!error && response.statusCode == 200) {
              console.log(body);
          }
          else {
              // The request failed, handle it
              console.log("uh oh");
          }
      });
  };

componentDidMount(){

this.FindByKeyWord();

}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
