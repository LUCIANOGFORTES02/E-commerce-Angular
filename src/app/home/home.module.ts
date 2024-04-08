import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CategoryModule } from './category/category.module';
import { ProductListModule } from '../product-list/product-list.module';
//import { CategoyItemComponent } from './category/category-item/categoy-item.component';



@NgModule({
  declarations: [
    HomeComponent,
 
  ],
  imports: [
    CommonModule,
    RouterModule,
    
    CategoryModule,
    ProductListModule

  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
