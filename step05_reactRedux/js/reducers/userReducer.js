const initialState = {
    fetched: false,
    fetching: false,
    error: null,
    user:{
        id: null,
        name: null,
        age: null,
    },
}

export default function reducer( state=initialState, action ){
    switch(action.type){
        case "FETCH_USERS":{
             //use Object.assign or es7 rest parameters destructuring
            //return Object.assign({}, state, {fetching:true})
            return {...state, fetching:true}
        }
        case "FETCH_USER_FULFILLED":{
            return {...state, fetched:true, fetching:false, user: action.payload}
        }
        case "FETCH_USERS_REJECTED":{
           
            return {...state, fetching:false, error:action.payload}
        }
        case "ADD_USERS":{
            return {...state, fetching:false, error:action.payload}
        }
        default:{
            return state;
        }
    }
}

