import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-basico',
  templateUrl: './form-basico.component.html',
  styleUrls: ['./form-basico.component.scss']
})

//Atributo FormGroup para usar en el HTML =>
export class FormBasicoComponent implements OnInit {
  formulario:FormGroup;
  fruta:string;

  constructor(private fb: FormBuilder) {

    this.fruta="Banana";

    //Crear formulario
    this.formulario= this.fb.group({
      //nombre =>control=input
      nombre:['Malcolm', Validators.required],

    });

    }

  ngOnInit() {
  }


  enviar(){
    console.log("Enviar formulario nombre=%", this.formulario.controls.nombre.value);

  }
}
