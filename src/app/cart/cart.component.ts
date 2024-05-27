import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartProduct } from '../types/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartProducts:CartProduct[] = [];
  subTotal: number = 0;
  total: number = 0;
  totalDiscount: number = 0;
  

  
  constructor(
    public cartService:CartService
  ){
    this.cartProducts= this.cartService.cartProducts;
    console.log(this.cartProducts)
      
   
  }

  ngOnInit(): void {
    this.cartService.cartProducts$.subscribe(products => {
      this.cartProducts = products;
      this.updateTotals();

    });
    
  }
  updateTotals(): void {
    this.subTotal = this.cartService.subTotal;
    this.total = this.cartService.total;
    this.totalDiscount = this.cartService.totalDiscount;
  }



}
