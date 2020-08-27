import React, { useState } from "react";
import uuid from "uuid/v4";

import EditableTodoList from "./EditableTodoList";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({initialTodos}) {

  const [todos, setTodos] = useState([initialTodos])

  /** add a new todo to list */
  function create(newTodo) {
    const nextTodo = {...newTodo, id: uuid}
    setTodos(todos => [...todos, nextTodo])
  }

  /** update a todo with updatedTodo */
  //grab an current todo, and update
  function update(updatedTodo) {
    const todosCopy = [...todos]
    for(let i; i < todosCopy; i++){
      if (todosCopy[i].id = updatedTodo.id){
        todosCopy[i] = updatedTodo
      }
    }
    setTodos(todosCopy)
  }

  // function update(updatedTodo) {
  //   setTodos(todos => {
  //     todosCopy = [...todos];
  //     todosCopy
  //   }

  /** delete a todo by id */
  //some sort of filtering
  function remove(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  /** get highest-priority todo */
  function getTopTodo() { }

  return (
      <main className="TodoApp">
        <div className="row">
          <div className="col-md-6">
            <EditableTodoList />
          </div>
          <div className="col-md-6">
            <section className="mb-4">
              <h3>Top Todo</h3>
              FIXME
            </section>
            <section>
              <h3 className="mb-3">Add Nü</h3>
              FIXME
            </section>
          </div>
        </div>

      </main>
  );
}

export default TodoApp;