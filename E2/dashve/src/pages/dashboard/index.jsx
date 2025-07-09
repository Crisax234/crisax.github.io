import React from "react";
import MyBarChart from "../../components/MyBarChart";
import MyPieChart from "../../components/MyPieChart";
import SideBar from "../../components/SideBar";




function DashBoard() {

    return (
        <div className="box">
          <div id="side"> <SideBar/>
          </div>
          <div id="content"> 
            <div className='box'>
              <div className = "dash_column">
                <MyBarChart />
                
              </div>
              <div className = "dash_column">
                
                <MyPieChart />
            </div>
          </div>
          </div>
  </div>

    )

}


export default DashBoard;