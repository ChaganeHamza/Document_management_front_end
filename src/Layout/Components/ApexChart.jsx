import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: 'area'
    },
    colors: ['#5572f2', '#00E396'], // Define the colors for the lines/areas
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 3, // Customize the width of the lines
      colors: ['#5572f2', '#00E396'] // Customize the stroke color
    },
    fill: {
      type: 'gradient', // Use gradient fill for the areas
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
        colorStops: [
          [
            { offset: 0 , color: '#5572f2', opacity: 0.7 },
            { offset: 100, color: '#5572f2', opacity: 0.1 }
          ],
          [
            { offset: 0, color: '#00E396', opacity: 0.7 },
            { offset: 100, color: '#00E396', opacity: 0.1 }
          ]
        ]
      }
    },
    xaxis: {
      type: 'datetime',
      categories: [
        "2024-01-01T00:00:00.000Z",
        "2024-02-01T01:30:00.000Z",
        "2024-03-01T02:30:00.000Z",
        "2024-04-01T03:30:00.000Z",
        "2024-05-01T04:30:00.000Z",
        "2024-06-01T05:30:00.000Z",
        "2024-07-01T06:30:00.000Z"
      ]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
    grid: {
      show: false
    }
  });

  const [series, setSeries] = useState([
    {
      name: 'Receipts',
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: 'Orders',
      data: [11, 32, 45, 32, 34, 52, 41]
    }
  ]);

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="area" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;