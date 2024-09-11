import { useContext } from "react";
import { CarrinhoContext } from "../../contexts/UserContext";

const Carrinho = () => {
  const carrinhoContext = useContext(CarrinhoContext);

  if (!carrinhoContext) return null;

  const { produtosSelecionados, removerProduto, total } = carrinhoContext;

  return (
    <div className="absolute w-full h-full flex justify-center items-center bg-black/30">
      <div className="bg-white border-black w-4/5 h-4/5 rounded-xl p-4">
        <h2 className="text-2xl font-bold mb-4">Carrinho de Compras</h2>
        <div className="flex flex-col gap-4">
          {produtosSelecionados.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            produtosSelecionados.map(({ id, src, title, valor }) => (
              <div
                key={id}
                className="flex items-center justify-between p-2 border-b border-gray-300"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={src}
                    alt={title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{title}</h3>

                    <p className="font-semibold">R${valor.toFixed(2)}</p>
                  </div>
                </div>
                <button
                  onClick={() => removerProduto(id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remover
                </button>
              </div>
            ))
          )}
        </div>
        <div className="mt-4 flex justify-between font-bold">
          <span>Total:</span>
          <span>R${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Carrinho;
