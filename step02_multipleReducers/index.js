import { createStore, combineReducers } from 'redux';

//note: Reducers must be pure i.e. never ever mutate any object or array
//      or else you will lose your previous states.

const userReducer = ( state={}, action )=>{
    switch(action.type){
        case "CHANGE_NAME":
            // provide immutable object with changes
            state = Object.assign({}, state, { name: action.payload })
            //state = {...state, name: action.payload}
            break;
        case "CHANGE_AGE":
            state = Object.assign({}, state, { age: action.payload })
            break;
    }
    return state;
}

const todoReducer = ( state=[], action )=>{
    switch(action.type){
        case "ADD_TODO":
            // provide immutable Array with new changes
            state = state.concat(action.payload)
        break;
    }
    return state;
}

const allReducers = combineReducers({todo:todoReducer, user:userReducer});

// we can declare initial state in second argument
const store = createStore(allReducers);

//subscribed to actions
store.subscribe(()=>{
    console.log('store changed:',store.getState());
})

//trigering actions

// Dispatch must always have an object with property type while payload is optional but its a standard to follow.
store.dispatch({type:"CHANGE_NAME",payload:"Hammad"});
store.dispatch({type:"CHANGE_AGE",payload:"35"});
store.dispatch({type:"ADD_TODO",payload:{text: "French: Bonjour => Hello"}});
store.dispatch({type:"ADD_TODO",payload:{text: "German: Hallo => Hello"}});