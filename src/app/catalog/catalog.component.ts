import { Component, Input } from '@angular/core';
import { Category } from '../types/Category';
import { ActivatedRoute } from '@angular/router';
import { CatalogoService } from '../services/catalogo.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
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
        console.log(this.categorys)
      })
      
    } catch (error) {
      console.error('Erro ao carregar categorias:', error);
    }

  }

}
