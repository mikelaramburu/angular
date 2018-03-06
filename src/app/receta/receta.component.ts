import { Component, OnInit } from '@angular/core';
import {Receta}from '../model/receta';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {

//atributos
show:boolean;
glyphicon:string;
receta: Receta;

  constructor() { 
    console.log('RecetaComponent constructor');

    //crear receta
    this.receta=new Receta("Marmitako", 'Karlos Argiñano');
    this.receta.imagen = "https://img.recetascomidas.com/recetas/640_480/marmitako-de-bacalao.jpg"
    this.receta.descripcion="El marmitako, como todos los que hayáis tenido un mínimo contacto con la cocina vasca sabréis, es un guiso de bonito y patatas típico del verano en Euskadi. Se toma en esta época porque es cuando los arrantzales lo pescan en el Cantábrico."
    
     //ingredientes
    this.receta.addIngredientes('patata');
    this.receta.addIngredientes('bonito');
    this.receta.addIngredientes('pimiento verde');
    this.receta.addIngredientes('pimiento chorizero');
    this.receta.addIngredientes('aceite');

  

    this.show=false;
    this.glyphicon="glyphicon glyphicon-menu-down";
  }
  ngOnInit() {
    console.log('RecetaComponent ngOnInit');
  } 
  sumarLike(){
    console.log("Click sumarLike");
    this.receta.likes++;
  }

  showIngredientes(){
    console.log('Click showIngredientes')
    this.show=!this.show;
    this.glyphicon=(this.show)?'glyphicon-menu-up':'glyphicon-menu-down'; 

  }
  
}
