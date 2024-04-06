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
import { LucideAngularModule, ArrowDown } from 'lucide-angular';
import { ProductRoutingModule } from './product-list/product-routing/product-routing.module';






@NgModule({
  declarations: [//Declarando os compoenentes desse módulo todos os compoenetes que estão dentro desse declaration são visíveis pro app.component
    AppComponent, NaoEncontradoComponent, 
    
  ],
  imports: [//Caso esteja em outro módulo
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    CatalogModule,
    HomeModule,    
    LucideAngularModule, ProductRoutingModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
