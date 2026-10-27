import { Routes } from '@angular/router';
import { CadastrarEmprestimo } from './cadastrar-emprestimo/cadastrar-emprestimo';
import { ListaEmprestimo } from './lista-emprestimos/lista-emprestimos';

export const routes: Routes = [
  { path: '', component: CadastrarEmprestimo },
  { path: 'lista', component: ListaEmprestimo }
];
