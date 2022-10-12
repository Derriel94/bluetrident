import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query, setDoc, doc, updateDoc, addDoc, arrayUnion } from "firebase/firestore";
import DeleteArticle from './DeleteArticle.js';
import { db, auth } from "../firebaseConfig.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast }from 'react-toastify';

export default function Articles( {mainPage} ) {
	const [articles, setArticles] = useState([]);
	const [addComment, setAddComment] = useState(false);
	const [comment, setComment] = useState("");
	const [commenter, setCommenter] = useState("");
	
	const [user] = useAuthState(auth);
	console.log(user)
	// if (user != null) {
	// 	if (user.name) {
	// 		setCommenter(user.name)
	// 	} else {
	// 		setCommenter(user.displayName)
	// 	}
	// } else {

	// }

	const tempUser = {
		displayName: " ",
		name: "",
	}
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
		let newLikes = ++likes;
		
		const docRef = doc(db, "blogs", id);
		console.log(docRef);
		await updateDoc(docRef, {likes: newLikes});
		
		toast( "Thanks for Liking, dont forget to subscribe to our newsletter!" ,{type: "success"})
	}


	const handleAdComment = async() => {
		setAddComment(true);
		
	
		toast( "Remember to be kind, the server is always watching!" ,{type: "warning"})
	
		
	}
	useEffect(()=>{
			if (user) {
			setCommenter(user.displayName)			
		}

	},[user])

	const handlePostSubmit = async(id, comments)=> {
		setAddComment(false);
		setComment(comment);
	
		const commentsDocRef = doc(db, "blogs", id);
	
		const newCommentObject =
			{comment: comment,
			commenter: commenter}
				
 		await updateDoc(commentsDocRef, {
 			comments: arrayUnion(newCommentObject)
 		})
	

	}

	const displayComments = (comments) => {
			
		
		return <div>{comments.map((commentText)=>{
			console.log(commentText)
			return (<div className="border">
						<div id="left">
							User: {commentText.commenter}
						</div>
						<div>
							{commentText.comment}
						</div>
						
					</div>);
		})}</div>;
	}

	console.log(commenter)
	return (
		<div className="articlesComponent">
			<div>
				<p>Enter keyword</p>
				<input type="text" name="keyword" onChange={handleChange} />
			</div>
			{
				articles.length === 0 ? (
					<div>
						<p>No articles found!</p>
					</div>
				):(
					articles.filter((blog)=>{
						if(keyword == "") {
							return blog
						} else if (blog.title.toLowerCase().includes(keyword.toLowerCase())) {
							return blog
						}
					}).map(({id, title, description, imageUrl, createdAt, likes, comments}) =>{
					return <div key={id} className="article">
								<h1>{title}</h1><div>Likes:{likes}</div>
								<img src = {imageUrl} alt={title} style={{height: 180, width: 180}} />
								<div id="articleDesc">{description}</div>
								<div>{createdAt.toDate().toDateString()}</div>
								
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
										<button onClick={handleAdComment}>Comment</button>
									</div>
								}
								<div>
									{addComment
									?
									<div>
									<h1>Type Comment</h1>												
									<input type="textArea" name="comment" onChange={(e)=>setComment(e.target.value)} />
									<button onClick={()=>handlePostSubmit(id, comments)}>Post Comment</button>
									</div>
									:
									<div></div>

									}
									{
										!comments
										?
										<div id="comment">No Comments Yet</div>
										:
										<div id="comment">
											{displayComments(comments)}
										</div>
									}
								</div>
							</div>
				})

				)
			}
		
		</div>
	)
}