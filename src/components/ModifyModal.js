import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import BlogForm from "./BlogForm";

const ModifyModal = (props) => {

	return (
		<>
			<Modal show={props.show} onHide={props.handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modifier</Modal.Title>
				</Modal.Header>
				<BlogForm modify={true} onModify={props.onModify} article={props.article}/>
			</Modal>
		</>
	);
};

export default ModifyModal;