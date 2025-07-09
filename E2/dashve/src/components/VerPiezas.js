
import React from 'react';
import PerformanceTable from './PerformanceTable';
import LooksTable from './LooksTable';
import SideBar from "../components/SideBar";

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function VerPiezas() {
  
  return (
    

  <div className="box">
    <div id="side"> <SideBar/>
    </div>
    <div id="content"> 
      <div className='box'>
        <div>
          <PerformanceTable />
        </div>
        <div>
        <LooksTable />
      </div>
    </div>
    </div>
  </div>
  );
}