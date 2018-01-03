import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
var location = [];
var request = require("request");
const axios = require("axios");

let photosArray = {

}

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
    limit: 10

}
}).then(response => {
  //let body = JSON.parse(response)
console.log(response.data.response.groups[0].items);
//let r = this.getSomeResult(response.data.response.groups[0].items)
//console.log("I am",r);
let venues = response.data.response.groups[0].items
const ops = [];
let resu = []
for (let page = 0; page < 10; page += 1) {
  let  url = 'https://api.foursquare.com/v2/venues/'+venues[page].venue.id+'/photos'
  let op = axios.get(url,{
params:{
  client_id: 'NJO25SYKFJCONZVDEUEWJHOCVY0KSDQPIAOWK4P1E3TQ1NQF',
  client_secret: 'RHVV3XPZTUJYL10U54Y2LJK532T52GDZKP3X3NHDDI2V0PBR',
  v: '20170801',
  limit: 1,
  offset:1
}
})
  ops.push(op);
}

let res = axios.all(ops).then(axios.spread((...args) => {
    this.props.getInfo(response.data.response.groups[0].items,"results",args)
})).then()



});


  };






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
          <div className = "footer">
          For the love of ☕️ and 🌉
          <div className="links">
          <p>Stalk me <a href="https://www.linkedin.com/in/aishwarya-chandrashekhar-4342b48b/"> LinkedIn</a>
          <a href="https://www.quora.com/profile/Aishwarya-Chandrashekhar">   Quora</a>
          <a href="https://cashenash.wordpress.com/about/">   Blog</a>
          </p>
          </div>
          </div>

      </div>
    );
  }
}

export default MainPage;
