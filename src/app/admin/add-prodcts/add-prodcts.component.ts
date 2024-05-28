import { Component } from '@angular/core';
import { CatalogoService } from '../../services/catalogo.service';
import { Category } from '../../types/Category';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-add-prodcts',
  templateUrl: './add-prodcts.component.html',
  styleUrl: './add-prodcts.component.css'
})
export class AddProdctsComponent {
  name: string = '';
  slug: string = '';
  description: string = '';
  basePrice: number= NaN ;
  category: string = '';
  discount: number = NaN;
  imageUrls: string[] = ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'];
  // selectCategories: { id: string, name: string }[] = [];
  selectCategories: Category[] = [];
  constructor( 
    private catalogoService:CatalogoService,
    private adminService:AdminService

  ){
    this.loadCategories();

  }
  loadCategories() {
    try{
      this.catalogoService.getCategorias().subscribe(category=>{
      this.selectCategories=category
    })}
    catch  (error) {
      console.error('Erro ao buscar a categoria e seus produtos',error)   
    } 
  }
  handleSaveProduct() {
    this.adminService.postSaveProduct(this.name, this.slug, this.description, this.basePrice, this.category, this.discount, this.imageUrls).subscribe()
    
  }
  
  handleImageChange(event: any, index: number) {
    this.imageUrls[index] = event.target.value;
  }

}
