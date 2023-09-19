import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule} from '@angular/router';
import { GeneralComponent } from './general.component';
import { LoginComponent } from '../../components/general/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

// ng prime
import { PasswordModule } from 'primeng/password';
import { MessagesModule } from 'primeng/messages';

import { SignupComponent } from '../../components/general/signup/signup.component';
import { SharedModule } from '../shared/shared.module';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

const routes: Routes  = [

]

@NgModule({
  declarations: [

    GeneralComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    ToastModule,
    SharedModule,
    MessagesModule,
    PasswordModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[MessageService],
  exports:[RouterModule]
})
export class GeneralModule { }
