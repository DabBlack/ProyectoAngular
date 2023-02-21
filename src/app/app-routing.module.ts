import { NuevoJuegoComponent } from './components/nuevo-juego/nuevo-juego.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'nuevoJuego', component: NuevoJuegoComponent },
  { path: '', component: HomeComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'profile', component: ProfileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
