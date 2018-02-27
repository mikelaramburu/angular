import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {
//atributos
nombre : string;
descripcion: string;
likes: number;
imagen: string;
isGlutenFree: boolean;
cocinero:string;
ingredientes: string[];
  constructor() { 
    console.log('RecetaComponent constructor');
    this.nombre="Bocadillo de calamares";
    this.descripcion="El bocadillo de rabas es muy popular en el norte de España, donde las costas proporcionan el calamar fresco. La forma de preparación es similar a la versión madrileña y pueden encontrarse en diversos bares y restaurantes de Cantabria, así como del País Vasco. En Madrid, existen hasta Rutas del Bocadillo de Calamares que permiten descubrir variantes del bocadillo.";
    this.likes=32;
    this.imagen="https://recetasdecocinafaciles.net/wp-content/uploads/2018/01/bocadillo-de-calamares-783x321.jpg";
    this.isGlutenFree=false;
    this.cocinero="Carlos Arquiñano";
    this.ingredientes=['Calamares','Limon','Pan','Salsa'];
  }
  ngOnInit() {
  }
  sumarLike(){
    console.log("Click sumarLike");
    this.likes++;
  }

}
