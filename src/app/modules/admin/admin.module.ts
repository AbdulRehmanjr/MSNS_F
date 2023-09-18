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
import { SidebarComponent } from '../../components/admin/sidebar/sidebar.component';
import { TeachersListComponent } from '../../components/admin/teachers-list/teachers-list.component';
import { FeeStructureComponent } from '../../components/admin/fee-structure/fee-structure.component';

const newLocal = 'admin';
export const routes: Routes = [
  {
    path:newLocal,component:AdminComponent,children:[
      { path:'dashboard',component:DashboardComponent},
      {path:'teacher-list',component:TeachersListComponent},
      {path:'fee-structure',component:FeeStructureComponent},
      {path:'',redirectTo:'dashboard',pathMatch:'full'}
    ]
  }
]

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    SidebarComponent,
    TeachersListComponent,
    FeeStructureComponent
  ],
  imports: [
    DialogModule,
    TableModule,
    ToastModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
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
