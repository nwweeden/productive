import React, { useState } from "react";
import uuid from "uuid/v4";


/** Form for adding.
 * 
 * State:
 * - formData
 *
 * Props:
 * - initialFormData
 * - handleSave: function to call in parent.
 *
 * { TodoApp, EditableTodo } -> TodoForm
 */

function TodoForm({ initialFormData, handleSave }) {
  // console.log("this is initialFormData", initialFormData)
  let initialState;
  //CR: can set IFD in the sig line and avoid the condition
  if (initialFormData) {
    initialState = {
      title: initialFormData.title,
      description: initialFormData.description,
      priority: initialFormData.priority
    }
  } else {
    initialState = {title: "", description: "", priority: 1}
  }

  const [formData, setFormData] = useState(initialState);

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  //CR: shouldn't be creating IDs - we've already created ids elsewhere
  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    const newId = initialFormData ? initialFormData.id : uuid(); 
    const newFormData = {...formData, id: newId}
    handleSave(newFormData);
    setFormData(initialState);
  }

  return (
      <form className="NewTodoForm" onSubmit={handleSubmit}>

        <div className="form-group">
          <input
              id="newTodo-title"
              name="title"
              className="form-control"
              placeholder="Title"
              onChange={handleChange}
              value={formData.title}
              aria-label="Title"
          />
        </div>

        <div className="form-group">
          <textarea
              id="newTodo-description"
              name="description"
              className="form-control"
              placeholder="Description"
              onChange={handleChange}
              value={formData.description}
              aria-label="Description"
          />
        </div>

        <div className="form-group d-flex justify-content-between">
          <div className="w-75 d-flex justify-content-between">
            <label htmlFor="newTodo-priority"
                   className="d-inline-flex">Priority:&nbsp;&nbsp;
            </label>
            <select id="newTodo-priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="form-control form-control-sm d-inline-flex"
            >
              <option value={1}>Ultra-Über</option>
              <option value={2}>Über</option>
              <option value={3}>Meh</option>
            </select>
          </div>
          <button className="btn-primary rig btn btn-sm NewTodoForm-addBtn">
            Gø!
          </button>
        </div>

      </form>
  );
}

export default TodoForm;
