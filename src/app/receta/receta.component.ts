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
show:boolean;
  constructor() { 
    console.log('RecetaComponent constructor');
    this.nombre="Pintxopote";
    this.descripcion="Un pote siempre entra mejor en compañia de un pintxo";
    this.likes=32;
    this.imagen="https://madridfree.org/wp-content/uploads/2016/06/Degustaci%C3%B3n-de-cervezas-y-tortillas.jpg";
    this.isGlutenFree=false;
    this.cocinero="Karlos Argiñano";
    this.ingredientes=['Patatas','Aceite','Pan','Cerveza'];
    this.show=false;
  }
  ngOnInit() {
  }
  sumarLike(){
    console.log("Click sumarLike");
    this.likes++;
  }

}
