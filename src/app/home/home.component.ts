import { Component } from '@angular/core';
import { Product } from '../types/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  products : Product[]|undefined
  keyboards:  Product[]|undefined
  mouses:  Product[]|undefined

  constructor(
    private productService: ProductService


  ){

  }

  ngOnInit(): void {
    this.loadProducts();
    this.loadKeyboards();
    this.loadMouses();

  }

 loadProducts(){
  try {
    this.productService.getProductDiscount().subscribe(products=>{
      this.products=products;
      
    })
  } catch (error) {
    console.error('Erro ao carregar os produtos:', error);
  }
  }

  loadMouses(){
    try { 
      this.productService.getMouses().subscribe(mouses=>{
        this.mouses=mouses;

      })    
    } catch (error) {
      console.error('Erro ao carregar os produtos:', error);
    }
  }

  loadKeyboards(){
    try {
      this.productService.getKeyboards().subscribe(keyboards=>{
        this.keyboards= keyboards;
      })
      
    } catch (error) {
      console.error('Erro ao carregar os produtos:', error);
    }
  }

  

}
