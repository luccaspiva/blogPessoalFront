import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    if (environment.token == "") {
      alert("Seção expirada, faça login novamente!")
      this.router.navigate(['/entrar'])
    }

    // toda vez que iniciar a aplicação, ja vai começar listando todos os temas
    this.findAllTemas()
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) =>{
      this.listaTemas = resp
    })
  }

  cadastrar() {
    this.temaService.postTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      alert("Tema cadastrado com sucesso!")
      // mostrando a lista atualizada de temas
      this.findAllTemas()
      // resetando o botao pro usuario nao precisar apagar tdo
      this.tema = new Tema()
    })
  }

}
