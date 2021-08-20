import React, { useEffect, useState } from "react";
import { Scatter } from "react-chartjs-2";

const scatterPlot = [
    {
        "year": "2020",
        "month": "05",
        "date": "12",
        "store_count": 4200
    },
    {
        "year": "2020",
        "month": "06",
        "date": "16",
        "store_count": 3800
    },
    {
        "year": "2020",
        "month": "07",
        "date": "02",
        "store_count": 412
    },
    {
        "year": "2020",
        "month": "07",
        "date": "21",
        "store_count": 680
    },
    {
        "year": "2020",
        "month": "07",
        "date": "26",
        "store_count": 830
    },
    {
        "year": "2020",
        "month": "08",
        "date": "30",
        "store_count": 1300
    },
    {
        "year": "2020",
        "month": "08",
        "date": "11",
        "store_count": 4200
    }
]

export default function ScatterChart() {
    let [state, setSate] = useState("")
    useEffect(() => {
        let labelx = []
        let labely = []
        for (let i in scatterPlot) {
            labelx.push({ x: scatterPlot[i].date, y: scatterPlot[i].store_count })
            // labely.push(pieChart[i].customer)
        }
        setSate({
            datasets: [{
                label: 'Year vs Store Count',
                data: labelx,
                backgroundColor: 'rgb(255, 99, 132)'
            }]
        })
    }, [])
    return (
        <div>
            <Scatter
                height={300}
                data={state}
                options={{ maintainAspectRatio: false }}
            />
        </div>
    )
}