import { createContext, ReactNode, useState } from "react";
import { CarrinhoContextType } from "../types/carrinhoType";
import { Produto } from "../types/listBolo";

export const CarrinhoContext = createContext<CarrinhoContextType | null>(null);

type Props = { children: ReactNode };

export const UserProvider = ({ children }: Props) => {
  const [produtosSelecionados, setProdutoSelecionado] = useState<Produto[]>([]);
  const [total, setTotal] = useState(0);

  const adicionarProduto = (produto: Produto) => {
    setProdutoSelecionado((prev) => [...prev, produto]);
    setTotal((prevTotal) => prevTotal + produto.valor);
  };

  const removerProduto = (produtoId: number) => {
    setProdutoSelecionado((prev) =>
      prev.filter((produto) => produto.id !== produtoId)
    );
    const produtoRemovido = produtosSelecionados.find(
      (produto) => produto.id === produtoId
    );
    if (produtoRemovido) {
      setTotal((prevTotal) => prevTotal - produtoRemovido.valor);
    }
  };

  return (
    <CarrinhoContext.Provider
      value={{ produtosSelecionados, total, adicionarProduto, removerProduto }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
