import { Injectable } from '@angular/core';
import { Coche } from '../model/coche';
import { MOCKS_COCHES } from './mocks.coches';
import { element } from 'protractor';

@Injectable()

export class CochesService {

  coches:Coche[];
  
  constructor() { 
    console.log('CochesService constructor');
  }

  /** 
   * Retorna todos los Coches que tenemos en Stock
  */
  getAll():Coche[]{
    console.log('CochesService getAll');
    let coches:Coche[] = [];
    let coche;
    
    let jsonData = JSON.parse(MOCKS_COCHES.stocks);

    jsonData.forEach( element => {
      
        coche = new Coche( 
                          element.marca, 
                          element.modelo, 
                          element.puertas,
                          element.foto,
                          element.version,
                          element.consumo,
                          element.caballos
                          );

        coches.push(coche);

    });

    return coches;
  }
  put( coche:Coche){
    console.log('CochesService put');    
    this.coches.unshift(coche);

        /*
                    add  remove  start  end
            push    X                   X
            pop           X            X
        unshift    X             X
          shift           X      X
          
        */

  }


}