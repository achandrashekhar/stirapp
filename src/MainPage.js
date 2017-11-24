import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
var location = [];
var request = require("request");
const axios = require("axios");


class MainPage extends Component {

  constructor(props){
    super(props)
    this.setState({text:"",loc:[],loca:""})
  }



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
    limit: 10

}
}).then(response => {
  //let body = JSON.parse(response)
console.log(response.data.response.groups[0].items);
//let photosArray = this.getPhotoURL(response.data.response.groups[0].items)
//console.log(photosArray);
this.props.getInfo(response.data.response.groups[0].items,"results")
});


  };

  getPhotoURL(venues){
    let photosArray = {
      1:"",
      2:"",
      3:""
    }
    Object.keys(venues).map(idx => {
      console.log(venues[idx].venue.id);
    let  url = 'https://api.foursquare.com/v2/venues/'+venues[idx].venue.id+'/photos'
    console.log(url);
      axios.get(url,{
    params:{
      client_id: 'NJO25SYKFJCONZVDEUEWJHOCVY0KSDQPIAOWK4P1E3TQ1NQF',
      client_secret: 'RHVV3XPZTUJYL10U54Y2LJK532T52GDZKP3X3NHDDI2V0PBR',
      v: '20170801',
      limit: 1,
      offset:1
  }
  }).then(response => {
    //let body = JSON.parse(response)
  //console.log("photo response",response.data.response.photos.items[0]);
  const URL = response.data.response.photos.items[0].prefix+'200x200'+response.data.response.photos.items[0].suffix
  var element = {}
  element.id = idx;
element.url = URL;
  photosArray[idx] = element
  //console.log(URL);
  });
}
)
 return photosArray

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
