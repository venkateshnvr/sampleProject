import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const lineChart = [
    {
        "year": "2015",
        "customer": 4200   
    },
    {
        "year": "2016",
        "customer": 3800   
    },
    {
        "year": "2017",
        "customer": 412   
    },
    {
        "year": "2018",
        "customer": 680   
    },
    {
        "year": "2019",
        "customer": 830   
    },
    {
        "year": "2020",
        "customer": 1300   
    },
    {
        "year": "2021",
        "customer": 4200   
    }
]

export default function LineChart() {
    let [state, setSate] = useState("")
    useEffect(() => {
        let labelx = []
        let labely = []
        for (let i in lineChart) {
            labelx.push(lineChart[i].year)
            labely.push(lineChart[i].customer)
        }

        setSate({
            labels: labelx,
            datasets: [{
                label: 'Year vs Customer count',
                data: labely,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        })
    }, [])

    return (
        <div>
            <Line
            height={100}
                data={state}
            />
        </div>
    )
}