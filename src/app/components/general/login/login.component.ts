import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Password } from 'primeng/password';
import { Login } from 'src/app/classes/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup
  constructor(private router: Router, private formBuilder: FormBuilder,
    private loginService: LoginService) { }
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

        this.loginService.currentUser(login).subscribe(
          {
            next: (data: any) => {
              this.loginService.setUser(data)
            }
            , error(err: any) {

            },
            complete: () => {
              this.redirection()
            },
          }

        )
      },
      error: (err) => {

      },
      complete: () => {

      }
    })
  }

  private redirection(): void {

    const role = this.loginService.getAuthority()

    if (role == "ADMIN") {

      this.router.navigate(['teacher'])

    } else if (role == "TEACHER") {
      this.router.navigate(['teacher'])
    }
    else {
      this.router.navigate(['login'])
    }
  }
}
