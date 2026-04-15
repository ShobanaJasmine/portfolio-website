const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

/* Connect MongoDB */
mongoose.connect("mongodb://127.0.0.1:27017/portfolio")
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

/* Schema */
const Project = mongoose.model("Project", {
  title: String,
  description: String,
  tech: String,
  github: String
});

/* GET API */
app.get("/projects", async (req, res) => {
  const data = await Project.find();
  res.json(data);
});

/* POST API */
app.post("/projects", async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.send("Project Saved");
});

/* Start Server */
app.listen(5000, () => {
  console.log("Server running on port 5000");
});