import React, {useEffect, useState} from "react";

const BlogForm = (props) => {
	// Characteres minimum
	const minCharacters = 100;

	// Declaration des states
	const [author, setAuthor] = useState("");
	const [content, setContent] = useState("");
	const [charactersLeft, setCharactersLeft] = useState(minCharacters);

	// On textarea type effect
	const textareaHandler = (event) => {
		setContent(event.target.value);
		setCharactersLeft(minCharacters - parseInt(event.target.value.length));
	};

	const nameHandler = (event) => {
		setAuthor(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (props.modify){
			props.article.author = author;
			props.article.content = content;
			props.onModify(props.article);
		}
		else
			props.onInsert(author,content);
	};

	useEffect(()=>{
		if (props.modify){
			setAuthor(props.article.author);
			setContent(props.article.content);
		}
	},[]);


	return (
		<div className={"d-flex justify-content-center mb-5"}>
			<form className={`d-flex flex-column ${(props.modify ? 'w-75' : 'w-50')}`} onSubmit={submitHandler}>
				<div className="form-group">
					<label htmlFor="name">Author</label>
					<input
						type="text"
						className="form-control"
						id="name"
						name={"author"}
						aria-describedby="name"
						placeholder="Author"
						value={author}
						onChange={nameHandler}
					/>
				</div>
				<div className="form-group mt-3">
					<label htmlFor="message">Message</label>
					<textarea
						style={props.modify ? {height:200} : {height:100}}
						className="form-control"
						id="message"
						placeholder="Message"
						name={"content"}
						minLength={minCharacters}
						value={content}
						onChange={textareaHandler}
					/>
					{charactersLeft != minCharacters ? (
						<small
							style={
								charactersLeft > 0 ? { color: "red" } : { visibility: "hidden" }
							}
							id={"charsLeftSmall"}
						>
							Veuillez ecrire {charactersLeft} characters de plus!
						</small>
					) : (
						<small style={{ visibility: "hidden" }}>s</small>
					)}
				</div>
				<button
					type="submit"
					className={"btn btn-primary align-self-end ps-5 pe-5 mt-3"}
				>
					{props.modify ? "Modifier" : "Envoyer"}
				</button>
			</form>
		</div>
	);
};

export default BlogForm;
