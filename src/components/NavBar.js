import React from 'react';
import {Link}  from "react-router-dom";

export default function NavBar() {
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
				<Link className="navLink" to="/login">Login</Link>
			</div>
		</div>
	)
}