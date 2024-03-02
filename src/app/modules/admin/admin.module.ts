import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

// ngprime
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';


// module
import { SharedModule } from '../shared/shared.module';

//components
import { AdminComponent } from './admin.component';
import { DashboardComponent } from 'src/app/components/admin/dashboard/dashboard.component';
import { TeachersListComponent } from '../../components/admin/teachers-list/teachers-list.component';
import { FeeStructureComponent } from '../../components/admin/fee-structure/fee-structure.component';
import { PreferencesComponent } from 'src/app/components/admin/preferences/preferences.component';
import { AcademicsComponent } from 'src/app/components/admin/academics/academics.component';
import { AboutComponent} from 'src/app/components/home/about/about.component';
import { RegistrationComponent } from 'src/app/components/admin/registration/registration.component';
import { StdregComponent } from 'src/app/components/admin/registration/student/stdreg/stdreg.component';
import { EmpregComponent } from 'src/app/components/admin/registration/teacher/empreg/empreg.component';

export const routes: Routes = [
  {
    path:'admin',component:AdminComponent,children:[
      { path:'dashboard',component:DashboardComponent},
      {path:'teacher-list',component:TeachersListComponent},
      {path:'fee-structure',component:FeeStructureComponent},
      {path:'preferences',component:PreferencesComponent},
      {path:'academics',component:AcademicsComponent},
      {path:'about',component:AboutComponent},
      {path:'registration',component:RegistrationComponent},
      {path:'stdreg',component:StdregComponent},
      {path:'empreg',component:EmpregComponent},
      {path:'',redirectTo:'dashboard',pathMatch:'full'}
    ]
  }
]

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    TeachersListComponent,
    FeeStructureComponent,
    PreferencesComponent,
    AcademicsComponent,
    AboutComponent,
    RegistrationComponent,
    StdregComponent,
    EmpregComponent
  ],
  imports: [
    DialogModule,
    TableModule,
    ToastModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],exports:[
    RouterModule
  ],
  providers:[
    MessageService
  ]
})
export class AdminModule { }
