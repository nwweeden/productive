import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList() {
  return (
      <div className="TodoList">
        <h3 className="mb-3">Todos</h3>

          {/*   FIXME  */}
          <EditableTodo />
          <EditableTodo />
          <EditableTodo />
          <EditableTodo />
          <EditableTodo />
      </div>
  );
}

export default EditableTodoList;
