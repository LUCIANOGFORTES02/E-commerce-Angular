import { Injectable } from '@angular/core';
import { baseApiUrl } from '../../global';
import { HttpClient, HttpHeaders } from '@angular/common/http';//Usado para fazer chamadas http
import { Observable } from 'rxjs';
import { Category } from '../types/Category';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  private baseURL = baseApiUrl;

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  

  constructor(
    private http: HttpClient
    ) { }


  // Buscar categoria
  getCategorias(): Observable<Category[]> {
    const url=`${this.baseURL}/category`
    return this.http.get<Category[]>(url)
  }

  //Buscar a categoria e seus produtos
  getCategoryProducts(slug:string):Observable<Category> {//Retorna a categoria e seus respectivos produtos
    const url=`${this.baseURL}/category/${slug}`
    return this.http.get<Category>(url)
}


 
}
