import React from 'react';
import FbLogin from './fb-login/fb-login';

import './login.css';


const onInputUserName = (e, props) => {

    props.onInputUserName(e.target.value);

}

const onInputPassword = (e, props) => {

    props.onInputPassword(e.target.value);

}

const Login = (props) =>{

        return(

            <div className='koshurvagabond-views-login-form'>
                <h1 className="koshurvagabond-title-text">Koshur Vagabond!</h1>

                <input className='koshurvagabond-form-input koshurvagabond-views-formitem' type="text" name="username" 
                placeholder="User Name" onChange={(e)=>{onInputUserName(e, props)}}/>
                <input className='koshurvagabond-form-input koshurvagabond-views-formitem' type="password" name="password" 
                placeholder="Password" onChange={(e)=>{onInputPassword(e, props)}}/>
                <input className='koshurvagabond-form-input koshurvagabond-form-submit koshurvagabond-views-formitem koshurvagabond-views-login' 
                type="submit" value="Login"
                onClick={(e)=>{props.validateUser();}}/>
                <a className='koshurvagabond-link' href='#'>Become a Koshur Vagabond!</a>


                <div className='koshurvagabond-views-login-socialmedia'>
                    <FbLogin></FbLogin>
                </div>
                
                
            </div>
        );

}

export default Login;