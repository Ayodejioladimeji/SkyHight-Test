import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Loader from 'react-loader-spinner';
import { getData } from '../Utils/Common';
import '../styles/charts.css';

const LineChart = () => {
  const [datas, setDatas] = useState([]);
  const user = getData();
  const [loading, setLoading] = useState(true);

  // The section of the UseEffect
  useEffect(() => {
    setDatas(user);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
    // eslint-disable-next-line
  }, []);

  const news = [];
  const newer = [];
  const latest = [];

  datas.forEach((item) => {
    news.push(item);
  });

  const results = news.filter((a) => a.Sales > 2500);

  results.forEach((data) => {
    newer.push(data.Sales);
    latest.push(data['Customer Name']);
  });

  // THE SECTION OF THE CHART DATA
  const data = {
    labels: latest,
    datasets: [
      {
        label: 'Data',
        data: newer,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='charts'>
      {loading && (
        <div className='load'>
          <Loader type='Oval' color='#00B87C' height={34} width={34} />
        </div>
      )}
      <Line data={data} options={options} width={300} height={300} />
    </div>
  );
};

export default LineChart;
