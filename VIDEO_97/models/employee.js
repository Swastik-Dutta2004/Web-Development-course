const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

const employeeSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  city: String,
  language: String,
  isManager: Boolean
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee