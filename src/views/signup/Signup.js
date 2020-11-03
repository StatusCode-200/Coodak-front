/* eslint-disable */
import React from "react";

import './Signup.css';

function signUpButton() {
    const container = document.getElementById('container');
    container.classList.add("right-panel-active");
}

function signInButton() {
    const container = document.getElementById('container');
    container.classList.remove("right-panel-active");
}

function Signup(props) {
    return (
        <>
     
 <div className="container" id="container">
	<div className="form-container sign-up-container">
		<form onSubmit={props.handleSubmit} action="#">
			<h1>Create Account</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input onChange={props.handleChange} required type="text" placeholder="Name" name="username" />
			<input onChange={props.handleChange} required type="email" placeholder="Email" name="email" />
			<input onChange={props.handleChange} required type="password" placeholder="Password" name="password" />
            <input onChange={props.handleChange} required type='password' placeholder='Confirm Password' className='input-line full-width'></input>

			<button  >Sign Up</button>
		</form>
	</div>
	{/* <div className="form-container sign-in-container">
		<form onSubmit={props.handleSubmit} action="#">
			<h1>Sign in</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input onChange={props.handleChange} type="username" placeholder="username" name="username" />
			<input onChange={props.handleChange} type="password" placeholder="Password" name="password"  />
			<a href="#">Forgot your password?</a>
			<button >Sign In</button>
		</form>
	</div> */}

	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button onClick={signInButton} className="ghost" id="signIn">Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button onClick={signUpButton} className="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>


        </>
    );
}

export default Signup;
