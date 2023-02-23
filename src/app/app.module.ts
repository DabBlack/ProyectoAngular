import { ServiceJuegosService } from './services/service-juegos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { TarjetaJuegoComponent } from './components/tarjeta-juego/tarjeta-juego.component';
import { BannerComponent } from './components/banner/banner.component';
import { CartaImagenComponent } from './components/carta-imagen/carta-imagen.component';
import { LoginComponent } from './components/login/login.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { NuevoJuegoComponent } from './components/nuevo-juego/nuevo-juego.component';
import { EditarJuegoComponent } from './components/editar-juego/editar-juego.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    TarjetaJuegoComponent,
    BannerComponent,
    CartaImagenComponent,
    LoginComponent,
    CarritoComponent,
    NuevoJuegoComponent,
    EditarJuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
