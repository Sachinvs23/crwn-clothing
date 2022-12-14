import React from "react";

import './sign-in.styles.scss';

import FormInput from "../form-input/form-input.component";

import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.util";

class SignIn extends React.Component{
    constructor(){
        super();

        this.state = {
            email :'',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState( { email:'', password: '' } )
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>


            <form onSubmit={this.handleSubmit}> 
                <FormInput 
                    name='email' 
                    type="email" 
                    handleChange={this.handleChange} 
                    value={this.state.email} 
                    label="Email"
                    required />
                <FormInput  
                    name='password' 
                    type="password" 
                    handleChange={this.handleChange} 
                    value={this.state.password}
                    label= "Password" 
                    required />

                <CustomButton type="submit"> Sign In </CustomButton> 
                <CustomButton onClick={ signInWithGoogle }>{''}Sign in with Google{''}</CustomButton>
            </form>
        </div>
        )
        
    }
}

export default SignIn;