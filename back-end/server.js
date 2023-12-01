const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todo",
});
  
//for reade data

app.get("/", (req, res) => {         
  const sql = "SELECT * FROM task";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

//for create data

app.post("/create", (req, res) => {
  const sql = "INSERT INTO task (`task`) VALUES (?)";  // Corrected SQL syntax
  const values = [req.body.task];

  db.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

//for update data

app.put("/update/:id", (req, res) => {
  console.log(req.body.task, req.params.id);
  const sql = "update task set `task`= ? WHERE `ID`= ?";
  const values = req.body.task;
  const id = req.params.id;
  db.query(sql, [values, id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

//for delete data

app.delete("/task/:id", (req, res) => {
  const sql = "DELETE FROM task WHERE ID = ?";

  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});



app.listen(5000, () => {
  console.log("Server is running on Port 5000");
  console.log("Connected to MySql Database");
});