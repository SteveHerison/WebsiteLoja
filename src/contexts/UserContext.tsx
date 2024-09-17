import { createContext, ReactNode, useEffect, useState } from "react";
import { CarrinhoContextType } from "../types/carrinhoType";
import { Produto } from "../types/listBolo";

export const CarrinhoContext = createContext<CarrinhoContextType | null>(null);

type Props = { children: ReactNode };

export const UserProvider = ({ children }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const [produtosSelecionados, setProdutoSelecionados] = useState<Produto[]>(
    []
  );
  const [total, setTotal] = useState(0);
  const [alertAdd, setAlertAdd] = useState(false);

  const adicionarProduto = (produto: Produto) => {
    setProdutoSelecionados((prev) => {
      const produtoExistente = prev.find((p) => p.id === produto.id);

      if (produtoExistente) {
        return prev.map((p) =>
          p.id === produto.id ? { ...p, quantidade: p.quantidade + 1 } : p
        );
      } else {
        return [...prev, { ...produto, quantidade: 1 }];
      }
    });

    setTotal((prevTotal) => prevTotal + produto.valor);

    setAlertAdd(true);
  };

  useEffect(() => {
    if (alertAdd) {
      const timer = setTimeout(() => {
        setAlertAdd(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [alertAdd]);

  const removerProduto = (produto: Produto) => {
    setProdutoSelecionados((prev) => {
      const produtoExistente = prev.find((p) => p.id === produto.id);

      if (produtoExistente) {
        if (produtoExistente.quantidade === 1) {
          // Remove o produto quando a quantidade for 1
          return prev.filter((p) => p.id !== produto.id);
        } else {
          // Diminui a quantidade
          return prev.map((p) =>
            p.id === produto.id ? { ...p, quantidade: p.quantidade - 1 } : p
          );
        }
      }
      return prev;
    });
    setTotal((prevTotal) => prevTotal - produto.valor);
  };

  const handleOpenModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <CarrinhoContext.Provider
      value={{
        produtosSelecionados,
        total,
        adicionarProduto,
        openModal,
        handleOpenModal,
        removerProduto,
        alertAdd,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
