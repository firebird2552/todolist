import React, { useState } from "react";
import ListItem from "./ListItem";

import { TODO_ITEMS } from "../../../api/todoItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const List = (props) => {
  const updateCompleteStatus = () => {};
  const updatePriority = () => {};
  const updateCreateNew = (todoText, complete, priority) => {
    if (createNew) {
      setCreateNew(false);
      TODO_ITEMS.push({
        itemID: TODO_ITEMS.length + 1,
        todoText,
        complete,
        priority,
      });
    }
  };

  const [createNew, setCreateNew] = useState(false);

  return (
    <div>
      {TODO_ITEMS.map((item) => {
        return (
          <ListItem
            key={item.itemID}
            todoItem={item}
            updateComplete={updateCompleteStatus}
            updatePriority={updatePriority}
            updateCreateNew={updateCreateNew}
          />
        );
      })}
      {createNew ? (
        <ListItem
          todoItem={null}
          updateComplete={updateCompleteStatus}
          updatePriority={updatePriority}
          editMode={true}
          updateCreateNew={updateCreateNew}
        />
      ) : null}
      <button
        onClick={(e) => {
          e.preventDefault();
          setCreateNew(!createNew);
        }}
      >
        {!createNew ? <FontAwesomeIcon icon={faPlus} /> : "Cancel"}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = {};
