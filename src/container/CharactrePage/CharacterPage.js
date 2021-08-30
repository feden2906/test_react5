import { Route, Switch } from "react-router-dom";

import { CharacterInfo, CharactersList } from "../../component";

export function CharacterPage() {
    return (
        <div className='characters'>
            <div className="container">
                <Switch>
                    <Route path={'/character/:id'} component={CharacterInfo}/>
                    <Route path={'/character'} component={CharactersList}/>
                </Switch>
            </div>
        </div>
    )
}
