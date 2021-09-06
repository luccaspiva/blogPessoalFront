import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './editar/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './deletar/tema-delete/tema-delete.component';

const routes: Routes = [
  {path: '', redirectTo: 'entrar',pathMatch: 'full'}, //qdo o caminho for vazio, ele redireciona para o entrar
  {path: 'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastrarComponent},
 
  {path: 'inicio', component: InicioComponent},
  {path: 'tema', component: TemaComponent},

  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
