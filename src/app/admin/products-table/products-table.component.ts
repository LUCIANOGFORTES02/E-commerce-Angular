import { Component, Input } from '@angular/core';
import { ProductWithTotalPriceAndCategory } from '../admin.component';


@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent {
  @Input() products: ProductWithTotalPriceAndCategory[] = [];


}
