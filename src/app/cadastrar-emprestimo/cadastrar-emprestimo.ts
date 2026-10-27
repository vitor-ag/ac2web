import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmprestimoService } from '../emprestimo-service';

@Component({
  selector: 'app-cadastrar-emprestimo',
  imports: [FormsModule],
  templateUrl: './cadastrar-emprestimo.html',
  styleUrl: './cadastrar-emprestimo.css'
})
export class CadastrarEmprestimo {

  nomePessoa = '';
  tituloLivro = '';
  dataPrevistaDevolucao = '';

  constructor(private service: EmprestimoService) {}

  cadastrar(): void {
    if (
      this.nomePessoa === '' ||
      this.tituloLivro === '' ||
      this.dataPrevistaDevolucao === ''
    ) {
      return;
    }

    this.service.adicionar({
      id: Date.now(),
      nomePessoa: this.nomePessoa,
      tituloLivro: this.tituloLivro,
      dataPrevistaDevolucao: new Date(
        this.dataPrevistaDevolucao + 'T00:00:00'
      ),
      devolvido: false
    });

    this.nomePessoa = '';
    this.tituloLivro = '';
    this.dataPrevistaDevolucao = '';

    alert('Empréstimo cadastrado!');
  }
}