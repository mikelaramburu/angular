import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

//Nuestro Modulo para routing
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

//Pipes
import {RoundPipe} from './pipes/round.pipe';
import {FilterPipe} from './pipes/filter.pipe';
import { RecetarioComponent } from './recetario/recetario.component';
import { RecetaDetalleComponent } from './recetario/receta-detalle/receta-detalle.component';

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
    RoundPipe,
    FilterPipe,
    RecetarioComponent,
    RecetaDetalleComponent

  ],
  imports: [
    BrowserModule,
    AppRouter,
    FormsModule,
  ],
  providers: [CochesService],
  bootstrap: [AppComponent]
})
export class AppModule { }