import { Injectable } from '@angular/core';
import { Deputado } from './model/deputado';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DeputadoService {

  private API = 'https://dadosabertos.camara.leg.br/api/v2/deputados';

  constructor(private http: HttpClient) {};

  buscarDeputadoPorNome(nome: string): Observable<any> {
    return this.http.get<any>(`${this.API}?nome=${nome}&ordem=ASC&ordenarPor=nome`)
  }
}
