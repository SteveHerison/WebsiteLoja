import { Produto } from "./listBolo";

export interface CarrinhoContextType {
  openModal: boolean;
  handleOpenModal: () => void;
  produtosSelecionados: Produto[];
  total: number;
  adicionarProduto: (produto: Produto) => void;
  removerProduto: (produto: Produto) => void;
}
