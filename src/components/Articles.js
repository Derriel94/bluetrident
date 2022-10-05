import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import DeleteArticle from './DeleteArticle.js';
import { db } from "../firebaseConfig.js";


export default function Articles() {
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
					articles.filter((val)=>{
						if(keyword == "") {
							return val
						} else if (val.title.toLowerCase().includes(keyword.toLowerCase())) {
							return val
						}
					}).map(({id, title, description, imageUrl, createdAt}) =>{
					return <div key={id} className="article">
								<h1>{title}</h1>
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