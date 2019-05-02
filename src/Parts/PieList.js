import React, { Component } from 'react';

class PieList extends Component{

  state = {
    pies: [],
    stores: [],
    offset: 1,
    order: "asc",
    searchString: ""
  };

  constructor(){
    super();
    this.getPies(this.state.offset, this.state.order, this.state.searchString);
    this.getStores();
  }

  getPies = (pageOffset, order, searchString) => {
  }


  getStores = () => {
  }

  onSearchChange = (e) => {
  }


  changeOrder = () => {
  }

  

  render(){
      return (
        <div>
        </div>
      )
  };

}

export default PieList;