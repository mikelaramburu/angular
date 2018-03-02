import { Component, OnInit } from '@angular/core';
import{Coche} from '../model/coche'

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.scss']
})
export class ConcesionarioComponent implements OnInit {
 stocks:Array<Coche>; //Array casteado a coche
 coche1: Coche;
 coche2: Coche;
 
  constructor() {
    this.coche1=new Coche('','');
    this.coche2=new Coche('','');

    console.log('ConsesionarioComponent constructor'); 
      this.stocks = new Array<Coche>();
      this.stocks.push(new Coche('Seat', 'Panda'));
      this.stocks.push(new Coche('Toyota', 'Verso'));
      this.stocks.push(new Coche('Opel', 'Corsa', 'v1.6'));
  }
  ngOnInit() {
    console.log('ConsesionarioComponent ngOnInit'); 
  }

  recibirCoche(event){
    console.log("ConcesionarioComponent recibirCoche %o", event.coche);
    this.coche1=event.coche;
  }

}



    
    
