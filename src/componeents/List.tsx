import React, { ChangeEvent, useState } from "react";
import classes from "./List.module.css";
import Item from "./Item";
import plusSvg from "../assets/plus.svg";
import uuid from "react-uuid";

export interface TaskItem {
  key: string;
  title: string;
  time: string;
  isActive: boolean;
}

export interface date {
  time: string;
}

const List = ({time}:date) => {
  const [taskList, setTaskList] = useState<TaskItem[]>([]);
  const [taskTitle, setTaskTitle] = useState<string | null>(null);

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;

    if(value.length > 20) {
      return;
    }

    setTaskTitle(event.target.value);
  };

  const handleAddTask = (event: React.FormEvent) => {
    event.preventDefault();

    if (taskTitle === null) return;

    let today = new Date().toISOString().slice(0, 10);

    let newValues = {
      key: uuid(),
      title: taskTitle,
      time: today+" "+time,
      isActive: true
    };

    setTaskList([newValues, ...taskList]);
    setTaskTitle(null);
  };

  const handleDelete = (id:string) => {
    let newTaskList = taskList.filter((task) => {
      return task.key !== id
    });
    setTaskList(newTaskList);
  }

  const handleCheck = (id:string) => {
    let newTaskList = taskList.map((task) => {
      if (task.key === id) {
        task.isActive = !task.isActive;
      }

      return task;
    });

    setTaskList(newTaskList);
  }

  return (
    <div className={classes["list-container"]}>
      <form className={classes["add-task-container"]} onSubmit={handleAddTask}>
        <input
          type="text"
          className={classes["add-task-input"]}
          placeholder="Note"
          value={taskTitle ?? ""}
          onChange={handleChangeTitle}
        />
        <button type="submit">
          <img src={plusSvg} alt="" />
        </button>
      </form>

      <div className={classes["list-items-container"]}>
        {taskList.map(item => {
          return <Item data={item} onDelete={handleDelete} onCheck={handleCheck}/>;
        })}
      </div>

    </div>
  );
};

export default List;
