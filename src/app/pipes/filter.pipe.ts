import { Pipe, PipeTransform } from '@angular/core';
import { Coche } from '../model/coche';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
    /**
     * Filtro para buscar en una collecion de coches. No es CaseSensitive
     * @param stocks : coche
     * @param searhText : string con la marca y modelo del coche
     */
    

  transform(stocks: Coche[], searchText: string): Coche[] {

    if(!stocks) return [];
    if(!searchText) return stocks;
    searchText = searchText.toLowerCase();
    let marcaModelo ="";
    return stocks.filter( cocheIt => {
       marcaModelo= cocheIt.marca +" "+ cocheIt.modelo;
       marcaModelo=marcaModelo.toLocaleUpperCase();
        return cocheIt.marca.includes(searchText);
    });
   }

}