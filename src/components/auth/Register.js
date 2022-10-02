import React,{ useState } from 'react';
import {Link}  from "react-router-dom";

export default function Register() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit =async()=> {

	}

	return (
		<div className="Register">
			<div>
				<p>Enter Name</p>
				<input type="text" name="name" onChange={(e)=>setName(e.target.value)} />
			</div>
			<div>
				<p>Enter Email</p>
				<input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} />
			</div>
			<div>
				<p>Enter Password</p>
				<input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} />
			</div>
			<div>
				<button type="submit" name="submit" onClick={handleSubmit}>Submit</button>
			</div>
			<div>
				<Link className="navLink" style={{color:"white"}} to="/login">Or Login.</Link>
			</div>
		</div>
	)
}