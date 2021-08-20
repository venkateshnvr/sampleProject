import { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';

const BarChart = [
    {
        "month": "Apr 2021",
        "customer": 10000
    },
    {
        "month": "May 2021",
        "customer": 13200
    },
    {
        "month": "Jun 2021",
        "customer": 17400
    },
    {
        "month": "Jul 2021",
        "customer": 15300
    },
    {
        "month": "Aug 2021",
        "customer": 19600
    }
]

export default function BarCharts() {
    let [state, setSate] = useState("")

    useEffect(() => {
        // fetch("./../jsonData/bar_charts", {
        //     headers : { 
        //       'Content-Type': 'application/json',
        //       'Accept': 'application/json'
        //      }
        //   })
        //     .then(res => console.log(res.json()))
        //     .then(res => console.log(res))
        //     .catch(err=> console.log(err))
        // let labelKeys = Object.keys(BarChart)
        // console.log(labelKeys)
        let labelx = []
        let labely = []
        for (let i in BarChart) {
            labelx.push(BarChart[i].month)
            labely.push(BarChart[i].customer)
        }
        setSate({
            labels: labelx,
            datasets: [{
                label: 'Month vs Customer count',
                data: labely,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        })

    }, [])
    return (
        <div>
            <Bar
                // type='line'
                data={state}
                options={{ maintainAspectRatio: false }}
                height={500}
            />
        </div>
    )
}