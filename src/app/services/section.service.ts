import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../variables/environment';
import { Section } from '../classes/section';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private url:string = `${environment.baseUrl}/${environment.section}`

  constructor(private http:HttpClient) { }

  getAllSections(){
    return this.http.get(`${this.url}/all`,{
      observe:'body'
    })
  }
  createSection(section:Section){
    return this.http.post(`${this.url}/create`,section,{
      observe:'body'
    })
  }
}
