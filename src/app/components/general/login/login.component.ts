import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Password } from 'primeng/password';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  loginForm:FormGroup
  constructor(private router:Router,private formBuilder:FormBuilder){}
  ngOnInit(): void {

    this.createForm()
  }

  createForm():void{
    this.loginForm = this.formBuilder.group({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required])
    })
  }
  onSubmit(){

    console.log(this.loginForm.get('email').value,this.loginForm.get('password').value)
    this.router.navigate(['/teacher'])
  }
}
