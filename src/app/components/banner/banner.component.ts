import { ServiceJuegosService } from 'src/app/services/service-juegos.service';
import { Component, Input, OnInit } from '@angular/core';
import { Juego } from 'src/app/interfaces/Juego';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent {
  @Input() juego!: Juego;

  constructor (private serviceJuego: ServiceJuegosService) {

  }

  ngOnInit() {

  }

  borrarJuego(id: number) {
    console.log (id)
    this.serviceJuego.borrarJuegoService(id).subscribe((data) => {
      console.log("Borrado correctamente.")
      location.href = "/home";
    });
  }
}