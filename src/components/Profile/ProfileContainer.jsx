import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import axios from "axios";
import {setUserProfile} from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/14272")
            .then(
                response => {
                    this.props.setUserProfile(response.data);
                }
            );
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let mapDispatchToProps = {
    setUserProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
