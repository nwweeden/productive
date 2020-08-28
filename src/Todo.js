import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TodoApp } -> Todo
 **/

//  CR: including an id so that we could use it in a future
// use of this component. Can easily grab it - don't have to go back 
//up to the parent and try and find it

function Todo({ id, title, description, priority }) {
  return (
      <div className="Todo">
        <div><b>{title}</b> <small>(priority: {priority})</small></div>
        <div><small>{description}.</small></div>
      </div>
  );
}

export default Todo;
