const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  id: { type: String, required: true }, 
  name: { type: String, required: true },
  position: String,
  department: String,
  joiningDate: Date,
  salary: Number,
});

module.exports = mongoose.model('Employee', employeeSchema);
