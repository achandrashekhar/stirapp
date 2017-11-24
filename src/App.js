import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import MainPage from './MainPage'
import SearchResult from './SearchResult'
import NavigateHome from './NavigateHome'
var location = [];
var request = require("request");



class App extends Component {

  constructor(props){
    super(props)

  }

componentWillMount(){
  this.setState({screenName:"search"})
}

 callFunc(info,results){
//console.log("got this from my sweetie pie child",info);
this.setState({screenName:results,venues:info})
    //console.log("what is the location I got",this.state.loc);
    //console.log("this",loc);
  //this.findNearBy(location,activity)
 }

 navhome(search){
   this.setState({screenName:search})
 }


  render() {
    if(this.state.screenName==="search"){
    return (
      <div className="App">
        <div className="intro">
        Explore SF neighbourhoods
        <p>    try typing in "coffee" or "burger" </p>
        </div>
        <MainPage getInfo = {this.callFunc.bind(this)} loca= {""}/>

      </div>
      );
    } else return(
      <div className="resultpage">

      <NavigateHome navigatehome = {this.navhome.bind(this)}/>
        <SearchResult venue = {this.state.venues} />


      </div>
    )

  }
}

export default App;
