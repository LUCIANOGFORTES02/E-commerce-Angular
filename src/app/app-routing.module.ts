import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';

// Carregamento preguisoço de módulos

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'catalogo',component:CatalogComponent},
  {path:'category/:slug',component:CategoryComponent},
  {path: 'product/:slug', component: ProductComponent},
  // {path: 'product',loadChildren:()=> import('./')},
    // {path: 'login',component:NaoEncontradoComponent},
  // {path: 'admin',},
  {path: '**',component:NaoEncontradoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//Configurar as rotas raiz da aplicação
  exports: [RouterModule]
})
export class AppRoutingModule { }
