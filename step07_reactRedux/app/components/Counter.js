import React, { Component } from 'react';
import { render } from 'react-dom';
let myStore = require('./../reducers/index');

class Counter extends Component {

    inc(){
        myStore.store.dispatch({type:"INCREMENT"})
    }
    
    dec(){
        myStore.store.dispatch({type:"DECREMENT"})
    }

    render() {
        let btn = {width:"30px",height:"30px",margin:"10px"}
         console.log("state:",myStore.store)
        return (
            <div>
                {myStore.store.getState()}
                <br/>
                <button className={btn} type="button" onClick = { this.inc } >+</button>  
                <button className={btn} type="button" onClick = { this.dec } >-</button>  
            </div>
        );
    }
    
}
 
 export default Counter;