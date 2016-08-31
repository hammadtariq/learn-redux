import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; //for nice looking logs 
import thunk from 'redux-thunk'; //for multiple synchronous action

const reducer = ( state, action )=>{
    switch(action.type){
        case "INC":
            state = state+1
        break;
        case "DEC":
            state = state-1
        break;
    }
    return state;
}

const middlewear = applyMiddleware(thunk, logger());

const store = createStore(reducer, 0, middlewear);

store.dispatch((dispatch)=>{
    dispatch({type:"INC"})
    dispatch({type:"INC"})
    dispatch({type:"DEC"})
});