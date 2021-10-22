import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import Loader from 'react-loader-spinner';
import { getData } from '../Utils/Common';
import '../styles/charts.css';

const PieChart = () => {
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

  // ===========================================
  const data = {
    labels: latest,
    datasets: [
      {
        label: newer,
        data: newer,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='charts'>
      {loading && (
        <div className='load'>
          <Loader type='Oval' color='#00B87C' height={34} width={34} />
        </div>
      )}
      <Pie data={data} width={500} height={500} />
    </div>
  );
};

export default PieChart;
