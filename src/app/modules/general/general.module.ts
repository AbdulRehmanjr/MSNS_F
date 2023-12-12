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
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { PasswordToggleDirective } from 'src/app/directives/password-toggle.directive';
import { AboutComponent } from '../../components/general/about/about.component';
import { SharedModule } from "../shared/shared.module";

const routes: Routes  = [
]

@NgModule({
    declarations: [
        GeneralComponent,
        LoginComponent,
        SignupComponent,
        PasswordToggleDirective,
        AboutComponent,
    ],
    providers: [MessageService],
    exports: [RouterModule],
    imports: [
        ToastModule,
        MessagesModule,
        PasswordModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class GeneralModule { }
