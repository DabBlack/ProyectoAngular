import { Juego } from './../../interfaces/Juego';
import { Component } from '@angular/core';
import { ServiceJuegosService } from 'src/app/services/service-juegos.service';

@Component({
  selector: 'app-nuevo-juego',
  templateUrl: './nuevo-juego.component.html',
  styleUrls: ['./nuevo-juego.component.css']
})
export class NuevoJuegoComponent {
  juego!: Juego;


  constructor (private serviceJuego: ServiceJuegosService) {
  }

  nuevoJuego() {
    this.juego=this.obtenerDatos();
    console.log(this.juego)
    this.serviceJuego.anadirNuevoJuego(this.juego).subscribe((data) => {
      console.log("Creado correctamente.")
      location.href = "/home";
    });
  }


  obtenerDatos() {
    var nombre =  (<HTMLInputElement>document.getElementById("nombre")).value;
    var titulo = (<HTMLInputElement>document.getElementById("titulo")).value;
    var descripcion = (<HTMLInputElement>document.getElementById("descripcion")).value;
    var img_banner = (<HTMLInputElement>document.getElementById("imgBanner")).value;
    var img_cart1 = (<HTMLInputElement>document.getElementById("img_cart1")).value;
    var img_cart2 = (<HTMLInputElement>document.getElementById("img_cart2")).value;
    var img_cart3 = (<HTMLInputElement>document.getElementById("img_cart3")).value;
    var img_carrito = (<HTMLInputElement>document.getElementById("img_carrito")).value;
    var precio = (<HTMLInputElement>document.getElementById("precio")).value;
    var plataforma = (<HTMLInputElement>document.getElementById("plataforma")).value;

    const nuevoJuego: Juego = {
      id: 0,
      nombre: nombre,
      titulo: titulo,
      descripcion: descripcion,
      img_banner: img_banner,
      img_cart1: img_cart1,
      img_cart2: img_cart2,
      img_cart3: img_cart3,
      img_carrito: img_carrito,
      precio: precio,
      plataforma: plataforma,
    }

    console.log(nuevoJuego)
    
    return nuevoJuego;
  }
  
 

}
