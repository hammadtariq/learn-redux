import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; 
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'

import reducer from './reducers/index';

const middlewear = applyMiddleware(thunk, logger(), promise());

export default createStore(reducer, middlewear);