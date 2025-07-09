import React from 'react';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart, Pie, Legend, Tooltip} from 'recharts';
export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const MyPieChart = () => {
  const [dash, setDash] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(`${SERVER_URL}/dashboard`);

    return data;
  };

  useEffect(()=>{
    getData().then((data) => {
      console.log(data);
      setDash(data);
    });
  }, [])
  const data = [{ name: 'Auto 6', value: 400 },
  { name: 'Auto 1', value: 300 },
  { name: 'Auto 2', value: 300 },
  { name: 'Auto 3', value: 200 },
  { name: 'Auto 4', value: 278 },
  { name: 'Auto 5', value: 189 },
  ];

  console.log(dash[2]);
  return (
      
      <div className="form_container_d">
        <h2> Cantidad piezas looks por categoria </h2>
        <PieChart width={400} height={200} stroke="#F2DD8D">
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={dash[2]}
            cx="50%"
            cy="50%"
            outerRadius={65}
            fill="#F2DD8D"
            label
          />
          <Tooltip />
        </PieChart>
        <h2> Cantidad piezas performance por categoria </h2>
        <PieChart width={400} height={180}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={dash[3]}
            cx="50%"
            cy="40%"
            outerRadius={65}
            fill="#F2DD8D"
            label
          />
          <Tooltip />
        </PieChart>

        </div>
    
  );
}

export default MyPieChart;