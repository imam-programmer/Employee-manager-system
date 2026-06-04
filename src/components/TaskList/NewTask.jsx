import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="h-full bg-green-400 w-75 p-5 rounded-2xl shrink-0">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-500 px-3 text-sm py-1 rounded text">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">
       {data.taskDescription}
      </p>
      <div className="mt-4">
        <button>Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;
