import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../types/Product';
import { baseApiUrl } from '../../global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL = baseApiUrl;

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }


  constructor(
    private http:HttpClient
  ) { }


  getProduct(): Observable<Product[]> {
    const url=`${this.baseURL}/product`
    return this.http.get<Product[]>(url)
  }

  getProductDiscount(): Observable<Product[]> {
    const url=`${this.baseURL}/productdiscount`
    return this.http.get<Product[]>(url)
  }

  getMouses(): Observable<Product[]>{
    const url=`${this.baseURL}/productmouses`
    return this.http.get<Product[]>(url)  
  }

  getKeyboards():Observable<Product[]>{
    const url=`${this.baseURL}/productkeyboard`
    return this.http.get<Product[]>(url)  
  }


}
