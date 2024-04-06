import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.css'
})
export class CategoryItemComponent {
  @Input() category: any; // Definindo uma propriedade de entrada chamada 'category'


}
