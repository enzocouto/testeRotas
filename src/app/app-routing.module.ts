import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarroComponent } from './carro/carro.component';
import { MotoComponent } from './moto/moto.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'carro/:id' , component: CarroComponent },
  {path: 'moto' , component: MotoComponent},
  {path: '' , component: HomeComponent},
  {path: '**' , component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
