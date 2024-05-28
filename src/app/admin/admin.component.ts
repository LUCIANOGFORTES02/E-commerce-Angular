import { Component, OnInit } from '@angular/core';
import { AdminService, ProductWithCategory } from '../services/admin.service';
import { computeProductTotalPrice } from '../helpers/product';


export interface ProductWithTotalPriceAndCategory extends ProductWithCategory {
  totalPrice: number;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  products: ProductWithTotalPriceAndCategory[] = [];


  constructor(private AdminService: AdminService) {}

  ngOnInit(): void {
   this.loadProductAndCategory()
      
  }

  loadProductAndCategory() {
    this.AdminService.getLoadProductAndCategory().subscribe({
      next: (data: ProductWithCategory[]) => {
        this.products = data.map(product => ({
          ...product,
          totalPrice: computeProductTotalPrice(product),
        }));
      },
      error: (error) => {
        console.error('Erro ao carregar os produtos:', error);
      },
    });
  }


}
