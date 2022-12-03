import React, {useState} from 'react';

const RechercheApi = ({parentCallback}) => {

    const [search,setSearch] = useState('');

    const submitHandler = (event) =>{
        event.preventDefault();
    }

    const searchHandler = (event)=>{
        const search = event.target.value;
        setSearch(search);
        parentCallback(search) ;
    }

    return (
        <div className={"d-flex justify-content-around m-5"}>
            <form className={"w-25"} action={"?"} onSubmit={submitHandler}>
                <input
                    id={'search'}
                    className={"form-text p-2 w-100"}
                    type="text"
                    name="aliment"
                    placeholder={"Composer le nom du aliment en anglais"}
                    value={search}
                    onChange={searchHandler}
                    />
            </form>
        </div>
    );
};

export default RechercheApi;