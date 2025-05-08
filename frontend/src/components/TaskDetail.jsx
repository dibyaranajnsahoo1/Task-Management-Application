import React, { useContext, useEffect } from "react";
import TaskForm from "./TaskForm";
import { GlobalState } from "../context/GlobalState";

function TaskDetail() {
  const { addTask, setAddTask } = useContext(GlobalState);

  if (!addTask) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white dark:bg-nav-color p-6 rounded-xl w-full max-w-[600px] shadow-lg relative">
       
        <button
          className="absolute top-3 right-4 text-xl font-bold text-gray-600 hover:text-red-500"
          onClick={() => setAddTask(false)}
        >
          &times;
        </button>

        <TaskForm />
      </div>
    </div>
  );
}

export default TaskDetail;



