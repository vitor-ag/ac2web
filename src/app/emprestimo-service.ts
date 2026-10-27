import { Injectable } from '@angular/core';
import { Emprestimo } from './emprestimo';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {
  emprestimos: Emprestimo[] = [];

  listar(): Emprestimo[] {
    return this.emprestimos;
  }

  adicionar(emprestimo: Emprestimo): void {
    this.emprestimos.push(emprestimo);
  }

  remover(id: number): void {
    this.emprestimos = this.emprestimos.filter(e => e.id !== id);
  }

  registrarDevolucao(id: number): void {
    const emprestimo = this.emprestimos.find(e => e.id === id);

    if (emprestimo) {
      emprestimo.devolvido = true;
    }
  }
}