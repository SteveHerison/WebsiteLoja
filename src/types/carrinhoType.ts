import { Produto } from "./listBolo";

export interface CarrinhoContextType {
  produtosSelecionados: Produto[];
  total: number;
  adicionarProduto: (produto: Produto) => void;
}
