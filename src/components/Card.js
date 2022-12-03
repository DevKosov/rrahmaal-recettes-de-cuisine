import React from 'react';

const Card = ({title,origin,photoURL,description}) => {
    return (
        <div className={'col-sm-12 col-md-6 col-lg-4 p-0'}>
            <div className={"d-flex flex-column m-2 p-3"} style={{border:"2px solid red",borderRadius:"20px"}}>
                <h3 className={"text-center"}>{title}</h3>
                <p className={"text-center"}>Origin : {origin}</p>
                <img className={"text-center img-fluid"} style={{borderRadius:"20px" }} src={photoURL} alt={title}/>
                <p
                    style={{
                        "display": "-webkit-box",
                        "WebkitLineClamp": "8",
                        "WebkitBoxOrient": "vertical",
                        "overflow": "hidden"
                    }}
                >{description}</p>
            </div>
        </div>
    );
};

export default Card;