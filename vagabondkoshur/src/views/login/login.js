import React from 'react';
import './login.css';

const Login = (props) =>{

        return(

            <div class='koshurvagabond-views-login-form'>
                <h1 className="koshurvagabond-title-text">Koshur Vagabond!</h1>
                <input className='koshurvagabond-form-input koshurvagabond-views-formitem' type="text" name="username" placeholder="User Name"/>
                <input className='koshurvagabond-form-input koshurvagabond-views-formitem' type="password" name="password" placeholder="Password"/>
                <input className='koshurvagabond-form-input koshurvagabond-form-submit koshurvagabond-views-formitem' type="submit" value="Login"/>

            </div>

        );

}

export default Login;