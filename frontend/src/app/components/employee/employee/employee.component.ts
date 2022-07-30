import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { NgForm } from '@angular/forms';
import { VirtualTimeScheduler } from 'rxjs';
import { IEmployee } from 'src/app/models/employees';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees()
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((res) => {
      this.employeeService.employees = res
    })
  }

  addEmployee(form: NgForm) {
    if(form.value._id){
      this.employeeService.updateEmployee(form).subscribe((res) => {
        this.getEmployees()
        form.reset()
      });
      return false
    }
    else {
      this.employeeService.addEmployee(form).subscribe((res) => {
        this.getEmployees()
        form.reset()
      });
      return false
    
    }
  }

  updateEmployee(employee: IEmployee) {
    this.employeeService.newEmployee = employee
  }

  deleteEmployee(_id: string) {
    if(confirm('Are you sure you want to delete'))
      this.employeeService.deleteEmployee(_id).subscribe(
        (res) => {
          console.log(res);
          this.getEmployees();
        }
      );
  }

}
