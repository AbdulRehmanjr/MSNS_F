import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



import { SharedModule } from '../shared/shared.module';

// ng prime
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

import { TeacherComponent } from './teacher.component';
import { SidebarComponent } from '../../components/teacher/sidebar/sidebar.component';
import { DashboardComponent } from '../../components/teacher/dashboard/dashboard.component';
import { StudentListComponent } from '../../components/teacher/student-list/student-list.component';
import { AddStudentComponent } from '../../components/teacher/add-student/add-student.component';



const routes:Routes = [
  {
    path:'teacher',component:TeacherComponent,children:[
      {
        path:'',component:DashboardComponent
      },
      {
        path:'student-list',component:StudentListComponent
      }
    ]
  }
]
@NgModule({
  declarations: [

    TeacherComponent,
    SidebarComponent,
    DashboardComponent,
    StudentListComponent,
    AddStudentComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    TableModule,
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class TeacherModule { }
