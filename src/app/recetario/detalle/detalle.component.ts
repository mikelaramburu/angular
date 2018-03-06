import { Component, OnInit, Input } from '@angular/core';
import { Receta } from '../../model/receta';
import { RecetasService } from '../../providers/recetas.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  recetaSelec : Array<Receta>;
  receta1=Receta;

  @Input('receta') receta : Receta;

  constructor() { 
    console.log('DetalleComponent constructor');
  }

  ngOnInit() {
    console.log('DetalleComponent ngOnInit');
  }

}
