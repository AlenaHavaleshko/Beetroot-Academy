import React, { useState } from "react";      

//assets
import "../../assets/styles/containers/todo-list.scss";
import ToDoListItem from "../TodoListItem";

let permanentToDo = [
 {
   task: "Make your bad",
   isChecked: false
 },
 {
   task: "Brush your teeth",
   isChecked: false
 },
 {
   task: "Have breakfast",
   isChecked: false
 }
]


function ToDoList() {

 const [whatNeedToDo, setWhatNeedToDo] = useState("");   // зберігаємо те,що вводим в інпуті (в імпорті додали useState)
 const [tasksToDisplay , addNewTasksToDisplay] = useState(permanentToDo);




 const handleSubmit = e => {
  e.preventDefault();                     // щоб не перезагружалася форма
  
  addNewTasksToDisplay([
   ...tasksToDisplay,
    {
      task: whatNeedToDo,                   // розпакували повністю новий масив в масив, роблю распакову і додаємо нове з інпута значення
      isChecked: false
    }
 ]);

 setWhatNeedToDo("");

}
  // console.log(tasksToDisplay);            // вивели  пуш з інпута у консоль (не додаєтья ще в todo list )
   // setTasksToDisplay(tasksToDisplay);     // передаємо новий списокв функцію
  // console.log("handleSubmit");              // перевірка чи викликається сабміт хендлер
 
 // console.log("whatNeedToDo!", whatNeedToDo);  // виводим в консолі те ,ща в інуті вводим

  return (
    <section className="todo-list-wrapper">
      <h1 className="todo-list__header">TO DO</h1>
      <form 
        className="todo-list__form"
        onSubmit={handleSubmit}           // щоб не перезагружалася форма// 
      >
        <input
          type="text"
          className="todo-list__form__input"
          placeholder="Create a new todo..."
          name="task"
          value={whatNeedToDo}
          onChange = {e => setWhatNeedToDo(e.target.value)}
        />
        <button type="submit" className="todo-list__form__button">
          <svg
            width="56"
            height="33"
            viewBox="0 0 56 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.8394 2.50969C38.8238 2.79836 41.5346 12.2524 41.3919 16.9433"
              stroke="white"
              stroke-width="4"
            />
            <line
              x1="0.828796"
              y1="2.14552"
              x2="29.9339"
              y2="2.14552"
              stroke="white"
              stroke-width="4"
            />
            <path
              d="M39.8439 32.0585C40.6249 32.8523 41.891 32.8729 42.672 32.1046L55.3982 19.5841C56.1791 18.8158 56.1791 17.5495 55.3982 16.7557C54.6172 15.9619 53.3511 15.9413 52.5701 16.7096L41.2579 27.8389L29.9457 16.3408C29.1648 15.547 27.8986 15.5263 27.1177 16.2947C26.3367 17.063 26.3367 18.3293 27.1177 19.1231L39.8439 32.0585ZM39.2582 15.4553L39.2582 30.6347L43.2577 30.6999L43.2577 15.5205L39.2582 15.4553Z"
              fill="white"
            />
          </svg>
        </button>
      </form>

      <ul className="todo-list">
        {
           tasksToDisplay.map((item, index) => {           // додала існуючий постійний массив
            console.log(item)
            return (
              <ToDoListItem
              taskName= {item.task}
              isChecked = {item.isChecked}
              key = {index}
              ></ToDoListItem>
             )
           })
        }
      </ul>
    </section>
  );
}

export default ToDoList;
