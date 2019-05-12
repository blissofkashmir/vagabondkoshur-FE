import React from 'react';

const onInputNewUserName = () => {


}

const onInputNewPassword = () => {


}

const SignUp = (props) =>{

        return(

            <div className='koshurvagabond-views-signup-form'>
                <h1 className="koshurvagabond-title-text">Koshur Vagabond!</h1>

                <input className='koshurvagabond-form-input koshurvagabond-views-formitem' type="number" name="mobilenumber" 
                placeholder="+91-Mobile Number" onChange={(e)=>{onInputNewUserName(e, props)}}/>
                <input className='koshurvagabond-form-input koshurvagabond-views-formitem' type="password" name="password" 
                placeholder="Password" onChange={(e)=>{onInputNewPassword(e, props)}}/>
                <input className='koshurvagabond-form-input koshurvagabond-form-submit koshurvagabond-views-formitem koshurvagabond-views-login' 
                type="submit" value="Sign Up"
                onClick={(e)=>{props.signUpUser();}}/>
                
            </div>
        );

}

export default SignUp;