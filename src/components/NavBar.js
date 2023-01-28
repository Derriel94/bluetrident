import React, {useEffect, useState} from 'react';
import {Link}  from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth, logout} from "./../firebaseConfig.js"




export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [tempName, setTempName] = useState('');
  const [mainUser, setMainUser] = useState();
  
	  useEffect(() => {
    if (loading) return;
    if (user) {
          if(user.displayName) {
          setTempName(user.displayName)
          } 
          if (user.displayName === "Derriel Collins"){
          setMainUser(true)
          }
      setIsLoggedIn(true);
     
    } else {
      setIsLoggedIn(false);
   
    }
  }, [user, loading, isLoggedIn,]);



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
				{mainUser
						?
						<div>
							<Link className="navLink" to="/createblog">Create Blog</Link>
						</div>
						:
						<div style={{display: "none"}}></div>

				}
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