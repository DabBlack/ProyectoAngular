import { Component } from '@angular/core';
import { Juego } from 'src/app/interfaces/Juego';
import { ServiceJuegosService } from 'src/app/services/service-juegos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  listaJuegos:Juego[]=[];

  constructor (private serviceJuego:ServiceJuegosService ) { 

  }

  ngOnInit() {
    //this.serviceJuego.listarJuegos().subscribe(juego => {(this.listaJuegos = juego); console.log("Lista de juegos Home: " + this.listaJuegos)});
  }
}
