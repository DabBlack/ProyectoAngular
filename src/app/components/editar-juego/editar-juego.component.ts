import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Juego } from 'src/app/interfaces/Juego';
import { ServiceJuegosService } from 'src/app/services/service-juegos.service';

@Component({
  selector: 'app-editar-juego',
  templateUrl: './editar-juego.component.html',
  styleUrls: ['./editar-juego.component.css']
})
export class EditarJuegoComponent {
  juego!:Juego;
  
  constructor(private serviceJuego: ServiceJuegosService, private route:ActivatedRoute) { }
  
  ngOnInit() {
    // var nombre =  (<HTMLInputElement>document.getElementById("nombre"));
    // var titulo = (<HTMLInputElement>document.getElementById("titulo"));
    // var descripcion = (<HTMLInputElement>document.getElementById("descripcion"));
    // var img_banner = (<HTMLInputElement>document.getElementById("imgBanner"));
    // var img_cart1 = (<HTMLInputElement>document.getElementById("img_cart1"));
    // var img_cart2 = (<HTMLInputElement>document.getElementById("img_cart2"));
    // var img_cart3 = (<HTMLInputElement>document.getElementById("img_cart3"));
    // var img_carrito = (<HTMLInputElement>document.getElementById("img_carrito"));
    // var precio = (<HTMLInputElement>document.getElementById("precio")).value;
    // var plataforma = (<HTMLInputElement>document.getElementById("plataforma"));

    this.serviceJuego.getJuego(this.route.snapshot.params['id']).subscribe(j => {
      this.juego = j;
      console.log(j);

      //nombre.value = j.nombre;
      // titulo.value = j.titulo;
      // descripcion.value = j.descripcion;
      // img_banner.value = j.img_banner;
      // img_cart1.value = j.img_cart1;
      // img_cart2.value = j.img_cart2;
      // img_cart3.value = j.img_cart3;
      // img_carrito.value = j.img_carrito;
      //precio.value = j.precio;
      // plataforma.value = j.plataforma;
    })

  }
    
  editarJuego() {
    this.juego=this.obtenerDatos();
    this.serviceJuego.updateJuego(this.juego).subscribe((data) => {
      console.log("Juego editado correctamente.");
      location.href = "/home";
    }
  )}  

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
