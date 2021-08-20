import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div>
            <h1>Task 2</h1>
        <Link to="/barchart" style={{margin: '10px'}}>Bar Chart</Link>
        <Link to="/linechart" style={{margin: '10px'}}>Line Chart</Link>
        <Link to="/piechart" style={{margin: '10px'}}>Pie Chart</Link>
        <Link to="/scatterChart" style={{margin: '10px'}}>Scatter Chart</Link>
    </div>
    )
}