import { Injectable } from '@angular/core';
import { environment } from '../variables/environment';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/classes/login';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url:string = `${environment.baseUrl}/${environment.login}`

  constructor(private http:HttpClient) { }


  generateToken(login: Login) {
    return this.http.post(`${this.url}` + '/generate-token', login, {
      responseType: 'json',
    })

  }

   setToken(token: any) {
    if (token != null) {
      localStorage.setItem('token', JSON.stringify(token));
    }
  }

   getToken() {
    return localStorage.getItem('token');
  }

   getAuthority() {
    let user = JSON.parse(localStorage.getItem('user'))

    return user.authority;
  }

   setUser(data: User) {

    let current_user = new User();

    current_user.userId = data.userId
    current_user.userName = data.userName
    current_user.roles = data.roles


    localStorage.setItem('user', JSON.stringify(current_user));
  }

   currentUser(loginInfo: Login) {
    return this.http.post(`${this.url}/current-user`, loginInfo);
  }

}
