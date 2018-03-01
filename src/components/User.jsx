import React, { Component } from 'react';
import {connect} from "react-redux";
import {actions , attemptGetGithubUser  } from "../actions/index";
var moment = require('moment-timezone');

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: "",
            location: "",
            followers: [],
            repositories: [],



        }
    }


    componentWillMount(){
        this.props.attemptGetUser("nelsonic");

    }
    componentWillReceiveProps(nextState){
        if(nextState.user.location){
            this.setState({location: nextState.user.location ,time:  moment().tz(nextState.user.location).format("LT") });
            setInterval(() => {
                this.setState({time: moment().tz(this.state.location).format("LT") })
            }, 60000);
        }
            if(nextState.followers){
                this.setState({followers: nextState.followers });
            }
        if(nextState.repositories){
            this.setState({repositories: nextState.repositories });
        }

    }
    render() {
        return (
            <div className="user" >
                <h1>Login:{this.props.user && this.props.user.login}</h1>
                <h2>Location: {this.props.user && this.props.user.location}</h2>
                <h2>Time: {this.state.time}</h2>
                <h3>ID:{this.props.user && this.props.user.id}</h3>
                <h3>Url:{this.props.user && this.props.user.url}</h3>
                <h3>Followers:{this.state.followers.length}</h3>
                <ul>
                {
                    this.state.followers.length && this.state.followers.map((follower,index) => {return (<li key = {index}>{follower.login}</li>)})
                }
                </ul>
                <h3>Repositories:{this.state.repositories.length}</h3>
                <ul>
                    {
                        this.state.repositories.length && this.state.repositories.map((follower,index) => {return (<li key = {index}>{follower.name}</li>)})
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps (state) {
    console.log(state)
    return {
        user: state.user,
        followers: state.followers,
        repositories: state.repositories,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        attemptGetUser: (username) => dispatch(attemptGetGithubUser(username)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
