import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Emprestimo } from '../emprestimo';
import { EmprestimoService } from '../emprestimo-service';

@Component({
  selector: 'app-lista-emprestimo',
  imports: [CommonModule],
  templateUrl: './lista-emprestimos.html',
  styleUrl: './lista-emprestimos.css'
})
export class ListaEmprestimo {
  emprestimos: Emprestimo[] = [];

  constructor(private service: EmprestimoService) {
    this.atualizarLista();
  }

  atualizarLista(): void {
    this.emprestimos = [...this.service.listar()];
  }

  remover(id: number): void {
    this.service.remover(id);
    this.atualizarLista();
  }

  registrarDevolucao(id: number): void {
    this.service.registrarDevolucao(id);
    this.atualizarLista();
  }

  get total(): number {
    return this.emprestimos.length;
  }

  get emAberto(): number {
    return this.emprestimos.filter(e => !e.devolvido).length;
  }

  get devolvidos(): number {
    return this.emprestimos.filter(e => e.devolvido).length;
  }
}