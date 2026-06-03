import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 w-full justify-between gap-5 text-amber-50'>
        <div className='py-6 px-9 rounded-2xl bg-red-500 w-[45%]'>
            <h1 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h1>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='py-6 px-9 rounded-2xl bg-blue-500 w-[45%]'>
            <h1 className='text-3xl font-semibold'>{data.taskCounts.completed}</h1>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='py-6 px-9 rounded-2xl bg-green-500 w-[45%]'>
            <h1 className='text-3xl font-semibold'>{data.taskCounts.active}</h1>
            <h3 className='text-xl font-medium'>Active Task</h3>
        </div>
        
        
         <div className='py-6 px-9 rounded-2xl bg-yellow-500 w-[45%]'>
            <h1 className='text-3xl font-semibold'>{data.taskCounts.failed}</h1>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>


    </div>
  )
}

export default TaskListNumber