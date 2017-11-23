import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import MainPage from './MainPage'
var location = [];
var request = require("request");


class App extends Component {

  constructor(props){
    super(props)
    this.setState({text:"",loc:[],loca:""})
  }



  FindByKeyWord (place,activity,req, res, next) {

    let loc,lat,lng

      var API_KEY = "AIzaSyAF3uz9TVGZ-PqhRXnRqFl4QR4Q32eaXzs";
      var BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
      console.log("you selected ",place);
      var address = place;

      var url = BASE_URL + address + "&key=" + API_KEY;

      request(url, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            let myAddress = []
            //const something = body[1]
            //let obj = response.body

            // console.log("what",body.length); //I get the response here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          let obj=   JSON.parse(body)
          let geometry = obj.results[0].geometry;
          lat = geometry.location.lat.toString()
          lat = lat.concat(',')
          lng = geometry.location.lng.toString()
          loc = lat.concat(lng)
          location[0] = loc
          console.log("hhh",loc);
          //this.findNearBy.bind(this,loc,activity)

        }
          else {
              // The request failed, handle it
              console.log("uh oh");
          }

      });

      //this.setState({loc:location})

  };



  findNearBy(location,activity){
    console.log("I got called");
    request({
  url: 'https://api.foursquare.com/v2/venues/explore',
  method: 'GET',
  qs: {
    client_id: 'NJO25SYKFJCONZVDEUEWJHOCVY0KSDQPIAOWK4P1E3TQ1NQF',
    client_secret: 'RHVV3XPZTUJYL10U54Y2LJK532T52GDZKP3X3NHDDI2V0PBR',
    ll: location,
    query: activity,
    v: '20170801',
    limit: 1
  }
}, function(err, res, body) {
  if (err) {
    console.error(err);
  } else {
    console.log(body);
  //  bod=body;
    //this.setState({text:body})
  }
});


  };



 callFunc(info){
console.log("got this from my sweetie pie child",info);
    //console.log("what is the location I got",this.state.loc);
    //console.log("this",loc);
  //this.findNearBy(location,activity)
 }


  render() {
    return (
      <div className="App">

        <MainPage getInfo = {this.callFunc.bind(this)} loca= {""}/>

      </div>
    );
  }
}

export default App;
