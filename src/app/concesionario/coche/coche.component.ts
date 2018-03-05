import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Coche} from '../../model/coche';


@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss']
})
export class CocheComponent implements OnInit {

  @Input('c1') c1 : Coche; // coche para mostrar
  @Input('c2') c2 : Coche; // coche para comparar

  
  constructor() { }

  ngOnInit() {
    console.log('CocheComponent constructor');
  }

}