import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';
import { fetchTweets } from '../actions/tweetsActions';

@connect((store) => {
    return {
        user: store.user.user,
        fetchedUser: store.user.fetched,
        tweets: store.tweets.tweets
    };
})
class Layout extends Component {

    componentWillMount(){
        this.props.dispatch( fetchUser() )
        this.props.dispatch( fetchTweets() )
    }

    render() {
        let tweet = this.props.tweets.map(tweet => <li key={tweet.id}> {tweet.text} </li>)
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.user.name}</h1>
                <ul>
                    {tweet}
                </ul>
            </div>
        );
    }
    
}
 
 export default Layout;