import Categoria from "./Categoria";

export default interface Postagem {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  validade: string;
  quantidade: number;
  categoria: Categoria | null;
}
