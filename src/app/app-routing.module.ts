import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarDeputadosComponent } from './buscar-deputados/buscar-deputados.component';
import { MostrarTodosDeputadosComponent } from './mostrar-todos-deputados/mostrar-todos-deputados.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

const routes: Routes = [
  {path: 'home', component: MostrarTodosDeputadosComponent},
  {path: 'buscar', component: BuscarDeputadosComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NaoEncontradoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
