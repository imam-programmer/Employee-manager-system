import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[55%] text-amber-50 overflow-x-auto w-full py-5 bg-full flex items-center gap-5 flex-nowrap mt-10"
    >
      <div className="h-full bg-red-400 w-[300px] p-5 rounded-2xl shrink-0">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500 px-3 text-sm py-1 rounded text">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
          eveniet minima laudantium officia, praesentium earum.
        </p>
      </div>

      <div className="h-full bg-green-400 w-[300px] p-5 rounded-2xl shrink-0">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500 px-3 text-sm py-1 rounded text">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
          eveniet minima laudantium officia, praesentium earum.
        </p>
      </div>

      <div className="h-full bg-blue-400 w-[300px] p-5 rounded-2xl shrink-0">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500 px-3 text-sm py-1 rounded text">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
          eveniet minima laudantium officia, praesentium earum.
        </p>
      </div>

      <div className="h-full bg-yellow-400 w-[300px] p-5 rounded-2xl shrink-0">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500 px-3 text-sm py-1 rounded text">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
          eveniet minima laudantium officia, praesentium earum.
        </p>
      </div>

    
    </div>
  );
};

export default TaskList;
