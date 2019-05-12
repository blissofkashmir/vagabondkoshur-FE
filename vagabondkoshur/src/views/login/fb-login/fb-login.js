import React from 'react';
import FacebookLogin from 'react-facebook-login';


const responseFacebook = (response) => {
    console.log(response);
}


const FbLogin = (props) =>{

        return(

            <React.Fragment>
                <FacebookLogin
                appId="383262298942413"
                fields="name,email,picture"
                callback={responseFacebook} />
            </React.Fragment>

        );

}

export default FbLogin;