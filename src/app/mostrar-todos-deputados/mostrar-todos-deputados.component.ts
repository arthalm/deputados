import { Component } from '@angular/core';
import { Deputado } from '../model/deputado';
import { DeputadoService } from '../model/deputado.service';

@Component({
  selector: 'app-mostrar-todos-deputados',
  templateUrl: './mostrar-todos-deputados.component.html',
  styleUrl: './mostrar-todos-deputados.component.css'
})

export class MostrarTodosDeputadosComponent {
  deputados: Deputado[] = [];

  constructor(private ds: DeputadoService) {
  };

  mostrarDeputados() {
    this.ds.buscarDeputados().subscribe(res => {
      this.deputados = res.dados;
    });
  };
};
