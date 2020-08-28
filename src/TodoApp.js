import React, { useState } from "react";
import uuid from "uuid/v4";

import EditableTodoList from "./EditableTodoList";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

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

  const [todos, setTodos] = useState(initialTodos)

  /** add a new todo to list */
  function create(newTodo) {
    const nextTodo = {...newTodo, id: uuid()}
    setTodos(todos => [...todos, nextTodo])
    console.log("these are NEW todos:", todos)
  }

  /** update a todo with updatedTodo */
  //grab an current todo, and update
  function update(updatedTodo) {
    // console.log("this is updatedTodo", updatedTodo)
    setTodos(todos => {
      const todosCopy = [...todos]
      for(let i=0; i < todosCopy.length; i++){
        if (todosCopy[i].id === updatedTodo.id){
          // console.log("found the one to update", todosCopy[i])
          todosCopy[i] = updatedTodo
        }
      }
      // console.log("this is todosCopy", todosCopy)
      return todosCopy
    })
  }

  // function update(updatedTodo) {
  //   setTodos(todos => {
  //     todosCopy = [...todos];
  //     todosCopy
  //   }

  /** delete a todo by id */
  //some sort of filtering
  // CR: if you are relying on the current state, need a cb
  function remove(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }

  /** get highest-priority todo */
  function getTopTodo() {
    // console.log("this is todos:", todos)
    let highestPriority = todos[0];
    for (let todo of todos) {
      if (todo.priority < highestPriority.priority) {
        highestPriority = todo;
      }
    }
    // console.log("this is highestPriority", highestPriority)
    return (
      <Todo
        id={highestPriority.id}
        title={highestPriority.title}
        description={highestPriority.description}
        priority={highestPriority.priority}
      />
    );
  }

  return (
      <main className="TodoApp">
        <div className="row">
          <div className="col-md-6">
            <EditableTodoList todos={todos} update={update} remove={remove} />
          </div>
          <div className="col-md-6">
            <section className="mb-4">
              <h3>Top Todo</h3>
              {getTopTodo()}
            </section>
            <section>
              <h3 className="mb-3">Add Nü</h3>
              <TodoForm handleSave={create} />
            </section>
          </div>
        </div>

      </main>
  );
}

export default TodoApp;