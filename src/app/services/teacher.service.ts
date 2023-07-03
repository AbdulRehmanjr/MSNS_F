import { Injectable } from '@angular/core';
import { environment } from '../variables/environment';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../classes/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private url:string  =`${environment.baseUrl}/${environment.teacher}`
  constructor(private http:HttpClient) { }


  saveTeacher(teacher:Teacher,picture:File){

    let formData = new FormData()
    formData.append('file',picture)
    formData.append('teacher',JSON.stringify(teacher))

    return this.http.post(`${this.url}/save`,formData,{
      observe:'body'
    })
  }

  getAllTeachers(){
    return this.http.get(`${this.url}/all`,{
      observe:'body'
    })
  }
}
