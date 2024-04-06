import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryItemComponent } from './category-item/category-item.component';
import { CategoryComponent } from './category.component';
import { LucideAngularModule, Headphones } from 'lucide-angular';




@NgModule({
  declarations: [
    CategoryComponent,
    CategoryItemComponent
  ],
  imports: [
    CommonModule,
    LucideAngularModule.pick({ Headphones })
  ],
  exports:[
    CategoryComponent
  ]
})
export class CategoryModule { }
