import { createStore, applyMiddleware } from 'redux';

const reducer = ( state, action )=>{
    switch(action.type){
        case "INC":
            state = state+1
        break;
        case "DEC":
            state = state-1
        break;
        case "ERR":
            throw new Error("Error occured.")
    }
    return state;
}

const logger = (store)=>(next)=>(action)=>{
    console.log("action fired: ",action);
    //can change action type as well
    action.type = "DEC"
    next(action);
}

const error = (store)=>(next)=>(action)=>{
    try{
        next(action);
    }
    catch(e){
        console.log("arghh!: ",e)
    }
}

const middlewear = applyMiddleware(logger, error);

//create store have args:[reducer, initial state, middlewears]
const store = createStore(reducer, 0, middlewear);

//subscribed to actions
store.subscribe(()=>{
    console.log('store changed:', store.getState());
})

//trigering actions
store.dispatch({type:"INC"});
store.dispatch({type:"INC"});
store.dispatch({type:"DEC"});
store.dispatch({type:"INC"});
store.dispatch({type:"INC"});
store.dispatch({type:"INC"});
store.dispatch({type:"DEC"});
store.dispatch({type:"ERR"});