import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Nuestro Modylo para routing
import {AppRouter} from './app-route';

import { AppComponent } from './app.component';
import { RecetaComponent } from './receta/receta.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { Page404Component } from './page-404/page-404.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ConcesionarioComponent } from './concesionario/concesionario.component';
import { CocheComponent } from './concesionario/coche/coche.component';
import { CochesService } from './providers/coches.service';
import { ListadoComponent } from './concesionario/listado/listado.component';


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
    ListadoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRouter
  ],
  providers: [CochesService],
  bootstrap: [AppComponent]
})
export class AppModule { }