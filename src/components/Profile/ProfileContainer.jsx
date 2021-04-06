import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setUserProfile} from "../../redux/profileReducer";
import {getProfile} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;

        getProfile(userId)
            .then(
                data => {
                    this.props.setUserProfile(data);
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
