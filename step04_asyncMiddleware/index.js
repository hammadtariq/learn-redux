import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; //for nice looking logs 
import thunk from 'redux-thunk'; //for multiple asynchronous action
import axios from 'axios';

const initialState = {
    fetched:false,
    fetching:false,
    err:null,
    user:[],
}

const reducer = ( state=initialState, action )=>{
    switch(action.type){
        case "FETCH_USERS_START":
            state = Object.assign({}, state, {fetching:true})
        break;
        case "USER_RECIEVED":
            state = Object.assign({}, state, {fetched:true, fetching:false, user: action.payload})
        break;
        case "FETCH_USERS_ERROR":
            state = Object.assign({}, state, {fetching:false, err:action.payload})
        break;
    }
    return state;
}

const middlewear = applyMiddleware(thunk, logger());

const store = createStore(reducer, 0, middlewear);

store.dispatch((dispatch) => {
    //we are able to do multiple actions bcoz of thunk modules
    dispatch({type:"FETCH_USERS_START"})
    axios.get('http://rest.learncode.academy/api/wstern/users')
        .then((response)=>{
            dispatch({type:"USER_RECIEVED", payload:response.data})
        })
        .catch((err)=>{
            dispatch({type:"FETCH_USERS_ERROR", payload:response.data})
        })
});