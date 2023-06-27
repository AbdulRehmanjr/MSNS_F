import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../variables/environment';
import { Student } from '../classes/student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url:string = `${environment.baseUrl}/${environment.student}`

  constructor(private http:HttpClient) { }

  createStudent(picture:File,student:Student){

    let data = new FormData()
    data.append("file",picture)
    data.append("student",JSON.stringify(student))

    return this.http.post(`${this.url}/create`,data,{
      observe:'body'
    })
  }

  getAllStudents(){
    return this.http.get(`${this.url}/all`,{
      observe:'body'
    })
  }


}
