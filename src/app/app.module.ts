import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderModule } from './header/header.module';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { CatalogModule } from './catalog/catalog.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { LucideAngularModule, ArrowDown ,ArrowLeft,ArrowRight,Truck  } from 'lucide-angular';
import { CategoryComponent } from './category/category.component';
import { HlmBadgeDirective } from '../../components/ui-badge-helm/src/lib/hlm-badge.directive';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListModule } from './product-list/product-list.module';
import { ProductComponent } from './product/product.component';
import { HlmButtonDirective } from '../../components/ui-button-helm/src/lib/hlm-button.directive';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';






@NgModule({
  declarations: [//Declarando os compoenentes desse módulo todos os compoenetes que estão dentro desse declaration são visíveis pro app.component
    AppComponent, NaoEncontradoComponent, CategoryComponent,ProductComponent, LoginComponent, 
    
  ],
  imports: [//Caso esteja em outro módulo
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    CatalogModule,
    HomeModule,    
    LucideAngularModule.pick({ Truck,ArrowDown ,ArrowLeft,ArrowRight }),
    HlmBadgeDirective,
    ProductListModule,
    HlmButtonDirective,
    FormsModule

    
    


  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
