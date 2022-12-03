import React, {useEffect, useState} from 'react';
import axios from "axios";
import Article from "./Article";
import BlogForm from "./BlogForm";
import DeleteModal from "./DeleteModal";
import ModifyModal from "./ModifyModal";

const Blog = () => {

    const url = 'http://localhost:3003/articles';
    const [articles,setArticles] = useState([])

    // Recuperer les articles
    useEffect(() => {
        axios.get(url)
            .then(res => {
                let articles = res.data.sort((a, b) => b.date - a.date);
                setArticles(articles);
            })
    }, [])

    // Ajout d'un article
    const onInsert = (author,content) =>{
        let date = Date.now();
        let id = articles[0].id + 1;
        let newArticle = {author,content,date,id};
        axios.post(url, newArticle)
            .then(res => {
                    let articles = current => [...current,newArticle].sort((a, b) => b.date - a.date);
                    setArticles(articles)
                }
            );
    };


    // Suppression de l'article

    // Ouvrir un pop up pour verifier la suppression
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteID, setDeleteId] = useState(false);

    // Fermer le modal
    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    // Ouvrir le modal
    const handleShowDeleteModal = () => setShowDeleteModal(true);
    // Confirmer la suppresion
    const handleDeleteModal = () => {
        handleCloseDeleteModal();
        onDelete(deleteID);
    }

    // Ouvrir le pop up
    const deleteHandler = (id) =>{
        setDeleteId(id);
        handleShowDeleteModal();
    }
    // Supprimer
    const onDelete = (id) =>{
        axios.delete(`${url}/${id}`)
            .then(res => {
                    setArticles(articles.filter((article) => article.id != id))
                }
            );
    }


    // Modifier un article
    // Ouvrir un pop up pour verifier la suppression
    const [showModifyModal, setShowModifyModal] = useState(false);
    const [modifyArticle, setModifyArticle] = useState([]);

    // Fermer le modal
    const handleCloseModifyModal = () => setShowModifyModal(false);
    // Ouvrir le modal
    const handleShowModifyModal = () => setShowModifyModal(true);
    // Confirmer la suppresion
    const handleModifyModal = () => {
        handleCloseModifyModal();
        onModify(modifyArticle);
    }

    // Ouvrir le pop up
    const modifyHandler = (id) =>{
        setModifyArticle(articles.find((article)=> article.id == id));
        handleShowModifyModal();
    }
    // Supprimer
    const onModify = (modifiedArticle) =>{
        axios.put(`${url}/${modifiedArticle.id}`,modifiedArticle)
            .then(res => {
                    setArticles(articles.filter((article) => {
                        if (article.id == modifiedArticle.id){
                            article = modifiedArticle
                        }
                        return article;
                    }))
                }
            );
    }

    return (
        <div className={"container"}>
            <DeleteModal
                show={showDeleteModal}
                handleClose={handleCloseDeleteModal}
                handleConfirm={handleDeleteModal}/>
            <ModifyModal
                show={showModifyModal}
                handleClose={handleCloseModifyModal}
                onModify={handleModifyModal}
                article={modifyArticle}
            />
            <div className={"d-flex justify-content-around p-4 "}>
                <h1>Blog!</h1>
            </div>
            <BlogForm onInsert={onInsert}/>
            {
                articles ? articles.map(article =>
                    <Article
                        key={article.id}
                        id={article.id}
                        title={article.author}
                        content={article.content}
                        date={article.date}
                        deleteHandler={deleteHandler}
                        modifyHandler={modifyHandler}
                    />
                    )
                    : ''
            }
        </div>
    );
};

export default Blog;