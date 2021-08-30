import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

export function Pagination({ info }) {
    const location = useLocation();
    const history = useHistory();

    const pageNumber = [];
    for (let i = 1; i <= info; i++) {
        pageNumber.push(i)
    }

    const paginate = (number) => {
        // const query = queryString.parse(location.search);
        // query.page = number;
        const urlPaginate = new URLSearchParams(location.search);
        urlPaginate.set('page', number);
        history.push(location.pathname + "?" + urlPaginate.toString());
    }

    return (
        <div className='pagination'>
            {
                pageNumber.map(number =>
                    <Fragment key={number}>
                        <button onClick={() => paginate(number)}>
                            {number}
                        </button>
                    </Fragment>
                )
            }
        </div>
    )
}
