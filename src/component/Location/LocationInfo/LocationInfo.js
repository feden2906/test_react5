import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export function LocationInfo() {
    const { state } = useLocation();

    const { loading } = useSelector(({ characterReducer }) => characterReducer);

    if (loading || !state ) {
        return (<h2>Loading...</h2>)
    }

    return (
        <div>
            LocationInfo
        </div>
    )
}
