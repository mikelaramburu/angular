import { Component, OnInit } from '@angular/core';
import { Usuario, Sexo } from '../model/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuario : Usuario;

  constructor() {
    console.log('UsuarioComponent constructor');
    this.usuario = new Usuario('Nuevo');
    this.usuario.apellido = 'Usuario';
    this.usuario.avatar = 'https://www.cargopedia.net/img/user-default.png';
    this.usuario.email = 'ejemplo@gmail.com';
    this.usuario.sexo = Sexo.INDETERMINDADO;

  }

  ngOnInit() {
    console.log('UsuarioComponent ngOnInit');
  }

}