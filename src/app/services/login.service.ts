import { Injectable } from '@angular/core';
import { environment } from '../variables/environment';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/classes/login';
import { User } from 'src/app/classes/user';
import { Role } from '../classes/role';

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
    return JSON.parse(localStorage.getItem('user'))['role']['authority']


  }

   setUser(data: User) {

    let current_user = new User()
    let role = new Role()

    current_user.userId = data.userId
    current_user.userName = data.userName
    current_user.userEmail = data.userEmail

    role.roleName = data.role.roleName
    role.authority  = data.role.authority

    current_user.role = role

    localStorage.setItem('user', JSON.stringify(current_user));
  }

   currentUser(loginInfo: Login) {
    return this.http.post(`${this.url}/current-user`, loginInfo);
  }

}
