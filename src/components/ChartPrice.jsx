import data1 from './../data.json'


import * as React from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
      },
    },
  };
  
   const labels = data1.map(el=>Object.values(el)[0]);
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Price',
        data: data1.map(el=>Object.values(el)[1]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
 

export default function ChartVolume() {
   
    return (
      <>
        <div  style={{ height: '70%', width: '70%',  position: 'absolute', top:"10%", left:'12%'
     }}  >
   <Line  options={options} data={data}/> 
   </div>

       </>
  
  
    );
  }