import React from 'react'
import { Line } from 'react-chartjs-2';
import './Charts.css';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: '# of Crimes/ Month 2020',
      data: [102, 109, 93, 75, 79, 110, 64, 62, 78, 114, 55, 65],
      fill: true,
      backgroundColor: '#7A81E0',
      borderColor: '#2410A2',
      tension: 0.1,
      pointBorderColor: '#2410A2',
      pointBorderWidth: 5,
      pointRadius: 8,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          beginAtZero: true
        },
      },
    ],
  },
};

function Charts() {
  return (
    <div className="chartss">
      <br/><br/>
      <Line data={data} options={options} />
    </div>
  )
}

export default Charts



/*import React, {Component} from 'react';
import {Chart} from 'chart.js';
import { getRelativePosition } from 'chart.js/helpers';
import { Bar, Line } from 'react-chartjs-3';


class Charts extends Component {
    render() {
        return(
            <div className="chart">
                <Bar
                data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of votes',
                        data: [12, 19, 3, 5, 2, 3],
                    },],
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                }}
                />
            </div>
        );
    }
}

export default Charts
*/

/*
import React, { useEffect } from "react";
import {Chart} from "chart.js";
//import "./styles.css";

export default function Charts() {
  useEffect(() => {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "Red",
              "Blue",
              "Yellow",
              "Green",
              "Purple",
              "Orange"
            ],
            borderColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            borderWidth: 1
            
          }
          
        ]
      }
    });
  });
  return (
    <div>
      <canvas id="myChart" width="50" height="50" />
    </div>
  );
}
*/