import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateTask from "./CreateTask";
import Task from "./Task";
import UpdateTask from './UpdateTask';
import DisplayData from './DisplayData'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Task />}></Route>
          <Route path="/create" element={<CreateTask />}></Route>
          <Route path="/update/:id" element={<UpdateTask />}></Route>
          <Route path="/read" element={<DisplayData />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
