import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  baseUrl = 'https://reqres.in/api/users/';

  getUser(id:number){
    return this.http.get(this.baseUrl+id);
  }

}
