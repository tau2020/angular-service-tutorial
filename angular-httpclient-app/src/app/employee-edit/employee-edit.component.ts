import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];

  employeeData:any={}

  constructor(
    public restApi:RestApiService,
    public actRoute: ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit(): void {
    this.restApi.getEmployee(this.id).subscribe((response:{})=>{
      this.employeeData = response;
    })
  }

  updateEmployee(){
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateEmployee(this.id, this.employeeData).subscribe(response=>{
        this.router.navigate(['/employees-list'])
      })
    }
  }

}
