const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const Employee = require('../models/Employee');

// CREATE
router.post('/', async (req, res) => {
  try {
    const { name, position, department, joiningDate, salary } = req.body;
    const newEmployee = new Employee({
      id: uuidv4(),
      name,
      position,
      department,
      joiningDate,
      salary,
    });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updated = await Employee.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Employee.findOneAndDelete({ id: req.params.id });
    res.json({ message: 'Employee deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
