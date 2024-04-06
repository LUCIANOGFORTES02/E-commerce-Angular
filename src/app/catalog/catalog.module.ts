import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { LucideAngularModule, ListOrdered } from 'lucide-angular';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    CatalogComponent,
    CategoryItemComponent
  ],
  imports: [
    CommonModule,
    HlmBadgeDirective,
    RouterModule,
    LucideAngularModule.pick({ ListOrdered }),

  ],
  exports:[
    
  ]
})
export class CatalogModule  {
  
 }
