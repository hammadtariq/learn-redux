import { createStore } from 'redux';

const reducer = ( state=0, action )=>{
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


const store = createStore(reducer);

//subscribed to actions
store.subscribe(()=>{
    console.log(`store changed: ${store.getState()}`);
})

//trigering actions
store.dispatch({type:"INC"});
store.dispatch({type:"INC"});
store.dispatch({type:"DEC"});
store.dispatch({type:"INC"});
store.dispatch({type:"INC"});
store.dispatch({type:"INC"});
store.dispatch({type:"DEC"});