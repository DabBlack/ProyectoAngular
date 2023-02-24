import { ServiceJuegosService } from 'src/app/services/service-juegos.service';
import { Component, OnInit, Input} from '@angular/core';
import { Juego } from 'src/app/interfaces/Juego';

@Component({
  selector: 'app-tarjeta-juego',
  templateUrl: './tarjeta-juego.component.html',
  styleUrls: ['./tarjeta-juego.component.css']
})

export class TarjetaJuegoComponent{
  listaJuegos:Juego[]=[];

  constructor(private serviceJuego:ServiceJuegosService) { }

  ngOnInit(): void {
    this.serviceJuego.listarJuegos().subscribe(juego => {(this.listaJuegos = juego); console.log("Lista de juegos: " + this.listaJuegos)});
  }
}
