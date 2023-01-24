import React,{ useState } from 'react';
import AdComponent from './AdComponent.js';

function NewsLetter() {
	const [email, setEmail] = useState();
	
	return (
		<div className="newsLetterComponent">
			<div className="newsLetterComponentAd">
				<AdComponent />
			</div>	
			<div className="newsLetterComponentForm clearBox">
				<h1>Subscribe to our Newsletter to get
					exclusive E-Book discounts and More!
				</h1>
				<form className="contact-form" action="https://formsubmit.co/derrielcollins96@gmail.com" method="POST">
					<h3 htmlFor="email-address">Enter Email</h3>
              		<input onChange={(e)=>setEmail(e.value.target)} type="email" value={email} name="email-address"  id="email-address" />
					<div><button type="submit" value="submit">Subscribe</button></div>
				</form>
			</div>
			<div className="newsLetterComponentAd">
				<AdComponent />
			</div>
		</div>
	)
}

export default NewsLetter;
