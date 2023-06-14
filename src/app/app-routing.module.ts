import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { GeneralModule } from './modules/general/general.module';
import { LoginComponent } from './components/general/login/login.component';
import { TeacherComponent } from './modules/teacher/teacher.component';
import { TeacherModule } from './modules/teacher/teacher.module';
import { SharedModule } from 'primeng/api';


const routes:Routes = [
  {
    path:'login',component:LoginComponent,
  },
  {

    path:'',redirectTo:'login',pathMatch:'full'
  }
]


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    TeacherModule,
    GeneralModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
