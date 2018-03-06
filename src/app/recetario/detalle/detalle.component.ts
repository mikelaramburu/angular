import { Component, OnInit, Input } from '@angular/core';
import { Receta } from '../../model/receta';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  @Input('receta') receta : Receta;

  constructor() { 
    console.log('DetalleComponent constructor');
  }

  ngOnInit() {
    console.log('DetalleComponent ngOnInit');
  }

}
