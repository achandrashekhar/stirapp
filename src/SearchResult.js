import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
var photo = [];
var request = require("request");
const axios = require("axios");

/*
This component displays all the search results
*/
class SearchResult extends Component {

  constructor(props){
    super(props)
  }

  // componentWillMount(){
  //   let photos = []
  //   Object.keys(this.props.venue).map(idx=>{
  //     let  url = 'https://api.foursquare.com/v2/venues/'+this.props.venue[idx].venue.id+'/photos'
  //       axios.get(url,{
  //     params:{
  //       client_id: 'NJO25SYKFJCONZVDEUEWJHOCVY0KSDQPIAOWK4P1E3TQ1NQF',
  //       client_secret: 'RHVV3XPZTUJYL10U54Y2LJK532T52GDZKP3X3NHDDI2V0PBR',
  //       v: '20170801',
  //       limit: 1,
  //       offset:1
  //   }
  //   }).then(response => {
  //     //let body = JSON.parse(response)
  //   //console.log("photo response",response.data.response.photos.items[0]);
  //   const URL = response.data.response.photos.items[0].prefix+'200x200'+response.data.response.photos.items[0].suffix
  //   photos = this.state.photos
  //   photo.push(URL)
  //   this.setState({photos:photo})
  //   });
  //   })
  // }

  componentDidMount(){
    //console.log("got this from parent",this.props.photo[0].url);
    //console.log("the response is",this.props.responsePhoto);
    //photo = this.props.photosArray
    //<a href="#" className="btn btn-primary">Button</a>
    console.log(this.props);
  }

  getMenu(venue){
    if(venue.venue.hasMenu===true){
      return <a href={venue.venue.menu.url}>Menu Link</a>
    } else {
      return "No Menu URL available"
    }
  }

  getHours(idx){
    if(this.props.venue[idx].venue.hours!=undefined)
    return this.props.venue[idx].venue.hours.status
    else return ""
  }

  getPhoto(idx){
    console.log("prop",this.props.res);
    //const URL = this.props.resp.data.response.photos.items[0].prefix+'200x200'+this.props.resp.data.response.photos.items[0].suffix

}

  render(){
    return(

      Object.keys(this.props.venue).map((c,idx)=>{
        if(this.props.venue!==undefined){
          return(
            <div className="card w-75">
              <div className="card-block">
               <img className="card-img-top" src={""} alt={"ugh"}/>
              <h3 className="card-title">{this.props.venue[idx].venue.name}</h3>
              <p className="card-text">Address: {this.props.venue[idx].venue.location.address}</p>
              <p className="card-text">{this.getHours(idx)}</p>
              <p className="card-text"><small class="text-muted">{this.getMenu(this.props.venue[idx])}</small></p>
              <p className="card-text"><small class="text-muted"><a href={this.props.venue[idx].venue.url}>Website</a></small></p>
            </div>
          </div>
          )
        }
  })
)

}


}

export default SearchResult
