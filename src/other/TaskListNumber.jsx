import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex mt-10 w-full justify-between gap-5 text-amber-50'>
        <div className='py-6 px-9 rounded-2xl bg-red-500 w-[45%]'>
            <h1 className='text-3xl font-semibold'>0</h1>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='py-6 px-9 rounded-2xl bg-blue-500 w-[45%]'>
            <h1 className='text-3xl font-semibold'>0</h1>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='py-6 px-9 rounded-2xl bg-green-500 w-[45%]'>
            <h1 className='text-3xl font-semibold'>0</h1>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        
        
         <div className='py-6 px-9 rounded-2xl bg-yellow-500 w-[45%]'>
            <h1 className='text-3xl font-semibold'>0</h1>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>


    </div>
  )
}

export default TaskListNumber