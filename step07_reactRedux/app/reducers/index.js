import { createStore } from 'redux';

function counter(state,action) {
    switch(action.type){
        case "INCREMENT":
        return state + 1;
        case "DECREMENT":
        return state - 1;
        default:
        return state;
    }
}

export const store = createStore(counter,0)

store.subscribe(()=>{
    console.log("store changed: ",store.getState());
})
