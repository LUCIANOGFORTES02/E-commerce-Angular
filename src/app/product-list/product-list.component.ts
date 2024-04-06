import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../types/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent  {
  @Input() products:any

}
