import React, {useState} from 'react'

export default function Gallery() {
	const [prev, setPrev] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);
	const [next, setNext] = useState('');
	const [imgList, setImgList] = useState([
'pexels-casey-cooper-3310466.jpg',
'pexels-daniel-torobekov-4886378.jpg',
	'pexels-pia-3046632.jpg',
	]);
		const displayImgList =async() => {
		await imgList.map(img=>{
			return <img src={img} />;
		})
	}

	const handleArrayPush = (imgArray) => {
		// let temp = imgArray.shift();
		// setPrev(temp);
		let lastItem = imgArray[imgArray.length -1]
		imgArray.unshift(lastItem);
		setImgList(imgArray);
		console.log(imgArray)
		// setCurrent()

	}

	const gotoPrev = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? imgList.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	}

	const gotoNext = () => {
		const isLastSlide = currentIndex === imgList.length -1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	}

	return (
		<div className="galleryComponent">
		<button onClick={gotoPrev}>Prev</button>
			<div className="gallery">
				<img src={imgList[currentIndex]} />
			</div>
					<img onClick={gotoNext} src={imgList[currentIndex + 1]} style={{width: "100px", height: "300px"}} />
				 
		{/*	<div onChange={displayImgList}>
			</div>*/}
				
			This page will demonstrate a knowlege of react and animations by
			creating a cool smooth slide show, with images left shrunken,
			middle normal, and right side shrunken.
		</div>
	)
}