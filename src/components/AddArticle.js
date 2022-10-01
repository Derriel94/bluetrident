import React, { useState } from 'react'
// import firebase from 'firebase/app';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { storage, db } from './../firebaseConfig.js';

export default function AddArticles() {
	
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		image: "",
		createdAt: Timestamp.now().toDate(),
	});
	console.log(formData.createdAt)

	const [progress, setProgress] = useState(0);

	const handleChange =(e)=> {
		setFormData({...formData, [e.target.name]: e.target.value });
	};

	const handleImageChange =(e)=> {
		setFormData({...formData, image: e.target.files[0] });
	};

	const handlePublish =() =>  {
		if (!formData.title || !formData.description || !formData.image) {
			alert('Please Fill The Tank!');
			return;
		}

		const storageRef = ref(storage, `/images/${Date.now()}${formData.image.name}`);
		const uploadImage = uploadBytesResumable(storageRef, formData.image);

		uploadImage.on("state_changed", (snapshot)=> {
				const progressPercent = Math.round((snapshot.bytesTransferred/ snapshot.totalBytes) * 100);
				setProgress(progressPercent);
			}, (err)=> {
				console.log(err);
			}, ()=> {
				setFormData({
					title: "",
					description: "",
					image: "",

				});

				getDownloadURL(uploadImage.snapshot.ref)
				.then((url) => {
          var articleRef = collection(db, "blogs");
          console.log('breaks here')
          addDoc(articleRef, 
          {
            title: formData.title,
            description: formData.description,
            imageUrl: url,
          }

          )
            .then(() => {
              alert("Article added successfully");
              setProgress(0);
            })
            .catch((err) => {
              alert("Error adding article");
            });
        });
      }
    );
	};
	
	return (
		<div className="createArticle">
			<h2> Create Blog </h2>
			<div>
			<label>Title</label>
			<input type="text" name="title" className="" onChange={(e)=>handleChange(e)} value={formData.title}/>
			</div>
			<div>
			<label>Description</label>
			<textarea name="description" className="" onChange={(e)=>handleChange(e)} value={formData.description}/>
			</div>
			<div>
			<label>Image</label>
			<input type="file" name="image" accept="image/*" onChange={(e)=>handleImageChange(e)}/>
			{
				progress === 0 ? null : (
					<div style={{backgroundColor:"blue", width: `${progress} %` }}>
						{`uploading image ${progress}%`}
					</div>
					)
			}
			</div>
			<button onClick={handlePublish}>publish</button>
		</div>
	)
}