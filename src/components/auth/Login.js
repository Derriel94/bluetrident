import React,{ useState } from 'react';
import {Link}  from "react-router-dom";

export default function Login() {
	const [email, setEmail] = useState("email");
	const [password, setPassword] = useState("password");
	const handleLogin =async()=> {

	}

	return (
		<div className="Login">
			<div>
			<div>
				<p>Enter Email</p>
				<input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} />
			</div>
			<div>
				<p>Enter Password</p>
				<input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} />
			</div>
				<button type="submit" className="loginSubmit" onClick={handleLogin}>Login</button>
			</div>
			<div>
				<Link className="navLink" style={{color:"white"}} to="/register">Or Register.</Link>
			</div>
		</div>
	)
}