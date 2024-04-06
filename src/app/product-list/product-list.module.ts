import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { HlmBadgeDirective } from '../../../components/ui-badge-helm/src/lib/hlm-badge.directive';




@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    HlmBadgeDirective,

  ],
  exports:[
    ProductListComponent,
    
  ]
})
export class ProductListModule { }
