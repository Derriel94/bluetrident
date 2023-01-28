import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function Gallery() {


	const slideImages = [ 
	{
		url: 'pexels-casey-cooper-3310466.jpg',
		caption: 'Turtle'
	},
	{
		url: 'pexels-daniel-torobekov-4886378.jpg',
		caption: 'Dolphin'
	},
	{
		url: 'fb.png',
		caption: 'animal'
	},
	{
		url: 'ln.png',
		caption: 'Slide 1'
	},
	{
		url: 'logo.png',
		caption: 'Slide 1'
	},
	{
		url: 'gh.png',
		caption: 'Slide 1'
	},
	{
		url: 'newsLetterBackground.png',
		caption: 'taco'
	}
	];
// ,
// '',
// 	'pexels-pia-3046632.jpg',
// 	'fb.png',
// 	'gh.png',http://localhost:3000/pexels-casey-cooper-3310466.jpg
// 	'ln.png',
// 	'',
// 	'newsLetterBackground.png'


	// console.log(imgList.length)
	return (
		<div className="galleryComponent">
			<div>
			<Fade id="centerGallery">
			{slideImages.map((slideImage, index)=> (
				<div className="slidediv" key={index}>	
					{/*<div style={{'backgroundImage': `url(${slideImage.url})`}}></div>*/}
					<img src={slideImage.url} alt="slideshow" style={{width: 600, height: 400}} />
					<h3>{slideImage.caption}</h3>
				</div>
				))}
			</Fade>
			</div>
		</div>
	)
}