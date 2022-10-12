import React from 'react'
import NavBar from './NavBar.js';

export default function Footer() {
	return (
		<div id="footerComponent">
			<NavBar />
			<div className="socialDiv">
				<a href="https://www.facebook.com/profile.php?id=100080613782116" target="_blank" rel="noreferrer" className="navLink">
		          <img src="./fb.png" alt="facebook" />
		        </a>
		        <a href="https://www.linkedin.com/in/techmospage/" target="_blank" rel="noreferrer" className="navLink">
		          <img src="./ln.png" alt="linkden" />
		        </a>
		        <a href="https://github.com/Derriel94" target="_blank" rel="noreferrer" className="navLink">
		          <img src="./gh.png" alt="github" />
		        </a>
			</div>
			<div className="derrielcollins">
				<p>
					Copywright 2022©
					This website was Created by:
				</p>
				<a href="https://derrielcollins.site" target="_blank"  rel="noopener noreferrer">
					Derriel Collins
				</a>
			</div>
			
		</div>
	)
}