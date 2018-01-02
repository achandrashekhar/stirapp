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
  this.setState({screenName:"search",photos:{}})
}

 callFunc(info,results,photosArray){
//console.log("got this from my sweetie pie child",info);
console.log("what is this that I get",photosArray);
this.setState({screenName:results,venues:info,photos:photosArray})
    //console.log("what is the location I got",this.state.loc);
    //console.log("this",loc);
  //this.findNearBy(location,activity)
 }

 navhome(search){
   this.setState({screenName:search,photos:{}})
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
      <div>

      <NavigateHome navigatehome = {this.navhome.bind(this)}/>
      <div className="resultpage">
        <SearchResult venue = {this.state.venues} photo={this.state.photos}/>
        </div>

      </div>
    )

  }
}

export default App;
