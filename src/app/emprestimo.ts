export interface Emprestimo {
    id: number;
    nomePessoa: string;
    tituloLivro: string;
    dataPrevistaDevolucao: Date;
    devolvido: boolean;
}
