import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';

import { createStore } from 'redux';
import {reducer} from './App';
import { combineReducers } from 'redux';


const actualData = [
      {id:1, name:"rp1", city:"pune"},
      {id:2, name:"rp2", city:"pune"},
      {id:3, name:"rp3", city:"pune1"}
    ];
export const initialState = {
    data: actualData,
    searchResult:actualData,
    findInColumns:["name", "city"]
  } 

const store = createStore(combineReducers({reducer}),initialState);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
