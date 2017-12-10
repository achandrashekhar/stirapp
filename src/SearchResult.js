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

  componentDidMount(){

    //photo = this.props.photosArray
    //<a href="#" className="btn btn-primary">Button</a>

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
  //  console.log("this is",this.props.photo);
//    let URL=this.props.photo[idx]
let URL =this.props.photo[idx].data.response.photos.items[0].prefix+'200x200'+this.props.photo[idx].data.response.photos.items[0].suffix
return URL
  }

  render(){
    return(

      Object.keys(this.props.venue).map((c,idx)=>{
        if(this.props.venue!==undefined){
          return(
            <div className="card w-75">
              <div className="card-block">
               <img className="card-img-top" src={this.getPhoto(idx)} alt={"hmm"}/>
               <center>
              <h3 className="card-title">{this.props.venue[idx].venue.name}</h3>
              <p className="card-text">Address: {this.props.venue[idx].venue.location.address}</p>
              <p className="card-text">{this.getHours(idx)}</p>
              <p className="card-text"><small class="text-muted">{this.getMenu(this.props.venue[idx])}</small></p>
              <p className="card-text"><small class="text-muted"><a href={this.props.venue[idx].venue.url}>Website</a></small></p>
              </center>
            </div>
          </div>
          )
        }
  })
)

}


}

export default SearchResult
