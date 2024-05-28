import { Injectable } from '@angular/core';
import { baseApiUrl } from '../../global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Category {
  name: string;
}

export interface ProductWithCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  basePrice: number;
  imageUrls: string[];
  categoryId: string;
  discountPercentage: number;
  category: Category;
}

@Injectable({
  providedIn: 'root'
})


export class AdminService {

  private baseURL = baseApiUrl;

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }


  constructor(
    private http:HttpClient
  ) { }

  getLoadProductAndCategory(): Observable<ProductWithCategory[]> {
    const url=`${this.baseURL}/productandcategory`
    return this.http.get<ProductWithCategory[]>(url)
  }
  postSaveProduct(name: string, slug: string, description: string, basePrice: number, categoryId: string, discountPercentage: number, imageUrls: string[]): Observable<any> {
    const requestBody = { name, slug, description, basePrice, categoryId, discountPercentage, imageUrls };
    console.log('Sending product data:', requestBody); // Verifique os dados antes de enviar
    const url=`${this.baseURL}/product`;
    return this.http.post<string>(url,requestBody,this.httpOptions)
  }

}
