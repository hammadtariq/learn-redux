import React from 'react';
import {render} from 'react-dom';
import Counter from './components/Counter';

class App extends React.Component{

    constructor(){
        super();
        this.state = {
            val:0
        }
    }

    inc(){
        let nextState = this.state.val + 1;
        this.setState({val:nextState})  
    }

    dec(){
        let nextState = this.state.val - 1;
        this.setState({val:nextState}) 
    }

    render(){
       return (<Counter val={this.state.val} inc={this.inc.bind(this)} dec={this.dec.bind(this)} />)
    }

}


render(<App/>, document.getElementById('root'));