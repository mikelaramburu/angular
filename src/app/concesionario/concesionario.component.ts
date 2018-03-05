import { Component, OnInit } from '@angular/core';
import { Coche } from '../model/coche'
import { CochesService } from '../providers/coches.service';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.scss']
})

export class ConcesionarioComponent implements OnInit {
  stocks : Array<Coche>;
  coche1 : Coche;
  coche2 : Coche;
//inicializar los atributos
  constructor(public cochesService:CochesService) { 
 
    this.coche1 = new Coche('coche1','',4);
    this.coche2 = new Coche('coche2','',4);
  console.log("ConcesionarioComponent Constructor");
  this.stocks = new Array<Coche>();
  //estos datos nos lo provee el service
 // this.stocks.push(new Coche('Seat', 'Panda'));
 //this.stocks.push(new Coche('Toyota', 'Verso'));
 //this.stocks.push(new Coche('Opel', 'Corsa', 'v1.6'));
  }
// llamadas a los Services en ngOnit
  ngOnInit() {
    console.log('ConcesionarioComponen ngOInit');
    this.stocks= this.cochesService.getAll();
  }

  recibirCoche(event){
  console.log("ConcesionarioComponent recibirCoche %o", event.coche);
    this.coche2 = this.coche1;
    this.coche1=event.coche;
  }
}
    
    
