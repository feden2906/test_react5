import { Route, Switch } from "react-router-dom";

import { LocationInfo, LocationList } from "../../component";

export function LocationPage() {
    return (
        <div className='characters'>
            <div className="container">
                <Switch>
                    <Route path={'/location/:id'} component={LocationInfo}/>
                    <Route path={'/location'} component={LocationList}/>
                </Switch>
            </div>
        </div>
    )
}
