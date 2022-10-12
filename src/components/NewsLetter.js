import React,{ useState } from 'react';
import AdComponent from './AdComponent.js';

function NewsLetter() {
	const [email, setEmail] = useState();
	const handleEmailSubmit = async()=> {
		
		return;
	}
	return (
		<div className="newsLetterComponent">
			<div className="newsLetterComponentAd">
				<AdComponent />
			</div>	
			<div className="newsLetterComponentForm clearBox">
				<h1>Subscribe to our Newsletter to get
					exclusive E-Book discounts and More!
				</h1>
				<div className="handleEmailSubmit">
					<h2>Enter Your Email</h2>
					<input type="email" name={email} value={email} />
					<button onClick={handleEmailSubmit}>Subscribe</button>
				</div>
			</div>
			<div className="newsLetterComponentAd">
				<AdComponent />
			</div>
		</div>
	)
}

export default NewsLetter;