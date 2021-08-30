import { Fragment } from "react";
import { Link } from "react-router-dom";

export function CharactersListCard({item, loading}) {
    if (loading) {
        return (<h2>Loading...</h2>)
    }

    return (
        <Link to={{
            pathname: `character/${item.id}`,
            state: item
        }}>
            <div className='characters__elements'>
                <img src={item.image} alt={item.name}/>
                <div className='characters__elements_info'>
                    <p>
                        {item.name}
                    </p>
                    <p>
                        {
                            item.gender === 'unknown'
                                ? <Fragment>Not a person</Fragment>
                                : item.gender
                        }
                    </p>
                </div>
            </div>
        </Link>
    )
}
