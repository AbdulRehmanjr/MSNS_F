import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../variables/environment';
import { ClassInfo } from '../classes/class-info';

@Injectable({
  providedIn: 'root'
})
export class ClassService {


  private url:string = `${environment.baseUrl}/${environment.class}`
  constructor(
    private http:HttpClient
  ){}

  saveClass(classInfo:ClassInfo){
    return this.http.post(`${this.url}/create`,classInfo,{
      observe:'body'
    })
  }

  getAllClasses(){
    return this.http.get(`${this.url}/all`,{
      observe:'body'
    })
  }
}
