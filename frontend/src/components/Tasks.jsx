import React, { useContext, useState } from "react";
import { GlobalState } from "../context/GlobalState";

import {
  DndContext,
  closestCorners,
  DragOverlay,
  KeyboardSensor,
  TouchSensor,
  useSensor,
  useSensors,
  PointerSensor,
  MouseSensor,
} from "@dnd-kit/core";

import { arrayMove } from "@dnd-kit/sortable";
import TaskSection from "./TaskSection";
import DragOverlayCard from "./DragOverlayCard";
import {
  onHandleMove,
  handleDragEnd,
  handleDragStart,
} from "../assets/dnd";

function Tasks() {
  const { tasks, setTasks, setAddTask } = useContext(GlobalState);
  const [active, setActive] = useState(null);
  const [data, setData] = useState(null);

 
  const sensors = useSensors(
    useSensor(TouchSensor, {
      activationConstraint: { delay: 250, tolerance: 5 },
    }),
    useSensor(KeyboardSensor),
    useSensor(PointerSensor),
    useSensor(MouseSensor)
  );

  return (
    <section className="tasks min-h-svh w-full px-2 cursor-default scrollbar">
     
      <div className="flex justify-between items-center flex-wrap">
        <h2 className="font-lato font-bold text-xl md:text-3xl mode-items m-6 mt-[38px] ml-[38px] md:ml-0 md:mt-6">
          Your Day, Your Goals, Your Victory
        </h2>
        <button
          type="button"
          className="h-10 w-40 text-xs rounded-lg bg-blue-800 text-[#f2f2f2] hover:bg-blue-900 leading-10 text-center font-medium"
          onClick={() => setAddTask(true)}
        >
          <span className="text-lg inline-block">+</span> Add Your Task
        </button>
      </div>

     
      <DndContext
        onDragStart={(e) =>
          handleDragStart(e, setAddTask, setActive, tasks)
        }
        onDragMove={(e) =>
          onHandleMove(e, setData, setTasks, tasks, arrayMove)
        }
        onDragEnd={() => handleDragEnd(setActive, data)}
        collisionDetection={closestCorners}
        sensors={sensors}
      >
        {/* Task Sections */}
        <div className="flex h-fit px-4 sm:h-[85vh] flex-wrap sm:flex-nowrap sm:space-x-2 space-y-4 sm:space-y-0">
          <TaskSection
            array={tasks?.todo || []}
            gradient="bg-to-do-gradient"
            id="todo"
          />
          <TaskSection
            array={tasks?.progress || []}
            gradient="bg-progress-gradient"
            id="progress"
          />
          <TaskSection
            array={tasks?.completed || []}
            gradient="bg-completed-gradient"
            id="completed"
          />
        </div>

      
        <DragOverlay>
          {active && <DragOverlayCard task={active} />}
        </DragOverlay>
      </DndContext>
    </section>
  );
}

export default Tasks;
