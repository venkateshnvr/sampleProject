import react from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import login from "./components/login";
import Cryptojs from "./components/cryptojs";
import Admin from "./components/admin";
import Chart from "./components/chart";
// import Nav from "./components/nav";
import BarChart from "./components/chart/barchart";
import LineChart from "./components/chart/linechart";
import PieChart from "./components/chart/piechart";
import Nav from "./components/nav";
import ScatterChart from "./components/chart/scatterChart";
import BarCharts from "./components/chart/barchart";

export default function Routers() {

    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={login} />
                    <Route path="/crypto" component={Cryptojs} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/chart" component={Chart} />
                    <Route path="/barchart" component={BarCharts} />
                    <Route path="/linechart" component={LineChart} />
                    <Route path="/piechart" component={PieChart} />
                    <Route path="/scatterChart" component={ScatterChart} />
                </Switch>
            </div>
        </Router>
    )
}