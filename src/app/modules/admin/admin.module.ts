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

export const routes: Routes = [
  {
    path:'admin',component:AdminComponent,children:[
      { path:'dashboard',component:DashboardComponent},
      {path:'teacher-list',component:TeachersListComponent},
      {path:'fee-structure',component:FeeStructureComponent},
      {path:'preferences',component:PreferencesComponent},
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
    PreferencesComponent
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
