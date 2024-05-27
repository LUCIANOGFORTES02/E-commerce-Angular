import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../types/Category';
import { ProductWithTotalPrice, computeProductTotalPrice } from '../helpers/product';
import { CartProduct } from '../types/cart';
import { CartService } from '../services/cart.service';

interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  basePrice: number;
  imageUrls: string[];
  categoryId: string;
  discountPercentage: number;
  category: {
    id: string;
    name: string;
    slug: string;
    imageUrl: string;
    products: any[]; // Ou você pode definir uma interface para os produtos da categoria
  }
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  product: Product | null = null
  slug : string=""
  imageCurrent: string=""
  quantity:number=1
  productWithPrice: ProductWithTotalPrice | undefined




  constructor(
    private productService:ProductService,
    private route : ActivatedRoute,//Fornece informações sobre a rota ativa incluindo parâmetros da rota
    private cartService:CartService

  ){

  }

  ngOnInit(): void {
    this.loadProductBySlug()

    
      
  }
  loadProductBySlug(){
    try {
      this.route.params.subscribe(params=>{
        this.slug = params['slug'];

    
        this.productService.getProductBySlug(this.slug).subscribe(product=>{
          this.product = product
         

          if (product.imageUrls !=null) {
            this.imageCurrent = product.imageUrls[0]; // Define o primeiro elemento como o valor inicial de currentImage
          }  
          if(this.product!=null){
            this.productWithPrice= {
              ...this.product,
              basePrice: Number(this.product.basePrice),
              totalPrice: (computeProductTotalPrice(this.product))
              }
            }
    
        })
      }) 
      
    } catch (error) {
      console.error('Erro ao carregar os produtos:', error);
      
    }

  }  
  handleDrecrementClick(){
    if (this.quantity > 1) {
      this.quantity--;
    }
    
  }
  handleIncrementClick(){
    this.quantity =  this.quantity+1 

  }

  handleClickImage(imageUrl:string){
    this.imageCurrent=imageUrl

  }

  handleAddToProduct=()=>{
    if(this.productWithPrice!=null){//
    const cartProduct={
      ...this.productWithPrice,
      quantity:this.quantity
    }
    this.cartService.addProductToCart(cartProduct)
    }
    
   
    
  }



}
