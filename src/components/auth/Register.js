import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast }from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./../../firebaseConfig.js";

export default function Register() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();

	const handleSubmit =async()=> {
		await registerWithEmailAndPassword(name, email, password);
		if (!name || !email || password) {
			toast("Please enter all info!", {type: "error"});
		}
		
	}

	useEffect(() => {
		if (loading) return;
		if (user) navigate("/createblog");
	}, [user, loading]);

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