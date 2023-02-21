import { ServiceJuegosService } from 'src/app/services/service-juegos.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {
  @Input() juego:any;

  constructor (private serviceJuego: ServiceJuegosService) {
    
  }

  ngOnInit(): void {

  }
}