import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { HlmBadgeDirective } from '../../../components/ui-badge-helm/src/lib/hlm-badge.directive';
import { RouterModule } from '@angular/router';
import { LucideAngularModule,ArrowDown  } from 'lucide-angular';




@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    HlmBadgeDirective,
    RouterModule,
    LucideAngularModule.pick({ ArrowDown  })
  

  ],
  exports:[
    ProductListComponent,
    ProductItemComponent
    
  ]
})
export class ProductListModule { }
