import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
var location = [];
var request = require("request");
'use strict';
var Q = require('q');
var defer = Q.defer();
var promise = defer.promise;
const axios = require("axios");
var rp = require('request-promise');
let anArrayOfPhotos = []

/*
This component makes all the necessary GET requests to Google and FourSquare
*/
class MainPage extends Component {

  constructor(props){
    super(props)
    this.setState({text:"",loc:[],loca:""})
  }




/*
  This function makes a GET request to the Google Maps geocode API to get the latitude and longitude of a selected neighbourhood
*/
  FindByKeyWord (place,activity,req, res, next) {

    const url =
    "https://maps.googleapis.com/maps/api/geocode/json?address="+place;
  axios
    .get(url)
    .then(response => {
      console.log(
        `City: ${response.data.results[0].formatted_address} -`,
        `Latitude: ${response.data.results[0].geometry.location.lat} -`,
        `Longitude: ${response.data.results[0].geometry.location.lng}`
      );
      let lat = response.data.results[0].geometry.location.lat.toString()
      let lng = response.data.results[0].geometry.location.lng.toString()
      let location1 = lat+","+lng
    //  location1.concat(lng)
      console.log("whyyy",location1);
      this.setState({loca:location1})
      this.findNearBy(this.state.loca,activity)
    })
    .catch(error => {
      console.log(error);
    });

  };

/*
This function makes a GET request to the foursquare API and gets a list of suggestions - I have limited the number to 10.
*/

  findNearBy(location,activity){
    let bod
  let  url = 'https://api.foursquare.com/v2/venues/explore'
    console.log("I got called inside findNearBy ",location,activity);
    axios.get(url,{
  params:{


    client_id: 'NJO25SYKFJCONZVDEUEWJHOCVY0KSDQPIAOWK4P1E3TQ1NQF',
    client_secret: 'RHVV3XPZTUJYL10U54Y2LJK532T52GDZKP3X3NHDDI2V0PBR',
    ll: location,
    query: activity,
    v: '20170801',
    limit: 3

}
}).then(response => {
  //let body = JSON.parse(response)
console.log(response.data.response.groups[0].items);
//let r = this.testFunc(response.data.response.groups[0].items)
//console.log(r);
this.props.getInfo(this,response.data.response.groups[0].items,"results")

//console.log(photosArray);

});


  };


testFunc(venues){

}



  getPhotoURL(venues){
    //let photosArray={}
    Object.keys(venues).map(idx => {
      console.log(venues[idx].venue.id);
    let  url = 'https://api.foursquare.com/v2/venues/'+venues[idx].venue.id+'/photos'
    console.log(url);
      axios.get(url,{
    params:{
      client_id: '4T52ZARTODYF2J2RYTUSQVW1JJFHN34QVLO4HPSGMPK5JZJ5',
      client_secret: '2CF5V24SFHMAF5Q3B2VCWAZ4TLZJ5GQGAVZDKYKQL0LK21MN',
      v: '20170801',
      limit: 1,
      offset:1
  }
  }).then(response => {
    //let body = JSON.parse(response)
  //console.log("photo response",response.data.response.photos.items[0]);
  const URL = response.data.response.photos.items[0].prefix+'200x200'+response.data.response.photos.items[0].suffix
//  URL.replace(/['"]+/g, '')
  var element = {}
  element.id = idx;
  let idxString = idx.toString()
element.url = URL;
  anArrayOfPhotos.push(element)
  //photosArray[idx] = element
  //console.log(URL);
  this.props.getInfo(venues,"results",anArrayOfPhotos,response)
  });
}
)
//this.setState({photosArray:tempPhotosArray})
//console.log("inside the child",this.state.photosArray);

  }



 setPlace(place,activity){
   //this.setState({place:place})
   console.log("what ",place, activity);
    this.FindByKeyWord(place,activity);
    //this.props.getInfo(this.state.loca)
    //console.log("what is the location I got",this.state.loc);
    //console.log("this",loc);
  //this.findNearBy(location,activity)
 }


  render() {
    return (
      <div>

        <SearchBar handleClick = {this.setPlace.bind(this)}/>

      </div>
    );
  }
}

export default MainPage;
