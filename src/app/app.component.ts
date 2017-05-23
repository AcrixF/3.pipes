import { Component } from '@angular/core';
import {setTimeout} from "timers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre : string ="Cristian";

  nombre2 : string = "criStian floRes marTinez";

  arreglo = [1,2,3,4,5,6,7,8,9];

  PI = Math.PI;

  a:number = 0.234;


  salario = 1234.5;

  heroe = {

    nombre:"Logan",
    clave:"Wolvering",
    edad:500,
    direccion:{
      calle:"Primavera",
      casa:19
    }

  }

  valorDePromesa =  new Promise((resolve,reject) => {
    setTimeout(() => resolve('Llego la data'),3500);
  })


  fecha = new Date();

  video = "fDtb53un3-Y";

  contrasena = "contraseña";

  activar:boolean= true;
}
