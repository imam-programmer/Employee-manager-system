import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const CreateTask = () => {

  const [userData,setUserData] = useContext(AuthContext);

  const [taskTitle, settaskTitle] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [asignTo, setasignTo] = useState("");
  const [catagory, setcatagory] = useState("");
  const [newTask, setNewTask] = useState({})
  const submitHandler = (e) => {
    e.preventDefault();
   setNewTask({ taskTitle, taskDescription, taskDate, catagory, active:false, newTask:true, failed:false, completed:false})

  const data=userData

 data.forEach((elem)=>{
  if(asignTo==elem.firstName){
    elem.tasks.push(newTask)
    elem.taskCounts.newTask = elem.taskCounts.newTask+1
  }
 })
setUserData(data);

 settaskTitle("")
 settaskDescription("")
 settaskDate("")
 setasignTo("")
 setcatagory("")
  };
  return (
    <div className="mt-10">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="rounded-2xl flex flex-wrap w-full bg-[#33333398] px-10 py-5 items-start justify-between"
      >
        <div className="w-1/2">
          <div className="mb-2">
            <h3>Task Title</h3>
            <input value={taskTitle} onChange={(e)=>{
              settaskTitle(e.target.value)
            }}
              className="border w-[70%] px-2 rounded"
              type="text"
              placeholder="Make a ui design"
            />
          </div>
          <div className="mb-2">
            <h3>Date</h3>
            <input value={taskDate} onChange={(e)=>{
              settaskDate(e.target.value)
            }} className="border w-[70%] px-2 rounded" type="date" />
          </div>
          <div className="mb-2">
            <h3>Asign to</h3>
            <input value={asignTo} onChange={(e)=>{
              setasignTo(e.target.value)
            }}
              className="border w-[70%] px-2 rounded"
              type="text "
              placeholder="employe name"
            />
          </div>
          <div className="mb-2">
            <h3>Category</h3>
            <input value={catagory} onChange={(e)=>{
              setcatagory(e.target.value)
            }}
              className="border w-[70%] px-2 rounded"
              type="text"
              placeholder="design,dev,etc"
            />
          </div>
        </div>
        <div className="w-1/2">
          <h3>Description</h3>
          <textarea value={taskDescription} onChange={(e)=>{
              settaskDescription(e.target.value)
            }}
            className="border w-full h-[150px] rounded"
            name=""
            id=""
          ></textarea>
          <button className="w-full mt-1 cursor-pointer active:scale-90 transition bg-green-600 rounded py-2">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
