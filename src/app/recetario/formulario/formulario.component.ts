import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../providers/recetas.service';
import { Receta } from '../../model/receta';

//******************************************* */
//     npm install --save -dev jquery         */
//******************************************* */
import * as $ from 'jquery';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {
  formulario: FormGroup;
  ingredientes : FormArray;
  

  constructor (private fb:FormBuilder, public recetasService: RecetasService) { 
    console.log("FormularioComponent");
    this.crearFormulario();
    this.ingredientes = this.formulario.get('ingredientes') as FormArray;
  }

  ngOnInit() {
    console.log("FormularioComponent ngOnInit");
  }

  crearFormulario():void{
    console.log("FormularioComponent crearFormulario");
    this.formulario = this.fb.group({
          //FormControl (input) =>['value',[Validaciones]]
          nombre:['', [Validators.required, Validators.minLength(2)]],
          cocinero:['', [Validators.minLength(5)]],
          imagen: ['/assets/img/receta_default.jpg', Validators.required],
          descripcion:['',[Validators.minLength(100)]],
          gluten:["true", Validators.required],
          ingredientes : this.fb.array([ this.createIngredienteFormGroup() ])

    });

  }

  createIngredienteFormGroup(): FormGroup {
    console.log('FormularioComponent createIngredienteFormGroup');
    return this.fb.group({
      nombre: ['', [Validators.required]]
    });
  }

  /** 
   * Evento para crear un nuevo Ingrediente
  */
 clickOtroIngrediente(){
  console.log('FormularioComponent clickOtroIngrediente');    
  this.ingredientes.push( this.createIngredienteFormGroup() );
}

clickEliminarIngrediente( index ){
  console.log('FormularioComponent clickEliminarIngrediente');    
  this.ingredientes.removeAt(index);
}

  submitar(): void{
    console.log("FormularioComponent onSubmit");
    
    //recoger datos del formulario
    let receta = this.mapearFormularioReceta(this.formulario);
   
    //llamar Servicio
    this.recetasService.crear( receta );

    //limpiar Formulario y poner un solo ingrediente
    this.formulario.reset();
    this.crearFormulario();
    this.ingredientes.controls.splice(1);


    //TODO cerrar modal    
    //$("#modalReceta").modal('hide');
    $("#btn-close").click();

  }
   /**
   * Nos retorna las clases para darle estilos al div que contiene el input
   * @param control : FormControl
   */
  estilosInput( control : FormControl ):string{

    const CLASS_ERROR = "form-group has-error";
    const CLASS_SUCCESS = "form-group has-success";

    if ( control.dirty ){
        return (control.valid)?CLASS_SUCCESS:CLASS_ERROR;
    }else{
      return "form-group";
    }
  }

  /**
   * Mapear Los datos del Formulario a una Receta
   * @param form : FormGroup
   */
   mapearFormularioReceta( form : FormGroup ):Receta{
      
      let receta = new Receta(form.value.nombre, form.value.cocinero, form.value.imagen, form.value.ingredientes);
      receta.cocinero = form.value.cocinero;
      receta.isGlutenFree = ( form.value.gluten === "true" )?false:true;
      receta.imagen = form.value.imagen;
      receta.descripcion = form.value.descripcion;

      //recuperar los ingredientes
      form.value.ingredientes.map(element => {
        receta.addIngredientes( element.nombre );
      });

      return receta;
   }


}
