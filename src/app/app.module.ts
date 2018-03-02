import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Nuestro Modulo para Routing
import {appRouter} from './app-route';

import { AppComponent } from './app.component';
import { RecetaComponent } from './receta/receta.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { Page404Component } from './page-404/page-404.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ConcesionarioComponent } from './concesionario/concesionario.component';
import { CocheComponent } from './concesionario/coche/coche.component';
import { ListadoStockComponent } from './concesionario/listado-stock/listado-stock.component';


@NgModule({
  declarations: [
    AppComponent,
    RecetaComponent,
    PropiedadesComponent,
    Page404Component,
    HomeComponent,
    UsuarioComponent,
    ConcesionarioComponent,
    CocheComponent,
    ListadoStockComponent
  ],
  imports: [
    BrowserModule,
    appRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
