import React, { useContext } from "react";
import { MdArrowOutward } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
import { RiDraggable } from "react-icons/ri";
import { useSortable } from "@dnd-kit/sortable";
import { GlobalState } from "../context/GlobalState";

function TaskCard({ task, id, section }) {
  const { attributes, listeners, setNodeRef, isDragging } = useSortable({
    id,
    data: { type: "task", section },
  });
  const { setAddTask, setCurrentTask } = useContext(GlobalState);

  if (!task) return null;

  const getPriorityClass = (priority) => {
    switch (priority) {
      case "low":
        return "bg-[#4ead6557]";
      case "medium":
        return "bg-[#f8fa8b51]";
      case "high":
      default:
        return "bg-[#fa888855]";
    }
  };

  const formattedDueDate = new Date(task.dueDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  const createdDate = new Date(task.createdAt).toLocaleDateString();
  const today = new Date().toLocaleDateString();

  return (
    <li
      ref={setNodeRef}
      className="w-full h-35 sm:min-h-40 bg-task-bg rounded-xl p-3 flex flex-col justify-between touch-none"
      style={{
        opacity: isDragging ? 0.7 : 1,
        border: isDragging ? "1px solid #000" : undefined,
      }}
    >
      {!isDragging && (
        <>

          <div className="font-lato">
            <div className="flex justify-between items-center">
              <span
                className={`w-24 h-6 text-[10px] font-bold leading-6 text-center rounded-full ${getPriorityClass(task.priority)}`}
              >
                <span className="text-priority-color relative -z-10 brightness-200">
                  {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
                </span>
              </span>
              <MdArrowOutward
                size={18}
                className="cursor-pointer mode-items"
                onClick={() => {
                  setAddTask(true);
                  setCurrentTask(task);
                }}
              />
            </div>

           
            <h2 className="mt-3 font-roboto text-lg font-medium mode-items">
              {task.title}
            </h2>
            <span className="text-xs font-light mode-items">
              Due: {formattedDueDate || "None"}
            </span>
          </div>

    
          <div className="flex justify-between text-xs font-lato mode-items">
            <RiDraggable
              size={15}
              className="cursor-grab active:cursor-grabbing"
              {...listeners}
              {...attributes}
            />
            <span className="flex items-center">
              {createdDate === today ? (
                <>
                  <IoStarSharp className="mr-1 text-blue-600" />
                  Today
                </>
              ) : (
                createdDate
              )}
            </span>
          </div>
        </>
      )}
    </li>
  );
}

export default TaskCard;
