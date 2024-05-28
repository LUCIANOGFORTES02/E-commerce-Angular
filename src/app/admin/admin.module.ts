import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsTableComponent } from './products-table/products-table.component';
import { AddProdctsComponent } from './add-prodcts/add-prodcts.component';
import { LucideAngularModule,Plus, Save, User   } from 'lucide-angular';
import { HlmButtonDirective } from '../../../components/ui-button-helm/src/lib/hlm-button.directive';
import { HlmBadgeDirective } from '../../../components/ui-badge-helm/src/lib/hlm-badge.directive';
import {
  HlmCaptionComponent,
  HlmTableComponent,
  HlmTdComponent,
  HlmThComponent,
  HlmTrowComponent,
} from '@spartan-ng/ui-table-helm';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    ProductsTableComponent,
    AddProdctsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HlmBadgeDirective,
    HlmButtonDirective,
    LucideAngularModule.pick({ Plus,User,Save  }),
    HlmCaptionComponent,
    HlmTableComponent,
    HlmTdComponent,
    HlmThComponent,
    HlmTrowComponent,

  ],
  exports:[
    AdminComponent

  ]
})
export class AdminModule { }
