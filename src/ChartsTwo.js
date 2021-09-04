import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import './Charts.css';

const data = {
  labels: ['Murder', 'Culpable Homicide', 'Attempt To Murder', 'Karo Kari', 'Grevious Hurt', 'Simple Hurt','Rioting', 'Assault on Police','Assault on Others','Rape / Zina','Gang Rape','Kidnapping / Abduction','Kidnapping for Ransom','Child Lifting','Highway Dacoity','Bank Dacoity','Petrol Pump Dacoity','Other Dacoity','Highway Robbery','Bank Robbery','Petrol Pump Robbery', 'Other Roberry', 'Burglary', 'Car Theft', 'Car Snatched', 'Motor Cycle Theft','Motor Cycle Snatched','Other Motor Vehicle Theft','Cattle Theft','Other Theft','Receiving Stolen Property','Arms Act','Gambling' ,'Smuggling','Blasphemy','Prohibition ord.'],
  datasets: [
    {
      label: 'Types of Crimes',
      data: [33, 2, 36, 40, 25, 60, 17, 18, 49, 10, 11, 22, 33, 54, 15, 66, 7, 82, 39, 20, 25, 26, 2, 4, 25, 12 ,27 ,28, 29, 30, 31, 32, 33, 40, 5, 16],
      backgroundColor: [
        'rgba(245, 57, 63, 0.5)',
        'rgba245, 57, 95, 0.5)',
        'rgba(245, 57, 107, 0.5)',
        'rgba(245, 57, 145, 0.5)',
        'rgba(245, 57, 176, 0.5)',
        'rgba(245, 57, 220, 0.5)',
        'rgb(239, 57, 245, 0.5)',
        'rgba(220, 57, 245, 0.5)',
        'rgba(176, 57, 245, 0.5)',
        'rgba(151, 57, 245, 0.5)',
        'rgba(101, 57, 245, 0.5)',
        'rgba(57, 132, 245, 0.5)',
        'rgba(57, 170, 245, 0.5)',
        'rgba(57, 208, 245, 0.5)',
        'rgba(57, 245, 201, 0.5)',
        'rgba(57, 245, 170, 0.5)',
        'rgba(57, 245, 114, 0.5)',
        'rgba(57, 245, 82, 0.5)',
        'rgba(75, 203, 71, 0.5)',
        'rgba(57, 174, 21, 0.5)',
        'rgba(103, 174, 21, 0.5)',
        'rgba(198, 231, 68, 0.5)',
        'rgba(231, 225, 68, 0.5)',
        'rgba(231, 198, 68, 0.5)',
        'rgba(231, 171, 68, 0.5)',
        'rgba(231, 144, 68, 0.5)',
        'rgba(231, 95, 68, 0.5)',
        'rgba(231, 68, 68, 0.5)',
        'rgba(239, 23, 23, 0.5)',
        'rgba(129, 7, 7, 0.5)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};

function ChartsTwo() {
    return (
        <div className="dad">
            <Doughnut data={data} />
        </div>
    )
}

export default ChartsTwo
