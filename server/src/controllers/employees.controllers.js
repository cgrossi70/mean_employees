import { request } from 'express'
import Employee from '../model/employee.js'

const employeesCtrl = {}

employeesCtrl.getEmployees = async function(req,res) {
  const employees = await Employee.find()
  res.json(employees)
}

employeesCtrl.getEmployee = async function(req,res) {
  const employee = await Employee.findById(req.params.id)
  res.json(employee)
}

employeesCtrl.addEmployee = async function(req,res) {
  const employee = new Employee({
    "name": req.body.name,
    "position": req.body.position,
    "office": req.body.office,
    "salary": req.body.salary
  })
  await employee.save()
  res.send({"message": "Employee Created"})
}

employeesCtrl.editEmployee = async function(req,res) {
  await Employee.findByIdAndUpdate(req.params.id, req.body)
  res.send({"message": "Employee Updated"})
}
employeesCtrl.deleteEmployee = async function(req,res) {
  await Employee.findByIdAndDelete(req.params.id)
  res.send({"message": "Employee Deleted"})
}


export default employeesCtrl