import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { HlmBadgeDirective } from '../../../components/ui-badge-helm/src/lib/hlm-badge.directive';
import { HlmButtonDirective } from '../../../components/ui-button-helm/src/lib/hlm-button.directive';
import { LucideAngularModule, ShoppingCart,ArrowRight,ArrowLeft,Trash } from 'lucide-angular';
import { HlmSeparatorDirective } from '../../../components/ui-separator-helm/src/lib/hlm-separator.directive';
import { BrnSeparatorComponent } from '@spartan-ng/ui-separator-brain';
import { HlmScrollAreaComponent } from '@spartan-ng/ui-scrollarea-helm';




@NgModule({
  declarations: [CartComponent,CartItemComponent],
  imports: [
    CommonModule,
    HlmBadgeDirective,
    HlmButtonDirective,
    HlmSeparatorDirective, 
    BrnSeparatorComponent,
    HlmScrollAreaComponent,
  
    LucideAngularModule.pick({ ShoppingCart,ArrowRight,ArrowLeft,Trash }),
  ],
  exports:[
    CartComponent

  ]
})
export class CartModule { }
