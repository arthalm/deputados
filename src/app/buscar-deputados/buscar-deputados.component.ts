import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeputadoService } from '../deputado.service';
import { Deputado } from '../model/deputado';

@Component({
  selector: 'app-buscar-deputados',
  templateUrl: './buscar-deputados.component.html',
  styleUrl: './buscar-deputados.component.css'
})

export class BuscarDeputadosComponent {

  formBuscarDeputado: FormGroup;
  deputado: Deputado[] | undefined;

  constructor(private fb: FormBuilder, private ds: DeputadoService) {
      this.formBuscarDeputado = this.fb.group({
        nome: ['', [Validators.required, Validators.minLength(3)]]
      });
      this.deputado = undefined;
  };

  buscar() {
    const nome = this.formBuscarDeputado.value.nome;
    this.ds.buscarDeputadoPorNome(nome).subscribe(res => {
      this.deputado = res.dados;
      console.log (res.dados)
    });
  };
};
