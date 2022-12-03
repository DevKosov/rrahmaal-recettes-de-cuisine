import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";

const DeleteModal = (props) => {

	return (
		<>
			<Modal show={props.show} onHide={props.handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Supprimer</Modal.Title>
				</Modal.Header>
				<Modal.Body>Voulez-vous vraiment supprimer l'article?</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={props.handleClose}>
						Fermer
					</Button>
					<Button variant="danger" onClick={props.handleConfirm}>
						Supprimer
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default DeleteModal;