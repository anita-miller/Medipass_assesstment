import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import {user} from '../User';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


import Pie from "./Pie"
import SearchBar from "./SearchBar"
import Pager from "./Pager"
import ChangeOrderBar from './ChangeOrderBar';


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

  nextPage = () => {
    this.setState({
      offset: this.state.offset + 1,
    });
    this.getPies(this.state.offset + 1, this.state.order, this.state.searchString);
  }
  
  prevPage = () =>{
    this.setState({
      offset: this.state.offset - 1,
    })
    this.getPies(this.state.offset - 1, this.state.order, this.state.searchString);
  }

  getStores = () => {
  }

  onSearchChange = (e) => {
    if(e.target.value){
      this.setState({
        searchString: e.target.value
      })
     } else {
        this.setState({
          searchString: ""
        })
      }
    
    this.getPies(this.state.offset, this.state.order, e.target.value)
  }


  changeOrder = () => {
    if(this.state.order === "asc"){
      let order = "desc";
      this.setState({
        order: order,
      })
      this.getPies(this.state.offset, order, this.state.searchString)
    } else {
      let order = "asc";
      this.setState({
        order: order,
      })
      this.getPies(this.state.offset, order, this.state.searchString)
    }
  }

  

  render(){
      return (
        <div>
        </div>
      )
  };

}

export default PieList;