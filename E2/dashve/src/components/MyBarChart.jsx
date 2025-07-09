import { useEffect, useState } from 'react';
import axios from 'axios';
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function MyBarChart () {
  
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
        <div className = "form_container_d">
          <h2 >Simulaciones </h2>
          <br></br>
          <br></br>
          
          <BarChart
          width={400}
          height={210}
          data={dash[1]}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis stroke="#ffff" color="white"  dataKey="name" scale="point" padding={{ left: 30, right: 30 }} />
          <YAxis stroke="#ffff"/>
          <Tooltip />
          <Legend />
          <CartesianGrid />
          <Bar dataKey="pv" fill="#F2DD8D"  />
        </BarChart>

        <BarChart
          width={400}
          height={210}
          data={dash[0]}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis  stroke="#ffff" dataKey="name" scale="point" padding={{ left: 30, right: 30 }} />
          <YAxis stroke="#ffff"/>
          <Tooltip />
          <Legend  />
          <CartesianGrid   />
          <Bar dataKey="pv" fill="#F2DD8D"  />
        </BarChart>
        
      </div>
        
    );

}

