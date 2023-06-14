import React, { useState } from "react";

//assets
import "../../assets/styles/containers/todo-list.scss";

function ToDoListItem({ taskName, isChecked, index }) {
  const [cheched, setChecked] = useState(isChecked);
  return (
    <li
      className={`todo-list__item ${
        cheched ? " line-through-item" : "" // тернарнік закреслюєм
      }`}
      key={`todo-list__item-${index}`}
    >
      <div className="todo-list__item-block">
        <b className="todo-list__item-block__text">
          <input
            type="checkbox"
            checked={cheched}
            onChange={(e) => setChecked(!cheched)}
          ></input>
          {/* <svg
        width="44"
      viewBox="0 0 44 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="21.7575"
          cy="22.6597"
          r="20.708"
          stroke="#BF56FF"
          stroke-opacity="0.79"
          stroke-width="2"
        />
      </svg> */}
          {taskName}
        </b>
      </div>
    </li>
  );
}

export default ToDoListItem;
