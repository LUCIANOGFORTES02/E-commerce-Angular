import { Component, OnInit } from '@angular/core';
import { Product } from '../types/Product';
import { CatalogoService } from '../services/catalogo.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../types/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {

  category:Category|undefined
  slug:string=""
  icon: string | undefined;

  CATEGORY_ICON: { [key: string]: string } = {
    keyboards: "Keyboard",
    monitors: "Monitor",
    headphones: "Headphones",
    mousepads: "Square",
    speakers: "Speaker",
    mouses: "Mouse"
  };

  constructor(
    private catalogoService: CatalogoService,
    private route: ActivatedRoute
  ){

  }


  ngOnInit(): void {
    
    this.route.params.subscribe(params=>{
      this.slug = params['slug']
      console.log(this.slug)

    })

    this.loadCategoryProducts();

    


    this.icon = this.CATEGORY_ICON[this.slug];

      
  }
  loadCategoryProducts(){
    try {
      this.catalogoService.getCategoryProducts(this.slug).subscribe(data=>{
        this.category=data
      })
      
    } catch (error) {
      console.log('Erro ao buscar a categoria e seus produtos',error)
      
    }

  }

}

