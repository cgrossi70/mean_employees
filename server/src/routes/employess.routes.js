import { Router } from "express";
import employeesCtrl from '../controllers/employees.controllers.js'

const router = Router()

router.get('/', employeesCtrl.getEmployees)
router.get('/:id', employeesCtrl.getEmployee)
router.post('/', employeesCtrl.addEmployee)
router.put('/:id', employeesCtrl.editEmployee)
router.delete('/:id', employeesCtrl.deleteEmployee)

export default router