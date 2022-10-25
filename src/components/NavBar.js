import React from 'react';
import {Link}  from "react-router-dom";

import { logout} from "./../firebaseConfig.js"


export default function NavBar( {isLoggedIn, user, tempName} ) {
	
	return (
		<div className="NavBar">
			<div>
				<Link className="navLink" to="/">
					<img src="./logo.png" alt="logo" className="logo" />
				</Link>
			</div>
			<div>
				<Link className="navLink" to="/newsletter">NewsLetter</Link>
			</div>
			<div>
				<Link className="navLink" to="/gallery">Gallery</Link>
			</div>
			<div>
				{user
					?
					<div>
					<div className="navLink">{tempName}</div>
					<div className="navLink" onClick={logout}>Logout</div>
					</div>
					:
					<Link className="navLink" to="/login">Login</Link>
				}
				
			</div>
		</div>
	)
}