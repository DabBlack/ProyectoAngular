import { Component, Input, OnInit } from '@angular/core';
import { ServiceJuegosService } from 'src/app/services/service-juegos.service';

@Component({
  selector: 'app-carta-imagen',
  templateUrl: './carta-imagen.component.html',
  styleUrls: ['./carta-imagen.component.css']
})
export class CartaImagenComponent implements OnInit {
  @Input() juego:any;

  constructor (private serviceJuego: ServiceJuegosService) {
    
  }

  ngOnInit(): void {
    //console.log("Este es el juego: " + this.juego.nombre);
  }
}
