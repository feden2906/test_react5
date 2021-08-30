import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { CharactersListCard } from "../CharactersListCard";
import { Pagination } from "../../Main";
import { getCharacters } from "../../../services";

export function CharactersList() {
    const {search} = useLocation();

    const { info, characters } = useSelector(({ characterReducer }) => characterReducer);
    const { loading } = useSelector(({ loadingReducers }) => loadingReducers);

    const dispatch = useDispatch();

    useEffect(async () => {
        try {
            dispatch({type: 'LOADING'});

            const { results, info } = await getCharacters(search) || {};

            dispatch({type: 'SET_CHARACTERS', payload: results});
            dispatch({type: 'SET_INFO_CHARACTERS', payload: info});

            dispatch({type: 'DONE'});
        } catch (e) {
            console.error(e);
        }
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
