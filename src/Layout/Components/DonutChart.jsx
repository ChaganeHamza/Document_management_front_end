import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const DonutChart = () => {
  const [options, setOptions] = useState({
    plotOptions: {
      pie: {
        customScale: 0.9,
        donut: {
          size: '45%',
        }
      }
    },
    dataLabels: {
      enabled: false,
    },
    chart: {
      type: 'donut',
      height: 250,
      
    },
    labels: ['Consumable', 'Expenses', 'Saleable', 'Software', 'Services'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
    legend: {
      position: 'right',
      offsetY: 0,
      height: 230
    },
    colors: ['#5572f2', '#6781F4', '#7990F6', '#8DA0F7', '#A0B0F8'], // Change colors here
    
  });

  const [series, setSeries] = useState([44, 55, 13, 43, 22]);

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="donut" height={250} />
      </div>
    </div>
  );
};

export default DonutChart;