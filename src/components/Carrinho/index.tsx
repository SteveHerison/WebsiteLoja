import { useContext } from "react";
import { CarrinhoContext } from "../../contexts/UserContext";
import Logo from "../../assets/logotriste.png";
import Soma from "../../assets/more-information-svgrepo-com.svg";
import Menos from "../../assets/less-o-svgrepo-com (1).svg";
import Lixo from "../../assets/trash-slash-alt-svgrepo-com.svg";

const Carrinho = () => {
  const carrinhoContext = useContext(CarrinhoContext);

  if (!carrinhoContext) return null;

  const {
    produtosSelecionados,
    total,
    handleOpenModal,
    removerProduto,
    adicionarProduto,
  } = carrinhoContext;

  return (
    <figure className="fixed inset-0 z-50 flex justify-center items-center bg-black/30">
      <div className="bg-white relative border-black w-4/5 h-4/5 rounded-xl p-4 overflow-y-auto flex flex-col justify-between">
        <button
          className="p-2 bg-black rounded text-white absolute right-2 top-2"
          onClick={handleOpenModal}
        >
          X
        </button>
        <h2 className="text-2xl font-bold mb-4">Carrinho</h2>
        <div
          className={`flex flex-col gap-4 ${
            produtosSelecionados.length && "h-full"
          }`}
        >
          {produtosSelecionados.length === 0 ? (
            <div className="h-full w-full flex flex-col items-center">
              <img src={Logo} alt="" className="h-72 w-72" />
              <p className="text-center text-2xl bg-red-100 rounded-xl p-1">
                Você está sem pedidos
              </p>
            </div>
          ) : (
            produtosSelecionados.map(
              ({ id, src, title, valor, quantidade }) => (
                <div
                  key={id}
                  className="flex items-center justify-between p-2 border-b border-gray-300 w-full"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={src}
                      alt={title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="text-sm">{quantidade}x</p>
                      <span className="font-semibold flex gap-2">
                        <p className={`${quantidade !== 1 && "line-through"}`}>
                          R${valor.toFixed(2)}
                        </p>
                        {quantidade !== 1 && (
                          <p>R${(valor * quantidade).toFixed(2)}</p>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="bg-black/10 text-white p-1 rounded flex justify-between gap-2 items-center">
                    <button
                      className="text-red-600 font-bold text-xl "
                      onClick={() =>
                        removerProduto({ id, src, title, valor, quantidade })
                      }
                    >
                      {quantidade === 1 ? (
                        <img src={Lixo} alt="Lixo" className="w-4 h-4" />
                      ) : (
                        <img src={Menos} alt="Subtração" className="w-4 h-4" />
                      )}
                    </button>
                    <p className="text-black">{quantidade}</p>

                    <button
                      className="text-red-600 font-bold text-2xl"
                      onClick={() =>
                        adicionarProduto({ id, src, title, valor })
                      }
                    >
                      <img src={Soma} alt="Soma" className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )
            )
          )}
        </div>
        <div className="mt-4 flex justify-between font-bold">
          <span>Total:</span>
          <span>R${total.toFixed(2)}</span>
        </div>
      </div>
    </figure>
  );
};

export default Carrinho;
