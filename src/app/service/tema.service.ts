import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]> {
    return this.http.get<Tema[]>("https://blopessoalluccaspiva.herokuapp.com/temas", this.token)
  }

  getTemaById(id: number): Observable<Tema> {
    return this.http.get<Tema>(`https://blopessoalluccaspiva.herokuapp.com/temas/${id}`, this.token) //template literals (passar uma rota com string e variavel ao mesmo tempo)
  }

  postTema(tema: Tema): Observable<Tema> {
    return this.http.post<Tema>("https://blopessoalluccaspiva.herokuapp.com/temas", tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema> {
    return this.http.put<Tema>("https://blopessoalluccaspiva.herokuapp.com/temas", tema, this.token)
  }

  // nao precisa do observable
  deleteTema(id: number) {
    // nesse caso, como vamo pegar apenas o Id pra ser deletado, o link deve ser passado entre crases `` e nao entre aspas ''/ ""
    return this.http.delete(`https://blopessoalluccaspiva.herokuapp.com/temas/${id}`, this.token)
  }




}
