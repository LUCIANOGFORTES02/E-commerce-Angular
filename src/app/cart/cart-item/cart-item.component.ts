import { Component, Input, input } from '@angular/core';
import { CartProduct } from '../../types/cart';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() product:CartProduct =  {} as CartProduct;//Inicializar product como uma instância vazia de CartProduct
  cartProducts: CartProduct[] = [];
  // subTotal: number = 0;
  // total: number = 0;
  // totalDiscount: number = 0;


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // this.cartService.cartProducts$.subscribe(products => {
    //   this.cartProducts = products;
    //   this.subTotal = this.cartService.subTotal;
    //   this.total = this.cartService.total;
    //   this.totalDiscount = this.cartService.totaldiscount;
    // });
  }


  handleRemoveProductClick(productId: string): void{
     this.cartService.removeProductinCart(productId);

    
  }
  addProductToCart(product: CartProduct): void {
    this.cartService.addProductToCart(product);
  }
  decrementQuantity(productId: string): void {
    this.cartService.decrementQuantity(productId);
  }
  incrementQuantity(productId: string): void {
    this.cartService.incrementQuantity(productId);
  }



}
