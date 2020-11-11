/* eslint-disable */
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import GoogleBtn from "../GoogleBtn/GoogleBtn.js";

import './Signin.scss';

function Signin(props) {
	return (
		<>
			<main id="signinPage">
				<div className={`container ${props.switchToSignup ? "right-panel-active": ""}`} id="container">
					<div className="form-container sign-up-container">
						<form onSubmit={props.handleSubmit} action="#">
							<h1>Create Account</h1>
							<div className="social-container">
							{/*
								<a href="#" className="social-icon"><i className="fa fa-github fa-2x"></i></a>
								<a href="#" className="social"><i className="fa fa-google fa-2x"></i></a>
								*/}

							</div>
							<span>or use your email for registration</span>
							<input onChange={props.handleChange} required type="text" placeholder="Username" name="username" />
							<input onChange={props.handleChange} required type="email" placeholder="Email" name="email" />
							<input onChange={props.handleChange} required type="password" placeholder="Password" name="password" />
							<input onChange={props.handleChange} required type='password' placeholder='Confirm Password' className='input-line full-width'></input>

							{ props.switchToSignup &&
								<center>
									<ClipLoader
										sizeUnit="px"
										size={20}
										color="#123abc"
										loading={props.isLoading}
										/>
								</center>
						}
						{ props.switchToSignup && <h6>{ props.msg} </h6>}

							<button  >Sign Up</button>
						</form>
					</div>
					<div className="form-container sign-in-container">
					<form onSubmit={props.handleSubmit} action="#">
					<h1>Sign in</h1>
					<div className="social-container">
					<div><GoogleBtn user={props.user}/></div>
						{ /*
						<a href="#" className="social"><i className="fa fa-github fa-2x"></i></a>
						<a href="#" className="social"><i className="fa fa-google fa-2x"></i></a>
						*/ }
					</div>
					<span>or use your account</span>
					<input onChange={props.handleChange} type="username" placeholder="username" name="username" />
					<input onChange={props.handleChange} type="password" placeholder="Password" name="password"  />
					<a href="#">Forgot your password?</a>

					{ !props.switchToSignup &&
						<center>
							<ClipLoader
								sizeUnit="px"
								size={20}
								color="#123abc"
								loading={props.isLoading}
								/>
						</center>
				}

				{ !props.switchToSignup && <h6>{ props.msg} </h6>}

					<button >Sign In</button>
				    </form>
			        </div>

					<div className="overlay-container">
						<div className="overlay">
							<div className="overlay-panel overlay-left">
								<h1>Welcome Back!</h1>
								<p>To keep connected with us please login with your personal info</p>
								<button onClick={() => props.setSwitchToSignup(false)} className="ghost" id="signIn">Sign In</button>
							</div>
							<div className="overlay-panel overlay-right">
								<h1>Hello, Friend!</h1>
								<p>Enter your personal details and start journey with us</p>
								<button onClick={() => props.setSwitchToSignup(true)} className="ghost" id="signUp">Sign Up</button>
							</div>
						</div>
					</div>
				</div>
			</main>

		</>
	);
}

export default Signin;
