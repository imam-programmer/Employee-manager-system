import React from 'react'

const CreateTask = () => {
  return (
    <div className="mt-10">
        <form className="rounded-2xl flex flex-wrap w-full bg-[#33333398] px-10 py-5 items-start justify-between">
            <div className="w-1/2">

          <div className="mb-2">
            <h3>Task Title</h3>
            <input className="border w-[70%] px-2 rounded" type="text" placeholder="Make a ui design" />
          </div>
          <div className="mb-2">
            <h3>Date</h3>
            <input className="border w-[70%] px-2 rounded"  type="date" />
          </div>
          <div className="mb-2">
            <h3>Asign to</h3>
            <input className="border w-[70%] px-2 rounded"  type="text " placeholder="employe name" />
          </div>
          <div className="mb-2">
            <h3>Category</h3>
            <input className="border w-[70%] px-2 rounded"  type="text" placeholder="design,dev,etc" />
          </div>
            </div>
          <div className="w-1/2">
            <h3>Description</h3>
            <textarea className="border w-full h-[150px] rounded"  name="" id=""></textarea>
          <button className="w-full mt-1 cursor-pointer active:scale-90 transition bg-green-600 rounded py-2">Create Task</button>
          </div>
          
        </form>
      </div>
  )
}

export default CreateTask