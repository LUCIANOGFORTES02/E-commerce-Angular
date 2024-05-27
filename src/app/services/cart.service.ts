import { Injectable } from '@angular/core';
import { ProductWithTotalPrice } from '../helpers/product';
import { Product } from '../types/Product';
import { CartProduct } from '../types/cart';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class CartService {
  private cartProductsSubject: BehaviorSubject<CartProduct[]> = new BehaviorSubject<CartProduct[]>([]);
  public cartProducts$: Observable<CartProduct[]> = this.cartProductsSubject.asObservable();
  public cartTotalPrice: number = 0;
  public cartBasePrice: number = 0;
  public cartTotalDiscount: number = 0;
  public subTotal: number = 0;
  public total: number = 0;
  public totaldiscount: number = 0;


  constructor() { 
    //Carragar produtos do localStorage
    this.loadProductsFromLocalStorage();
    this.updateCartTotals();//Atualizar o valor total
  }

  //Buscar os produtos localStorage
  private loadProductsFromLocalStorage():void{
    const productsJson = localStorage.getItem("cartProducts")
    if (productsJson){
      const products: CartProduct[]=JSON.parse(productsJson);
      this.cartProductsSubject.next(products);

    }
  }

  //Salvar os produtos no localStorage
  private saveProductsToLocalStorage(products:CartProduct[]):void{
    localStorage.setItem('cartProducts',JSON.stringify(products))

  }
  private updateCartTotals(): void {//Realizar os cálculos
    const products = this.cartProductsSubject.value;
    this.subTotal = products.reduce((acc, product) => acc + (Number(product.basePrice) * product.quantity), 0);
    this.total = products.reduce((acc, product) => acc + (Number(product.totalPrice) * product.quantity), 0);
    this.totaldiscount = this.subTotal - this.total;
  }

  get cartProducts(): CartProduct[] {
    return this.cartProductsSubject.value;
  }

  //Decrementar a quantidade
  decrementQuantity(productId: string):void{
    const updatedProducts = this.cartProductsSubject.value
    .map(cartProduct => {
      if (cartProduct.id === productId) {
        return {
          ...cartProduct,
          quantity: cartProduct.quantity - 1
        };
      }
      return cartProduct;
    })
    .filter(cartProduct => cartProduct.quantity > 0);

  }

  //Incrementar a quantidade
  incrementQuantity(productId: string):any{

  }


  //Adicionar o produto ao carrinho
  addProductToCart(product:CartProduct):void{
    const currentProducts = this.cartProductsSubject.value
    //Verificar se esse produto já está adicionado no carrinho
    const productInCart = currentProducts.some((cartProduct)=>(cartProduct.id===product.id))

    //Se for true  apenas aumenta a quantidade de carrinho
    if(productInCart){
      const updatedProducts = currentProducts.map(cartProduct=>{
        if(cartProduct.id=== product.id){//Atualiza a quantidade do produto no carrinho
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + product.quantity
          };
        }
        return cartProduct;
      });
      this.cartProductsSubject.next(updatedProducts);//Notifica os observadores sobre a mudança na lista de produtos do carrinho
      this.saveProductsToLocalStorage(updatedProducts);//Salva no armazenamento local
      this.updateCartTotals();//Atualiza o total dos carrinhos
      return;
    }


    const updatedProducts = [...currentProducts,product]
    this.cartProductsSubject.next(updatedProducts);//Emitindo um novo valor ao cartProductSubject com o valor updateProducts
    this.saveProductsToLocalStorage(updatedProducts);
    this.updateCartTotals();//Atualizar os valores dos produtos no carrinho
  }

  //Remover o produto do carrinho
  removeProductinCart(productId: string): void {
    const updatedProducts = this.cartProductsSubject.value.filter(cartProduct => cartProduct.id !== productId);
    this.cartProductsSubject.next(updatedProducts);
    this.saveProductsToLocalStorage(updatedProducts);
    this.updateCartTotals();
  }

}
