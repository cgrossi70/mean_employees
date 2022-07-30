import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../models/employees';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  API_URL = 'http://localhost:3000/api/employees'
  employees: IEmployee[] = [{name: '', position: '', office: '', salary: 0,_id: ''}]
  newEmployee: IEmployee = {name: '', position: '', office: '', salary: 0,_id: ''}

  constructor(public http: HttpClient) { }

  getEmployees(){ 
    return this.http.get<IEmployee[]>(this.API_URL)
  }

  addEmployee(form: NgForm){
    console.log(form.value);
    return this.http.post(this.API_URL, form.value)  
  }

  updateEmployee(form: NgForm) {
    return this.http.put(this.API_URL+'/'+form.value._id,form.value)
  }

  deleteEmployee(_id: string){
    return this.http.delete(this.API_URL+'/'+_id)
  }
}
