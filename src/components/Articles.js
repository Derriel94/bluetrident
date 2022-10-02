import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import DeleteArticle from './DeleteArticle.js';
import { db } from "../firebaseConfig.js";


export default function Articles() {
	const [articles, setArticles] = useState([]);
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
	return (
		<div>
			{
				articles.length === 0 ? (
					<p>No articles found!</p>
				):(
				articles.map(({id, title, description, imageUrl, createdAt}) =>{
					return <div key={id} className="article">
								<div>{title}</div>
								<img src = {imageUrl} alt={title} style={{height: 180, width: 180}} />
								<div>{description}</div>
								<div>{createdAt.toDate().toDateString()}</div>
								<DeleteArticle id={id} imageUrl={imageUrl} />
							</div>
				})

				)
			}
		</div>
	)
}