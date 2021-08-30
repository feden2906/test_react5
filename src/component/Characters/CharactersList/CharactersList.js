import {useDispatch, useSelector} from "react-redux";
import {Fragment, useEffect} from "react";


import {urlApiCharactersPage} from "../../../services/API";
import CharactersListCard from "../CharactersListCard/CharactersListCard.js";
import {useLocation} from "react-router-dom";
import Pagination from "../../Main/Pagination/Pagination";



export default function CharactersList() {
    const {search} = useLocation();

    const info = useSelector(store => store.characterReducer.infoStore);
    const characters = useSelector(store => store.characterReducer.charactersStore);
    const loading = useSelector(store => store.loadingReducers.loading);


    const dispatch = useDispatch();


    useEffect(() => {

        dispatch({type: 'LOADING'})

        fetch(`${urlApiCharactersPage(search)}`)
            .then(value => value.json())
            .then(response => {
                dispatch({type: 'SET_CHARACTERS', payload: response.results})
                dispatch({type: 'SET_INFO_CHARACTERS', payload: response.info})
            })

        dispatch({type: 'DONE'})


    }, [dispatch, search])

    if (loading || !characters) {
        return (<h2>Loading...</h2>)
    }

    return (
        <Fragment>
            <div className="characters__inner">
                {
                    characters.map(value => <CharactersListCard item={value} loading={loading} key={value.id}/>)

                }

            </div>
            <Pagination info={info.pages}/>
        </Fragment>
    );
}