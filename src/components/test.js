import { useEffect, useState } from 'react';
import axios from 'axios';
import React, { PureComponent } from 'react';
import { Brush,ReferenceLine,BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;


export default function Test() {
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
  return (
    <BarChart 
        className='gg'
      width={500}
      height={300}
      data={dash[1]}
      margin={{
        top: 5,
        right: 20,
        left: 0,
        bottom: 5
      }}
    >
      <CartesianGrid  />
      <XAxis stroke="#ffff" dataKey="name" />
      <YAxis stroke="#ffff"/>
      <Tooltip />
      <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "50px" }} />
      <ReferenceLine y={0} stroke="#000" />
      <Brush dataKey="name" height={30} stroke="#8884d8" />
      <Bar dataKey="pv" fill="#8884d8" />
    </BarChart>
  );
}
    

