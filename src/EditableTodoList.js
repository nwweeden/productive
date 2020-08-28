import React from "react";
import EditableTodo from "./EditableTodo";
import uuid from "uuid/v4";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

//  CR: Components do one thing - be able to say that in one sentecne
// CR: you're making a new uuid every time (previous v.) - should be the id itself
function EditableTodoList({todos, update, remove}) {
  // console.log("EditableTodoList todos:", todos)
  return (
      <div className="TodoList">
        <h3 className="mb-3">Todos</h3>
        {todos.map(todo =>
          <EditableTodo
            todo={todo}
            update={update}
            remove={remove}
            key = {todo.id}
          />
        )}
      </div>
  );
}

export default EditableTodoList;
