import React, { useContext, useEffect, useState } from "react";
import { CiTimer } from "react-icons/ci";
import { GlobalState } from "../context/GlobalState";
import { MdDeleteOutline } from "react-icons/md";
import DatePicker from "react-datepicker";
import { showAlert } from "../assets/helpers";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

function TaskForm() {
  const {
    currentTask,
    setAddTask,
    setRefetch,
    setCurrentTask,
    showLoader,
    setShowLoader,
  } = useContext(GlobalState);

  const [taskDetails, setTaskDetails] = useState({
    title: "",
    description: "",
    startDate: new Date(),
    dueDate: new Date(),
    priority: "low",
    status: "todo",
  });

  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (currentTask) {
      setTaskDetails({
        title: currentTask.title || "",
        description: currentTask.description || "",
        startDate: currentTask.startDate ? new Date(currentTask.startDate) : new Date(),
        dueDate: currentTask.dueDate ? new Date(currentTask.dueDate) : new Date(),
        priority: currentTask.priority || "low",
        status: currentTask.status || "todo",
      });
      setTags(currentTask.tags || []);
    }
  }, [currentTask]);

  const handleTaskStatus = async (e, action) => {
    e.preventDefault();
    setShowLoader(true);

    try {
      const method = action === "delete" ? "DELETE" : currentTask ? "PATCH" : "POST";
      const url = `${import.meta.env.VITE_URL}/api/tasks/${currentTask?._id || ""}`;
      const payload = action === "delete" ? undefined : { ...taskDetails, tags };

      const { data } = await axios({ url, method, data: payload, withCredentials: true });

      if (data?.status === "success") {
        setRefetch(true);
        setAddTask(false);
        setCurrentTask(null);
      }
    } catch (err) {
      console.error(err);
      showAlert(err.response?.data?.message || "Error occurred", "task-form");
    } finally {
      setShowLoader(false);
    }
  };

  const handleLastUpdated = () => {
    if (!currentTask) return "last updated (now)";
    const last = new Date(currentTask.lastUpdated);
    const today = new Date().toDateString();
    return `last updated (${
      last.toDateString() === today
        ? last.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })
        : last.toLocaleDateString("en-US")
    })`;
  };

  return (
    <div className="task-details px-3 pb-5 h-full overflow-y-scroll scrollbar flex flex-col justify-between">
      <div>
        <h1 className="font-roboto font-medium text-xl pl-6 p-4 flex justify-between items-center text-[#2c2c2c] mode-items">
          Task Overview
        </h1>

        <form id="task-form" className="flex flex-col space-y-3">
          <input
            type="text"
            name="title"
            required
            className="w-full font-roboto py-3 px-4 border border-border-color bg-transparent outline-none rounded-lg mode-items"
            placeholder="Title"
            value={taskDetails.title}
            onChange={(e) => setTaskDetails({ ...taskDetails, title: e.target.value })}
          />

          <h3 className="text-[#626262] font-roboto text-xs font-bold my-3">ATTRIBUTES</h3>
          <hr className="border-border-color" />

          <label className="text-sm text-[#626262] font-roboto font-medium">
            Status
            <select
              className={`status-select w-24 ml-10 py-1 text-sm text-center rounded-md outline-none border-0 text-[#2c2c2c] cursor-pointer ${
                {
                  todo: "bg-red-200",
                  progress: "bg-yellow-200",
                  completed: "bg-green-200",
                }[taskDetails.status]
              }`}
              value={taskDetails.status}
              onChange={(e) => setTaskDetails({ ...taskDetails, status: e.target.value })}
            >
              <option value="todo">todo</option>
              <option value="progress">progress</option>
              <option value="completed">completed</option>
            </select>
          </label>

          <label className="text-sm text-[#626262] font-roboto font-medium">
            Priority
            <select
              className={`w-24 ml-10 py-1 text-sm text-center rounded-md outline-none border-0 text-[#2c2c2c] cursor-pointer ${
                {
                  low: "bg-[#a5f4b9]",
                  medium: "bg-[#f6d7a9]",
                  high: "bg-[#e49090]",
                }[taskDetails.priority]
              }`}
              value={taskDetails.priority}
              onChange={(e) => setTaskDetails({ ...taskDetails, priority: e.target.value })}
            >
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </select>
          </label>

          <label className="text-sm text-[#626262] font-roboto font-medium">
            <span className="mr-10">Start Date</span>
            <DatePicker
              selected={taskDetails.startDate}
              onChange={(date) => setTaskDetails({ ...taskDetails, startDate: date })}
              showIcon
            />
          </label>

          <label className="text-sm text-[#626262] font-roboto font-medium">
            <span className="mr-10">Due Date</span>
            <DatePicker
              selected={taskDetails.dueDate}
              onChange={(date) => setTaskDetails({ ...taskDetails, dueDate: date })}
              showIcon
            />
          </label>

          <textarea
            className="bg-transparent min-h-fit resize-none outline-none mode-items border border-gray-300 rounded-md p-4"
            placeholder="Write description..."
            rows={6}
            value={taskDetails.description}
            onChange={(e) => setTaskDetails({ ...taskDetails, description: e.target.value })}
          />
        </form>
      </div>

      <div className="text-sm text-[#626262] flex justify-between items-center">
        <span className="flex items-center">
          <CiTimer className="mr-1" size={13} />
          <span className="text-xs">{handleLastUpdated()}</span>
        </span>
        <div className="flex">
          {currentTask && (
            <MdDeleteOutline
              className="m-2 text-[#626262] cursor-pointer"
              size={20}
              onClick={(e) => handleTaskStatus(e, "delete")}
            />
          )}
          <button
            type="submit"
            form="task-form"
            className="form-submit-btn h-8 w-20 text-xs rounded-lg flex items-center justify-center bg-blue-800 text-[#f2f2f2] hover:bg-blue-900 font-medium"
            onClick={(e) => handleTaskStatus(e)}
          >
            {showLoader ? <span className="loader"></span> : "Done"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
