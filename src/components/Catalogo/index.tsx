import { useContext } from "react";
import { listBolo } from "../../data/bolos";
import { CarrinhoContext } from "../../contexts/UserContext";

const Index = () => {
  const carrinhoContext = useContext(CarrinhoContext);

  if (!carrinhoContext) return null;

  const { adicionarProduto } = carrinhoContext;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3">
        {listBolo.map(({ id, src, description, title, valor }) => (
          <div key={id} className="flex flex-col gap-2">
            <label
              htmlFor=""
              className="flex flex-col justify-center items-center rounded text-sm"
            >
              <img
                src={src}
                alt={`Bolo ${id}`}
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="text-center bg-red-50 rounded-b-xl w-full px-1">
                <h3 className="text-xl font-semibold text-yellow-950">
                  {title}
                </h3>
                {description}
              </div>
            </label>
            <div className="flex items-center justify-between">
              <button
                className="bg-yellow-950 p-1 rounded w-20 text-red-50"
                onClick={() => adicionarProduto({ id, title, valor, src })}
              >
                Adicionar
              </button>
              <div className="text-sm flex gap-2">
                {id === 4 ? (
                  <>
                    <p className="line-through">R$19,00</p>
                    <p className="font-semibold">R$12,00</p>
                  </>
                ) : (
                  <>
                    <p className="line-through">R$ 17,00</p>
                    <p className="font-semibold">R$10,00</p>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
