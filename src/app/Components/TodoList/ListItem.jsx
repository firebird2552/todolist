import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export const ListItem = ({
  todoItem,
  updateComplete,
  updatePriority,
  editMode = false,
  updateCreateNew,
}) => {
  const setupTodoText = () => {
    if (todoItem) {
      return todoItem.todoText;
    }
    return "";
  };
  const setupComplete = () => {
    if (todoItem) {
      return todoItem.complete;
    }
    return "";
  };
  const setupPriority = () => {
    if (todoItem) {
      return todoItem.priority;
    }
    return "";
  };

  const [todoText, setTodoText] = useState(setupTodoText);
  const [complete, setComplete] = useState(setupComplete);
  const [priority, setPriorty] = useState(setupPriority);
  const [editModeState, setEditModeState] = useState(editMode);

  console.log("Fordorth.com: TODO App -> ListItem -> priority", priority);

  const DisplayPriority = () => {
    console.log(
      "Fordorth.com: TODO App -> ListItem -> DisplayPriority -> priority",
      typeof priority
    );
    switch (parseInt(priority)) {
      case 1:
        return "Low";
      case 2:
        return "Medium";
      case 3:
        return "High";
      case 4:
        return "Urgent";
      case 5:
        return "DO IT NOW!";
      default:
        return "Your priority was out of bounds";
    }
  };

  return (
    <form>
      <input
        type="checkbox"
        name="completeCheckbox"
        id=""
        value={complete}
        onChange={(e) => {
          setComplete(!complete);
        }}
      />
      {!editModeState ? (
        <div>
          <div>{todoText}</div>
          <DisplayPriority />
        </div>
      ) : (
        <div>
          <input
            type="text"
            name="todoText"
            id="todoText"
            value={todoText}
            onChange={(e) => {
              setTodoText(e.target.value);
            }}
          />
          {!complete ? (
            <select
              name="prioritySelector"
              value={priority}
              onChange={(e) => {
                setPriorty(e.target.value);
              }}
            >
              <option value="1">Low</option>
              <option value="2">Medium</option>
              <option value="3">High</option>
              <option value="4">Urgent</option>
              <option value="5">DO IT NOW!</option>
            </select>
          ) : null}
        </div>
      )}
      <button
        onClick={(e) => {
          e.preventDefault();
          setEditModeState(!editModeState);
          updateCreateNew(todoText, complete, priority);
        }}
      >
        <FontAwesomeIcon icon={faPencilAlt} />
      </button>
    </form>
  );
};

export default ListItem;
