
import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';


//componentes
import { RecetaComponent } from './receta/receta.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { Page404Component } from './page-404/page-404.component';
import { HomeComponent } from './home/home.component';




//Rutas de nuestra App
const appRoutes: Routes = [
  { path: '',            component: HomeComponent },
  { path: 'home',        component: HomeComponent },
  { path: 'receta',       component: RecetaComponent },
  { path: 'propiedades',  component: PropiedadesComponent },   
  { path: '**',           component: Page404Component }
];

  export const appRouter = RouterModule.forRoot(appRoutes);

