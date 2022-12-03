import React, {useEffect, useState} from 'react';

import Card from "./Card";
import axios from "axios";

const RecettesList = (props) => {

    const [recettes,setRecettes] = useState([]);

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${props.search}`)
            .then(res => {
                setRecettes(res.data.meals);
            })
    }, [1,props.search])


    return (
        <div className={"container"}>
            <div className={"row"}>
                {
                    recettes ? recettes.map((recette,index) =>
                        <Card
                            key={index}
                            title={recette.strMeal}
                            origin={recette.strArea}
                            description={recette.strInstructions}
                            photoURL={recette.strMealThumb}
                        />
                    ) : ''
                }
            </div>
        </div>
    );
};

export default RecettesList;