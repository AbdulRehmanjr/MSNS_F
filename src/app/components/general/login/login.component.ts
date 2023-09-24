import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Login } from 'src/app/classes/login';
import { User } from 'src/app/classes/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passwordVisible = false;

  togglePasswordVisibility(passwordInput: HTMLInputElement): void {
    this.passwordVisible = !this.passwordVisible;
    passwordInput.type = this.passwordVisible ? 'text' : 'password';
  }

  loginForm: FormGroup
  constructor(private router: Router, private formBuilder: FormBuilder,
    private loginService: LoginService, private message: MessageService) { }

  ngOnInit(): void {

    this.createForm()
  }

  createForm(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }
  onSubmit() {

    let login = new Login()
    login.email = this.loginForm.get('email').value
    login.password = this.loginForm.get('password').value

    this.loginService.generateToken(login).subscribe({
      next: (data: any) => {
        this.loginService.setToken(data.token)
      },
      error: (err) => {
        console.error(err)
        this.message.add({
          severity: 'error',
          summary: 'Wrong Info',
          detail: `${err.error}`
        })
      },
      complete: () => {
        this.loginService.currentUser(login).subscribe(
          {
            next: (data: User) => {
              this.loginService.setUser(data)
            }
            , error:(err: any) =>{

            },
            complete: () => {
              this.redirection()
            },
          }
        )
      }
    })
  }

  onTesting(){
    this.router.navigate(['admin'])
  }
  private redirection(): void {
    const role = this.loginService.getAuthority()
    if (role == "ADMIN") {
      this.router.navigate(['admin'])
    } else if (role == "TEACHER") {
      this.router.navigate(['teacher'])
    }
    else {
      this.router.navigate(['login'])
    }
  }
}
