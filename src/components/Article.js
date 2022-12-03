import React from 'react';
import DeleteModal from "./DeleteModal";

const Article = (props) => {

    const deleteHandler = (event)=>{
        event.preventDefault();
        props.deleteHandler(props.id);
    }

    // Modifier
    const modifyHandler = (event) =>{
        event.preventDefault();
        props.modifyHandler(props.id);
    }

    return (
        <div className="card mb-3">
            <div className="d-flex justify-content-between p-3">
                <div>
                    <h5><b>{props.title}</b></h5>
                </div>
                <div>
                    <i>
                        Poste le {new Date(props.date).toLocaleDateString("fr-FR",{year: 'numeric', month: 'long', day: 'numeric' ,hour:'numeric', minute:'numeric',second:'numeric' })}
                    </i>
                </div>
            </div>
            <div className="card-body d-flex flex-column">
                <p className="card-text">{props.content}</p>
                <div className={"align-self-end"}>

                    <a href="#"
                       className="btn btn-primary me-3"
                       onClick={modifyHandler}
                    >
                        Modifier
                    </a>

                    <a href="#"
                       className="btn btn-danger"
                       data-bs-toggle="modal"
                       onClick={deleteHandler}>
                        Supprimer
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Article;