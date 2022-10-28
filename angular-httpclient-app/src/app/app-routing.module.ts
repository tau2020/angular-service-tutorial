import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AppComponent } from './app.component';
const routes: Routes = [
{path:'', pathMatch:'full', redirectTo:'create-employee'},
{path:'create-employee', component: EmployeeCreateComponent},
{path:'employee-list', component: EmployeeListComponent},
{path:'employee-edit/:id', component:EmployeeEditComponent}

];

@NgModule({

  imports: [HttpClientModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
