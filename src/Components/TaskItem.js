import React, { useState } from "react";

export default function TaskItem(props) {
  const [update, setUpdate] = useState(false);

  const task = props.task;

  return (
    <>
      <li>
        <p className="todo-text">
          {task.title}
          <span class="chip info">{task.priority}</span>
          <p
            className="remove"
            onClick={() => {
              props.deleteTask(task.id);
            }}
          >
            Delete
          </p>
          <p
            className="update"
            onClick={() => {
              setUpdate(!update);
            }}
          >
            Update
          </p>
        </p>
      </li>

      {update && (
        <div>
          <form className="update-form">
            <input
              type="text"
              placeholder="What will you do today?"
              name="title"
            />
            <select className="form-select select" name="priority">
              <option value="">Priority</option>
              <option value="High">High</option>
              <option value="Moderate">Moderate</option>
              <option value="Low">Low</option>
            </select>
            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </>
  );
}
