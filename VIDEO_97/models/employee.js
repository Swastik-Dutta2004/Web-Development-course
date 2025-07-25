import { boolean } from "webidl-conversions";

const employeeSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  city: String,
  language: String,
  isManager: boolean
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee