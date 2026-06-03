// import React, { useEffect } from 'react'
import Header from '../../other/Header'
import TaskListNumber from '../../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  // console.log(data.id);
  
  return (
    <div className='p-10 br-[#1c1c1c] h-screen '>
      {/* <h1>{data.id}</h1> */}
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumber data={props.data}/>
        <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard