import React, { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import style  from './style.module.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  DataLabelsPlugin
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const data = {
  labels: ['January', 'February', 'March', 'April',],
  datasets: [
    {
      label: 'SAP',
      data: [81, 56, 55, 40],
      backgroundColor: 'rgba(244, 165, 45)',

    },
    {
      label: 'Saleforce',
      data: [ 19, 86, 27, 90],
      backgroundColor: 'rgba(208, 181, 42)',

    },
    {
      label: 'Tableau',
      data: [ 50, 90, 65, 80], 
      backgroundColor: 'rgba(85, 185, 159)',

    },
  ],
};



export const Barchart = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const {bar_container}=style
  const chartRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (chartRef.current) {
        chartRef.current.reset(); 
        chartRef.current.update(); 
      }
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const options = {
    responsive: true,
    animation: {
      duration: 1500, 
    },
    plugins: {
      legend: {
        position: windowWidth <= 600 ? 'top' : 'right',
        align: 'start', 
        labels: {
          boxWidth: 30,
          boxHeight: 30,
          padding: windowWidth <= 600 ? 10 : 40,
          generateLabels: function (chart) {
            const original = ChartJS.defaults.plugins.legend.labels.generateLabels;
            const labelsOriginal = original.call(this, chart);
  
            labelsOriginal.forEach(label => {
              label.borderRadius = 10; 
            });
  
            return labelsOriginal;
          },
        },
      },
      title: {
        position: windowWidth <= 600 ? 'bottom' : 'left', // Move title to top on mobile
        align: windowWidth <= 600 ? 'center' : 'start', // Center title on mobile
        display: true,
        text: '% of Student that Improved',
        padding: {
          top: windowWidth <= 600 ? 10 : 20, // Adjust padding for mobile view
          right: windowWidth <= 600 ? 0 : 20, 
          bottom: windowWidth <= 600 ? 10 : 5, 
        },
        font: {
          size: windowWidth <= 600 ? 18 : 37,
          weight: 'normal',
        },
      },
      datalabels: {
        display: true,
        color: '#ffffff',
        anchor: 'end',
        align: 'end',
        formatter: (value) => `${value}%`,
        offset: windowWidth <= 600 ? -35 : -30,
        rotation: windowWidth <= 600 ? -40 : 0,
        font: {
          size: windowWidth <= 600 ? 10 : 14,
          weight: 'bold',
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        border: {
          display: true,
          color: 'red',
        },
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          borderColor: 'rgba(97,102,105,255)', 
          borderWidth: 10, 
          offset: true,
          position: 'bottom', 
        },
        barPercentage: 0.1, 
        categoryPercentage: 0.1,
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          borderDash: [10, 5],
          borderColor: 'rgba(0, 0, 0, 0)',
        },
        border: {
          display: false,
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 10,
        barThickness: 10, 
        maxBarThickness: 20, 
      },
    },
  };
  
  
  
  return (
    <>
      <div className="container-fluid " >
        <div className="row justify-content-center">
          <div  className={` ${bar_container} col-lg-9 positon-relative`}>
            <h1 className={` pr-4 text-muted ${ windowWidth <= 600 ? '':'text-right'}`} >Key</h1>
            <Bar
              data={props?.data}
              options={options}
              ref={chartRef}
              height={
                windowWidth <= 600
                && 350
                  
              }
              width={
                windowWidth <= 600
                  && 390
                  
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};
