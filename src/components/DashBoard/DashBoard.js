import React from 'react';
import Chart from '../LineChart/Chart';
import StackBar from '../StackBar/StackBar';
import StackChart from '../StackChart/StackChart';
import TwoLevelPieChart from '../TwoLevelPieChart/TwoLevelPieChart';
import './DashBoard.css'



const DashBoard = () => {
    return (
        <div className='rechart'>
          <Chart></Chart>
          <StackChart></StackChart>
          <StackBar></StackBar>
          <TwoLevelPieChart></TwoLevelPieChart>
        </div>
    );
};

export default DashBoard;