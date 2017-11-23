import React, { Component } from 'react';
var request = require("request");

class SearchBar extends Component {

  constructor(props){
    super(props)
    this.setState({placeholder:"Search for place"})
  }

  componentWillMount(){
    this.setState({placeholder:"Search for place"})
  }

selectCity(place){
  const activity = this.refs.userInput.value
  if(activity===""){
    this.setState({placeholder:"Please enter activity"})
    alert("enter an activity, and then select a neighbourhood");
  } else
  this.props.handleClick(place,activity)
}
  render(){
    return(
      <div>
        <div className="col-lg-offset-3">
          <div className="input-group">
            <span className="input-group-btn">
                  <input ref = "userInput" type="text" className="form-control" placeholder="Enter an activity"/>
                  <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Select Neighbourhood
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" onClick={this.selectCity.bind(this,"Powell, San Francisco")} >Powell, San Francisco </a>
                  <a className="dropdown-item" onClick={this.selectCity.bind(this,"Nob Hill, San Francisco")}>Nob Hill</a>
                  <a className="dropdown-item" onClick={this.selectCity.bind(this,"Russian Hill, San Francisco")}>Russian Hill</a>
                  <a className="dropdown-item" onClick={this.selectCity.bind(this,"Polk Street, San Francisco")}>Polk Street</a>
                  </div>
                  </div>

            </span>
          </div>
    </div>
    </div>
    )
  }





}

export default SearchBar
