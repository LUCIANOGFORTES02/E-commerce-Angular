import { Component, Input } from '@angular/core';
import { CATEGORY_ICON } from '../../../helpers/category-icons';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.css'
})
export class CategoryItemComponent {
  @Input() category:any
  CATEGORY_ICON = CATEGORY_ICON; 



}
