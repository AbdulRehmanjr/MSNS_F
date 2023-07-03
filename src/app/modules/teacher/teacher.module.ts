import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



import { SharedModule } from '../shared/shared.module';

// ng prime
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { PickListModule } from 'primeng/picklist';



// componenets
import { TeacherComponent } from './teacher.component';
import { SidebarComponent } from '../../components/teacher/sidebar/sidebar.component';
import { DashboardComponent } from '../../components/teacher/dashboard/dashboard.component';
import { StudentListComponent } from '../../components/teacher/student-list/student-list.component';
import { AddStudentComponent } from '../../components/teacher/add-student/add-student.component';
import { ListClassComponent } from '../../components/teacher/list-class/list-class.component';
import { AddClassComponent } from '../../components/teacher/add-class/add-class.component';
import { ListSectionComponent } from '../../components/teacher/list-section/list-section.component';
import { ClassWiseListComponent } from '../../components/teacher/class-wise-list/class-wise-list.component';
import { ClassDetailComponent } from 'src/app/components/teacher/class-detail/class-detail.component';





const routes:Routes = [
  {
    path:'teacher',component:TeacherComponent,children:[
      {path:'dashboard',component:DashboardComponent},
      {path:'student-list',component:StudentListComponent},
      {path:'class-list',component:ListClassComponent},
      {path:'section-list',component:ListSectionComponent},
      {path:'class-wise-list',component:ClassWiseListComponent},
      {path:'class-detail/:classId',component:ClassDetailComponent},
      {path:'',redirectTo:'dashboard',pathMatch:'full'}
    ]
  }
]
@NgModule({
  declarations: [
    ClassDetailComponent,
    TeacherComponent,
    SidebarComponent,
    DashboardComponent,
    StudentListComponent,
    AddStudentComponent,
    ListClassComponent,
    AddClassComponent,
    ListSectionComponent,
    ClassWiseListComponent
  ],
  imports: [
    PickListModule,
    ToastModule,
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
  ],
  providers:[
    MessageService
  ]
})
export class TeacherModule { }
