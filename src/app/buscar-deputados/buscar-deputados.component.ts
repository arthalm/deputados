import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeputadoService } from '../model/deputado.service';
import { Deputado } from '../model/deputado';
import { Estados } from '../model/estados';

@Component({
  selector: 'app-buscar-deputados',
  templateUrl: './buscar-deputados.component.html',
  styleUrl: './buscar-deputados.component.css'
})

export class BuscarDeputadosComponent {

  formBuscarDeputado: FormGroup;
  deputado: Deputado[] | undefined;
  estados: string[] = Object.values(Estados);

  constructor(private fb: FormBuilder, private ds: DeputadoService) {
      this.formBuscarDeputado = this.fb.group({
        nome: ['', [Validators.required, Validators.minLength(3)]],
        estado: ['']
      });
      this.deputado = undefined;
  };

  buscarPorNome() {
    const nome = this.formBuscarDeputado.value.nome;
    this.ds.buscarDeputadosPorNome(nome).subscribe(res => {
      this.deputado = res.dados;
    });
  };

  buscarPorEstado() {
    const estado = this.formBuscarDeputado.value.estado;
    this.ds.buscarDeputadosPorUf(estado).subscribe(res => {
      this.deputado = res.dados;
    });
  };
};
