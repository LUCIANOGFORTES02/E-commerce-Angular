import { Injectable } from '@angular/core';
import { baseApiUrl } from '../../global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = baseApiUrl;

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(
    private http: HttpClient
    ) { }

    validateToken(token:string): Observable<string> {
      const url=`${this.baseURL}/validateToken`

      return this.http.post<string>(url,token,this.httpOptions)
    }
    signin(email:string, password: string): Observable<string> {
      const url=`${this.baseURL}/signin`
      const requestBody = { email, password };
      return this.http.post<string>(url,requestBody,this.httpOptions)
    }
    register(name:string,email:string, password: string,confirmPassword:string): Observable<string> {
      const url=`${this.baseURL}/users`
      const requestBody = { name, email, password, confirmPassword };
      return this.http.post<string>(url,requestBody,this.httpOptions)
    }


    


}
