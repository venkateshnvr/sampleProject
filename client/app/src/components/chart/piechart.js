import { layouts } from "chart.js";
import react, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

const pieChart = [
    {
        "month": "Apr 2021",
        "store": "Store 1",
        "customer": 4200
    },
    {
        "month": "Apr 2021",
        "store": "Store 2",
        "customer": 3800
    },
    {
        "month": "Apr 2021",
        "store": "Store 3",
        "customer": 412
    },
    {
        "month": "Apr 2021",
        "store": "Store 4",
        "customer": 680
    },
    {
        "month": "Apr 2021",
        "store": "Store 5",
        "customer": 830
    }
]

export default function PieChart() {
    let [state, setState] = useState("")
    useEffect(() => {
        let labelx = []
        let labely = []
        for (let i in pieChart) {
            labelx.push(pieChart[i].store)
            labely.push(pieChart[i].customer)
        }
        setState({
            labels: labelx,
            datasets: [{
                label: 'Customer count by store',
                data: labely,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(25, 25, 80)',
                    'rgb(2, 250, 80)',
                ],
            }]
        })
    }, [])
    return (
        <div>
            <Pie
                data={state}
                height={300}
                options={{ maintainAspectRatio: false }}
                // options={
                //     layouts={
                //         left:50,
                //         right:50,
                //         top:50,
                //         bottom:50
                //     }
                // }
            />
        </div>
    )
}