const initialState = {
    fetched:false,
    fetching:false,
    error:null,
    tweets:[],
}

export default function reducer( state=initialState, action ){
    switch(action.type){
        case "FETCH_TWEETS":{
             //use Object.assign or es7 rest parameters destructuring
            //return Object.assign({}, state, {fetching:true})
            return {...state, fetching:true}
        }
        case "FETCH_TWEETS_FULFILLED":{
            return {...state, fetched:true, fetching:false, tweets: action.payload}
        }
        case "FETCH_TWEETS_REJECTED":{
           
            return {...state, fetching:false, error:action.payload}
        }
        case "ADD_TWEETS":{
            return {...state, fetching:false, error:action.payload}
        }
        default:{
            return state;
        }
    }
}

