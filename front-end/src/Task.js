import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Task() {
  const [task, setTask] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => setTask(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:5000/task/' + id)
      window.location.reload()
    } catch (err) {
      console.log(err);

    }
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">
          Add Task +
        </Link>
        <Link to="/read" className="btn btn-success float-end">Read Data</Link>
        <h3 className="text-center">Your Tasks</h3>
        <table className="table col-md-6">
          <thead>
            <tr>

              <th>your task</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {task.map((data, i) => (
              <tr key={i}>
                <td>{data.task}</td>
                <td>
                  < Link to={`/update/${data.ID}`} className="btn btn-primary">Update</Link>
                  <button className="btn btn-danger ms-2" onClick={e => handleDelete(data.ID)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Task;
