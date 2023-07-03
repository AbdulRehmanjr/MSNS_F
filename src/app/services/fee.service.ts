import { Injectable } from '@angular/core';
import { environment } from '../variables/environment';
import { HttpClient } from '@angular/common/http';
import { Fee } from '../classes/fee';

@Injectable({
  providedIn: 'root'
})
export class FeeService {

  private url: string = `${environment.baseUrl}/${environment.fee}`
  constructor(private http: HttpClient) { }

  createFee(fee: Fee) {
    return this.http.post(`${this.url}/save`, fee, {
      observe: 'body'
    })
  }
  getAllFees() {
    return this.http.get(`${this.url}/all`,{
      observe:'body'
    })
  }
  getFeeById(feeId:number) {
    return this.http.get(`${this.url}/${feeId}`,{
      observe:'body'
    })
  }

  updateFee(fee:Fee){
    return this.http.patch(`${this.url}/update`,fee,{
      observe:'body'
    })
  }
}
