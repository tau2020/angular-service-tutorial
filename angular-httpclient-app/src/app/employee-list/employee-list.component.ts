import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
Employee: any=[];
  constructor(public restApi: RestApiService) { }

  ngOnInit():void  {
this.loadEmployees();
  }

  loadEmployees(){
    return this.restApi.getEmployees().subscribe((response:{})=>{
      this.Employee = response;
    })
  }
  deleteEmployee(id: any){
    if(window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteEmployee(id).subscribe((data)=>{
        this.restApi.deleteEmployee(id).subscribe((data) =>{
          this.loadEmployees();
        })
      })
    }
  }

}
