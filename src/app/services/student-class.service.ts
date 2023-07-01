import { Injectable } from '@angular/core';
import { environment } from '../variables/environment';
import { HttpClient } from '@angular/common/http';
import { StudentClass } from '../classes/studentclass';
import { Student } from '../classes/student';

@Injectable({
  providedIn: 'root'
})
export class StudentClassService {

  private url:string = `${environment.baseUrl}/${environment.studentClass}`

  constructor(private http:HttpClient) { }


  getAllStudentsByClassId(classId:number){
    return this.http.get(`${this.url}/all/${classId}`,{
      observe:'body'
    })
  }
  addStudentInClass(students:Student[],classId:number){

    return this.http.post(`${this.url}/${classId}/add`,students,{
      observe:'body',
      responseType:'text'
    })
  }
}
