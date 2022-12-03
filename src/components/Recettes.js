import React, {useState} from 'react';
import RechercheApi from "./RechercheApi";
import RecettesList from "./RecettesList";

const Recettes = () => {

    const [search,setSearch] = useState('');

    const searchCallback = (search)=>{
        setSearch(search);
    }

    return (
        <div>
            <div className={"d-flex justify-content-around p-4 "}>
                <h1>Appli recettes de cuisine!</h1>
            </div>
            <RechercheApi parentCallback={searchCallback}/>
            <RecettesList search={`${search}`}/>
        </div>
    );
};

export default Recettes;