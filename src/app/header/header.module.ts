import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { BrnSheetContentDirective, BrnSheetTriggerDirective } from '@spartan-ng/ui-sheet-brain';
import {
  HlmSheetCloseDirective,
  HlmSheetComponent,
  HlmSheetContentComponent,
  HlmSheetHeaderComponent,
} from '@spartan-ng/ui-sheet-helm';

import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
import { BrnSeparatorComponent } from '@spartan-ng/ui-separator-brain';

import {
    HlmCardContentDirective,
    HlmCardDescriptionDirective,
    HlmCardDirective,
    HlmCardFooterDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
  } from '@spartan-ng/ui-card-helm';

import { LucideAngularModule, User,Menu,ShoppingCart,Home,Percent,ListOrdered,LogIn,LogOut    } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { CartModule } from '../cart/cart.module';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule ,
    BrnSheetTriggerDirective,
    BrnSheetContentDirective,
    HlmSheetComponent,
    HlmSheetContentComponent,
    HlmSheetHeaderComponent,
    HlmSheetCloseDirective,
    HlmButtonDirective,
    HlmIconComponent,
    HlmCardContentDirective,
    HlmCardDescriptionDirective,
    HlmCardDirective,
    HlmCardFooterDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmSeparatorDirective,
    BrnSeparatorComponent,
    HlmButtonDirective,
    CartModule,
    LucideAngularModule.pick({ User,Menu,ShoppingCart,Home,Percent,ListOrdered, LogIn ,LogOut }),
  ],
 
  exports:[
    HeaderComponent,

  ]
})
export class HeaderModule { }
