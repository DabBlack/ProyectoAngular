//importación de la interface
import { Juego } from './../interfaces/Juego';  
//importación del injectable para poder inyectar el servicio a los componentes
import { Injectable } from '@angular/core';
//importación de HttpClient para peticiones asíncronas y Headers para las cabeceras 
import { HttpClient, HttpHeaders } from '@angular/common/http';
//importación de observable para poder suscribirse los observadores
import {Observable} from 'rxjs';
//cabeceras indicando el tipo de información a enviar
const httpOptions={
 headers:new HttpHeaders({'Content-Type':'application/json'}),
};

@Injectable({
  providedIn: 'root'
})
export class ServiceJuegosService {

  //url de la API de la que se va a consumir
  private apiUrl="http://localhost:8080/juego";

  // variable http para poder reallizar peticiones asíncronas a la API
  constructor(private http:HttpClient) { }
 
  //Petición de tipo get que devuelve un observable de array de objetos del tipo Modulo de la interface
  listarJuegos(): Observable<Juego[]>{
    return this.http.get<Juego[]>(this.apiUrl+"/getJuegos");
  }
  //Petición de tipo post al que se le pasa el módulo (de tipo de interface Modulo) y que igualmetne devulve un observable
   
  anadirNuevoJuego(juego:Juego): Observable<Juego>{
    return this.http.post<Juego>(this.apiUrl+"/anadirJuego",juego, httpOptions);
  }
 
  // Petición tipo delete al que le pasamos solo el id del módulo a borrar devolviendo el observable
  borrarJuego(id: number): Observable<Juego> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Juego>(url);
  }
 
   //Petición de tipo udapte al que se le pasa el módulo a actualizar y que devuelve un observable
  updateJuego(juego: Juego): Observable<Juego> {
    const url = `${this.apiUrl}/${juego.id}`;
    return this.http.put<Juego>(url, juego, httpOptions);
  }
 
}
