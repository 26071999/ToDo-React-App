import "./CSS/ToDoItems.css";
import tick from "./Assets/tick.jpg";
import no_tick from "./Assets/no_tick.png";
import cross from "./Assets/cross.png";
export const ToDoItems = ({ no, display, text, setTodos }) => {

const deleteTodo=(no)=>{
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo)=> todo.no !==no);
    setTodos(data);
}

  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let index = 0; index < data.length; index++) {
      if (data[index].no === no) {
        if (data[index].display === "") {
          data[index].display = "line-through";
        } else {
          data[index].display = "";
        }
        break;
      }
    }
    setTodos(data);
  };
  return (
    <div className="todoitems">
        {/* 
        Here "className={`todoitems-container ${display}`}" by using this dynamic call, we can set the class name for this div, so we can make the css properties accordingly.
        When the display is empty, the list item will not strike-out
        If the display is line-through, then the list item will be strike-out
        */}
        <div className={`todoitems-container ${display}`} onClick={() => toggle(no)}>
        {display === "" ? <img className="todoitems-notick-icon" src={no_tick} alt="" />:<img className="todoitems-tick-icon" src={tick} alt="" />
        }
        <div className="todoitems-text">{text}</div>
      </div>
      <img className="todoitems-cross-icon" src={cross} onClick={()=>deleteTodo(no)} alt="" />
    </div>
  );
};
