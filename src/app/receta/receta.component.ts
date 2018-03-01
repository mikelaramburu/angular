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
    this.receta=new Receta("Marmitako");
    this.receta.addIngredientes('patata');
    this.receta.addIngredientes('bonito');
    this.receta.addIngredientes('pimiento verde');
    this.receta.addIngredientes('pimiento chorizero');
    this.receta.addIngredientes('aceite');

  

    this.show=false;
    this.glyphicon="glyphicon glyphicon-menu-down";
  }
  ngOnInit() {
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
