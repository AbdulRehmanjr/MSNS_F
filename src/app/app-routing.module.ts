import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './components/general/login/login.component';



import { TeacherModule } from './modules/teacher/teacher.module';
import { AdminModule } from './modules/admin/admin.module';
import { GeneralModule } from './modules/general/general.module';
import { SharedModule } from './modules/shared/shared.module';
import { SignupComponent } from './components/general/signup/signup.component';
import { AboutComponent } from './components/home/about/about.component';


const routes:Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  { path: 'about', component:AboutComponent},
  {
    path:'',redirectTo:'login',pathMatch:'full'
  }
]


@NgModule({
  declarations: [],
  imports: [
    AdminModule,
    TeacherModule,
    SharedModule,
    GeneralModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
