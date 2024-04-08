import { Component, Input } from '@angular/core';
import { ProductWithTotalPrice, computeProductTotalPrice } from '../../helpers/product';

// interface Product{
//   product: ProductWithTotalPrice;
// }

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product: any


  productWithPrice: ProductWithTotalPrice | undefined
  

  ngOnInit(): void {
    this.productWithPrice= {
        ...this.product,
        basePrice: Number(this.product.basePrice),
        totalPrice: computeProductTotalPrice(this.product)
  }
}


}
