import React,{useEffect, useState} from 'react';
import {Link,useNavigate}  from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth, logout} from "./../firebaseConfig.js"


export default function NavBar() {
	const [isLoggedIn, setIsLoggedIn] = useState();
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();

	useEffect(() => {
		if (loading) return;
		if (user) {
			setIsLoggedIn(true);
			reloadPage('createBlog');
		} else {
			setIsLoggedIn(false);
			reloadPage('');
		}
	}, [user, loading, isLoggedIn,]);

	const reloadPage = (location) => {
 		navigate(`/${location}`);
 	}
		
	return (
		<div className="NavBar">
			<div>
				<Link className="navLink" to="/">
					<img src="./logo.png" alt="logo" style={{width: "150px", height: "150px" }} />
				</Link>
			</div>
			<div>
				<Link className="navLink" to="/register">Register</Link>
			</div>
			<div>
				{isLoggedIn
					?
					<div id="logout" className="navLink" onClick={logout}>Logout</div>
					:
					<Link className="navLink" to="/login" >Login</Link>
				}
				
			</div>
		</div>
	)
}