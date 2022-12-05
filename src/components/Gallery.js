import React, {useState} from 'react'

export default function Gallery() {
	const [prev, setPrev] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(1);	
	const [next, setNext] = useState(2);
	const [imgList, setImgList] = useState([
'pexels-casey-cooper-3310466.jpg',
'pexels-daniel-torobekov-4886378.jpg',
	'pexels-pia-3046632.jpg',
	'fb.png',
	'gh.png',
	'ln.png',
	'logo.png',
	'newsLetterBackground.png'
	]);
		const displayImgList =async() => {
		await imgList.map(img=>{
			return <img src={img} />;
		})
	}

	// const handleArrayPush = (imgArray) => {
	// 	// let temp = imgArray.shift();
	// 	// setPrev(temp);
	// 	let lastItem = imgArray[imgArray.length -1]
	// 	imgArray.unshift(lastItem);
	// 	setImgList(imgArray);
	// 	console.log(imgArray)
	// 	// setCurrent()

	// }

	const gotoPrev = () => {
		const isFirstSlide = prev === 0;
		let newIndex = isFirstSlide ? currentIndex - 1 : currentIndex - 1;
		if (isFirstSlide) {
			setPrev(1)
			setCurrentIndex(2);
			setNext(3)
		} else {
			setPrev(currentIndex - 1)
			setCurrentIndex(currentIndex + 1)
			setNext(currentIndex + 2)
		}
		
		// setCurrentIndex(currentIndex);
		// setNext(next - 1);
	}

	const gotoNext = () => {
		const isLastSlide = currentIndex === imgList.length -2;
		let newIndex = isLastSlide ? 0 : currentIndex + 1;

		if (isLastSlide) {
			setPrev(0)
			setCurrentIndex(1)
			setNext(2)
		} else {
			// setNext()
			setCurrentIndex(currentIndex + 1)
			setNext(newIndex + 1)
			setPrev(newIndex - 1)
		}
		
		
	}

	const setSource = () => {
		if (currentIndex === 0) {
			return imgList[imgList.length];
		}
		return imgList[currentIndex -1]
	}
	console.log(prev)
	console.log(currentIndex)
	console.log(next)
	// console.log(imgList.length)
	return (
		<div className="galleryComponent">
		<img onClick={gotoPrev} src={imgList[prev]} style={{width: "100px", height: "300px"}} />
			<div className="gallery">
				<img src={imgList[currentIndex]} />
			</div>
		<img onClick={gotoNext} src={imgList[next]} style={{width: "100px", height: "300px"}} />
				 
		{/*	<div onChange={displayImgList}>
			</div>*/}
				
			This page will demonstrate a knowlege of react and animations by
			creating a cool smooth slide show, with images left shrunken,
			middle normal, and right side shrunken.
		</div>
	)
}