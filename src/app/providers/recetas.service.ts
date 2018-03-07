import { Injectable } from '@angular/core';
import { Receta } from '../model/receta';
import { MOCK_RECETA } from './mock.recetas';

@Injectable()
export class RecetasService {

  recetas : Receta[];

  constructor() { 
    console.log('RecetasService constructor');
  }


  getAll():Receta[]{
    console.log('RecetasService getAll');
    let jsonData = JSON.parse(MOCK_RECETA);
    this.recetas = [];
    let receta;

    jsonData.forEach( el => {
       receta = new Receta( el.nombre, el.cocinero, el.imagen, el.descripcion);
       
       el.ingredientes.forEach( ing => {
          receta.addIngredientes(ing);
       });

       this.recetas.push(receta);
    });

    return this.recetas;
  }

  crear(receta: Receta): void{
    this.recetas.unshift(receta);
  }


}
