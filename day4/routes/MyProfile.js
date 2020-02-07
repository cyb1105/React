import React from 'react';
import {Redirect} from 'react-router-dom'

const isLogged = false;

const MyProfile = () => {
    return (
        <div>
            {
                !isLogged &&  <Redirect to="/Login"/>
            }
            MyProfile
        </div>
    );
};

export default MyProfile;