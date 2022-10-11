import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query, setDoc, doc, updateDoc } from "firebase/firestore";
import DeleteArticle from './DeleteArticle.js';
import { db } from "../firebaseConfig.js";
import { toast }from 'react-toastify';

export default function Articles( {mainPage} ) {
	const [articles, setArticles] = useState([]);
	let [keyword, setKeyword] = useState('');
	useEffect(()=>{
		const articleRef = collection(db, "blogs");
		const q = query(articleRef, orderBy("createdAt"));
		onSnapshot(q,(snapshot)=>{
			const articles = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setArticles(articles);
			console.log(articles);
		});
	},[])

	const handleChange = (e) => {
			setKeyword(e.target.value);	
	}

	const handleLike = async(id, likes) => {
		console.log(likes);
		let newLikes = ++likes;
		console.log(newLikes);
		const docRef = doc(db, "blogs", id);
		console.log(docRef);
		await updateDoc(docRef, {likes: newLikes});
		
		toast( "Thanks for Liking, dont forget to subscribe to our newsletter!" ,{type: "success"})
	}

	const handleComment = () => {
		toast( "Remember to be kind, the server is always watching!" ,{type: "warning"})
	}

	return (
		<div>
			<div>
				<p>Enter keyword</p>
				<input type="text" name="keyword" onChange={handleChange} />
			{/*		{articles.filter((val)=>{
						if(keyword == "") {
							return val
						} else if (val.title.toLowerCase().includes(keyword.toLowerCase())) {
							return val
						}
					}).map((val, key) => {
					return (
					<div key={key}>
						<p>{val.title}</p>
					</div>
				)
			})
				}*/}
			</div>
			{
				articles.length === 0 ? (
					<p>No articles found!</p>
				):(
					articles.filter((blog)=>{
						if(keyword == "") {
							return blog
						} else if (blog.title.toLowerCase().includes(keyword.toLowerCase())) {
							return blog
						}
					}).map(({id, title, description, imageUrl, createdAt, likes}) =>{
					return <div key={id} className="article">
								<h1>{title}</h1>
								<img src = {imageUrl} alt={title} style={{height: 180, width: 180}} />
								<div>{description}</div>
								<div>{createdAt.toDate().toDateString()}</div>
								<div>{likes}</div>
								{
									mainPage ? <div></div> : <div><DeleteArticle id={id} imageUrl={imageUrl} /></div>
								}
								{
									!mainPage 
									? 
									<div></div> 
									: 
									<div>
										<button onClick={()=>handleLike(id, likes)}>Like</button>
										<button onClick={handleComment} >Comment</button>
									</div>
								}
								
							</div>
				})

				)
			}
		</div>
	)
}