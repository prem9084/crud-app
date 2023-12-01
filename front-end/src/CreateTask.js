import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateTask() {
  const [task, setTask] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:5000/create", { task })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <from>
          <h2>Add Task</h2>
          <div className="mb-2">
            <label htmlFor="">Task</label>
            <input
              type="text"
              placeholder="Task"
              className="form-control"
              onChange={(e) => setTask(e.target.value)}
            />
          </div>

        </from>
        <button onClick={handleSubmit} className="btn btn-success">
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreateTask;
