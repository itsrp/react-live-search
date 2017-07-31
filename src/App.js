import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RootComponent from './components/RootComponent/RootComponent';
import ChildComponent from './components/ChildComponent/ChildComponent';
import { initialState } from './index';

import { connect } from 'react-redux';


class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div className="App">

        <RootComponent data={this.props.my.searchResult} onTextChange={(e) => this.props.searchText(e.target.value)}></RootComponent>

      </div>
    );
  }
}



export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SEARCH_TEXT':

      return state = {
        ...state,
        searchResult: state.data.filter(item => {
          for (let columnName of state.findInColumns) {
            if (item[columnName].includes(action.payload)) {
              return true;
            }
          };
          return false;
          //(item.city.includes(action.payload)) || (item.name.includes(action.payload))
        })
      };
    default:
      return state;

  }
}


const mapStateToProps = (state) => {

  return { my: state.reducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchText: (searchText) => {
      dispatch({
        type: 'SEARCH_TEXT',
        payload: searchText
      });
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
