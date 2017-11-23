import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import MainPage from './MainPage'
import SearchResult from './SearchResult'
var location = [];
var request = require("request");



class App extends Component {

  constructor(props){
    super(props)

  }

componentWillMount(){
  this.setState({screenName:"search"})
}

 callFunc(info,id,results){
console.log("got this from my sweetie pie child",info,id);
this.setState({screenName:results})
    //console.log("what is the location I got",this.state.loc);
    //console.log("this",loc);
  //this.findNearBy(location,activity)
 }


  render() {
    if(this.state.screenName==="search"){
    return (
      <div className="App">

        <MainPage getInfo = {this.callFunc.bind(this)} loca= {""}/>

      </div>
      );
    } else return(
      <div className="App">

        <SearchResult getInfo = {this.callFunc.bind(this)} loca= {""}/>

      </div>
    )

  }
}

export default App;
