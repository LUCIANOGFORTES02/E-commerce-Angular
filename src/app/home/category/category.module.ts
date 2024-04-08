import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryItemComponent } from './category-item/category-item.component';
import { CategoryComponent } from './category.component';
import { LucideAngularModule, Headphones,Keyboard ,Monitor,Square,Speaker,Mouse} from 'lucide-angular';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    CategoryComponent,
    CategoryItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LucideAngularModule.pick({ Headphones,Keyboard, Monitor,Square,Speaker,Mouse})
  ],
  exports:[
    CategoryComponent
  ]
})
export class CategoryModule { }
