import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estados } from './estados';

@Injectable({
  providedIn: 'root'
})

export class DeputadoService {

  private API = 'https://dadosabertos.camara.leg.br/api/v2/deputados';

  constructor(private http: HttpClient) {};

  buscarDeputados(): Observable<any> {
    return this.http.get<any>(`${this.API}?ordem=ASC&ordenarPor=nome`)
  };

  buscarDeputadosPorNome(nome: string): Observable<any> {
    return this.http.get<any>(`${this.API}?nome=${nome}&ordem=ASC&ordenarPor=nome`)
  };

  buscarDeputadosPorUf(uf: string): Observable<any> {
    return this.http.get<any>(`${this.API}?siglaUf=${uf}&ordem=ASC&ordenarPor=nome`)
  };
};
