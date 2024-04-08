import { Component, Input, OnInit } from '@angular/core';
import { CATEGORY_ICON } from '../../../helpers/category-icons';
import { LucideIconData } from 'lucide-angular/icons/types';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.css'
})
export class CategoryItemComponent  implements OnInit{
  @Input() category:any
  CATEGORY_ICON: { [key: string]: string } = {
    keyboards: "Keyboard",
    monitors: "Monitor",
    headphones: "Headphones",
    mousepads: "Square",
    speakers: "Speaker",
    mouses: "Mouse"
  };
  icon: string | undefined;

  ngOnInit(): void {
    this.icon = this.CATEGORY_ICON[this.category.slug];
  }



}
