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

  // Função que gera a mensagem do pedido
  const gerarMensagemPedido = () => {
    let mensagem = "Olá, gostaria de fazer o seguinte pedido:\n";

    produtosSelecionados.forEach(({ title, quantidade, valor }) => {
      mensagem += `- ${quantidade} ${title}: R$${valor.toFixed(2)}\n`; // Adiciona uma quebra de linha aqui
    });

    mensagem += `\nTotal: R$${total.toFixed(2)}`;
    return mensagem;
  };

  // Função para redirecionar para o WhatsApp
  const enviarPedidoViaWhatsApp = () => {
    const telefone = "5585997224241"; // Substitua pelo número de telefone do seu WhatsApp
    const mensagem = encodeURIComponent(gerarMensagemPedido()); // Codifica a mensagem para URL
    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${mensagem}`;
    window.open(url, "_blank"); // Abre o WhatsApp em uma nova aba
  };

  return (
    <figure className="fixed inset-0 z-50 flex justify-center items-center bg-black/30">
      <div className="bg-white relative border-black w-4/5 max-h-[80%] rounded-xl p-4 flex flex-col">
        <button
          className="p-2 bg-black rounded text-white absolute right-2 top-2"
          onClick={handleOpenModal}
        >
          X
        </button>
        <h2 className="text-2xl font-bold mb-4">Carrinho</h2>
        <div className="flex-grow overflow-y-auto">
          {produtosSelecionados.length === 0 ? (
            <div className="h-full w-full flex flex-col items-center">
              <img src={Logo} alt="" className="h-72 w-72" />
              <p className="text-center text-2xl bg-red-100 rounded-xl p-1">
                Você está sem pedidos
              </p>
            </div>
          ) : (
            produtosSelecionados.map(
              ({ id, src, subtitle, title, valor, quantidade }) => (
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
                      <h3 className="font-semibold">{subtitle}</h3>
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
                        removerProduto({ id, src, subtitle, valor, quantidade })
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
                        adicionarProduto({
                          id,
                          src,
                          title,
                          subtitle,
                          valor,
                          quantidade: 1,
                        })
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
        {produtosSelecionados.length !== 0 && (
          <div className="flex flex-col mt-4">
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>R${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-yellow-950 text-red-100 p-2 rounded-xl mt-2 w-44"
                onClick={enviarPedidoViaWhatsApp}
              >
                Pedir
              </button>
            </div>
          </div>
        )}
      </div>
    </figure>
  );
};

export default Carrinho;
