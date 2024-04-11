import { Injectable } from '@angular/core';
import { baseApiUrl } from '../../global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map } from 'rxjs';
import { User } from '../types/User';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = baseApiUrl;
  private isAuthenticated=false
  //
  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  //Permite que sempre que outros componentes se inscrevam para receber notificações sempre que o usuário autenticado mudar
  public currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();


  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(
    private http: HttpClient
    ) { }

    
  
    getCurrentUser(): User | null {
      return this.currentUserSubject.value;
    }

    validateToken(token:string): Observable<boolean> {
      const url=`${this.baseURL}/validateToken`

      return this.http.post<string>(url,token,this.httpOptions).pipe(
       map((data)=>{

        return true

       }) 
      )
    }
    
    signin(email:string, password: string): Observable<boolean> {
      const url=`${this.baseURL}/signin`
      const requestBody = { email, password };

      return  this.http.post<any>(url,requestBody,this.httpOptions).pipe(
        map((data)=>{
          if( data.user && data.token){
            localStorage.setItem("userkey",data.token)    
            //Notifica todos os componentes que estão inscritos em currentUser$
            this.currentUserSubject.next(data.user);
            this.isAuthenticated=true
            return true
          }
          return false            
        })
      )
    }
    register(name:string,email:string, password: string,confirmPassword:string): Observable<string> {
      const url=`${this.baseURL}/users`
      const requestBody = { name, email, password, confirmPassword };
      return this.http.post<string>(url,requestBody,this.httpOptions)
    }

    signup():void{
      localStorage.removeItem('userkey');
      this.isAuthenticated=false
      //this.currentUser=null


    }
    authenticated(): boolean {
      // Lógica para verificar se o usuário está autenticado
      
      return this.isAuthenticated; 
    }


    


}
