import react from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import login from "./components/login";
import Cryptojs from "./components/cryptojs";
import Admin from "./components/admin"

export default function Routers() {

    return (
        <Router>
            <div>
            <Switch>
                <Route exact path="/" component={login} />
                <Route path="/crypto" component={Cryptojs} />
                <Route path="/admin" component={Admin} />
            </Switch>
            </div>
        </Router>
    )
}