const { application } = require("express");
const express = require("express");
const { restart } = require("nodemon");
const Task = require("./models");
const router = express.Router();

router.get("/todos", async (req, res) => {
  const tasks = await Task.findAll();

  res.status(200).json(tasks);
});

router.post("/todos", async (req, res) => {
  const { content, description, isComplete } = req.body;

  const newTask = Task.build({
    content: content,
    description: description,
    isComplete: isComplete,
  });

  try {
    await newTask.save();

    res.status(200).json(newTask);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/todo/:id", async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOne({ where: { id } });

  res.status(200).json(task);
});

router.patch("/todo/:id", async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOne({ where: { id } });

  const { isComplete } = req.body;

  await task.set({
    isComplete: isComplete,
  });

  await task.save();

  res.status(200).json(task);
});

router.put("/todo/:id", async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOne({ where: { id } });

  const { isComplete, content, description } = req.body;

  await task.set({
    isComplete: isComplete,
    content: content,
    description: description,
  });

  await task.save();

  res.status(200).json(task);
});

router.delete("/todo/:id", async (req, res) => {
  const { id } = req.params;

  const task = await Task.findOne({
    where: {
      id,
    },
  });
  await task.destroy();
  res.status(204).json("borrado");
});

module.exports = router;
