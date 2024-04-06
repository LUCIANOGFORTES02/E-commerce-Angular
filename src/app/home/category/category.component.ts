import { Component } from '@angular/core';
import { CatalogoService } from '../../services/catalogo.service';
import { Category } from '../../types/Category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categorys: Category[] | undefined


  constructor(
    private route: ActivatedRoute,
    private catalogoService:CatalogoService

  ){}

  ngOnInit(): void {//Carregar os dados das categorias vindo do backend
    this.loadCategorias();
      
  }
  loadCategorias(){
    try {
      //subscribe observa os valores emitidos pelo objeto observável
      this.catalogoService.getCategorias().subscribe(categorias=>{
        this.categorys=categorias
      })
      
    } catch (error) {
      console.error('Erro ao carregar categorias:', error);
    }

  }

}
