import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../providers/recetas.service';
import { Receta } from '../../model/receta';

//******************************************* */
//     npm install --save -dev jquery         */
//******************************************* */
import * as $ from 'jquery';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {
  formulario: FormGroup;

  

  constructor (private fb:FormBuilder, public recetasService: RecetasService) { 
    console.log("FormularioComponent");
    this.crearFormulario();
  }

  ngOnInit() {
    console.log("FormularioComponent ngOnInit");
  }

  crearFormulario():void{
    console.log("FormularioComponent crearFormulario");
    this.formulario = this.fb.group({
          //FormControl (input) =>['value',[Validaciones]]
          nombre:['', [Validators.required, Validators.minLength(2)]],
          cocinero:['', [Validators.minLength(5)]]

    });

  }

  submitar(): void{
    console.log("FormularioComponent onSubmit");
      
    //TO DO recoger datos formulario
    let nombre=this.formulario.value.nombre;  
    
    let receta= new Receta(nombre,"","","");
    this.recetasService.crear(receta);

    //cerrar Modal
    $("#btn-close").click();

  }

}
