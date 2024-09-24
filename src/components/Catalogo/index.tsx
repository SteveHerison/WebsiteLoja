import { useContext } from "react";
import { listBolo } from "../../data/bolos";
import { CarrinhoContext } from "../../contexts/UserContext";

const Index = () => {
  const carrinhoContext = useContext(CarrinhoContext);

  if (!carrinhoContext) return null;

  const { adicionarProduto } = carrinhoContext;

  return (
    <article className="h-full w-full">
      <h2 className="text-center text-3xl font-spicy bg-yellow-950 text-red-100 py-2 my-2">
        Delícias de 250g
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3">
        {listBolo
          .slice(0, 5)
          .map(({ id, src, description, title, subtitle, valor }) => (
            <div key={id} className="flex flex-col gap-2">
              <label className="flex flex-col justify-center items-center rounded text-sm h-full">
                <div className="w-full h-52 flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Bolo ${id}`}
                    className="object-cover h-full w-full rounded-t-xl"
                  />
                </div>
                <div className="text-center bg-red-50 rounded-b-xl w-full px-1">
                  <h3 className="text-xl font-semibold text-yellow-950 font-indie">
                    {title}
                  </h3>
                  <p className="font-indie">{description}</p>
                </div>
              </label>
              <div className="flex items-center justify-between">
                <button
                  className="bg-yellow-950 p-1 rounded w-20 text-red-50 hover:bg-yellow-900"
                  onClick={() =>
                    adicionarProduto({
                      id,
                      title,
                      subtitle,
                      valor,
                      src,
                      quantidade: 1,
                    })
                  }
                >
                  Adicionar
                </button>
                <div className="text-sm flex gap-2">
                  {id === 4 ? (
                    <>
                      <p className="line-through font-spicy">R$16,00</p>
                      <p className=" font-spicy">R$12,00</p>
                    </>
                  ) : (
                    <>
                      <p className="line-through font-spicy">R$ 14,00</p>
                      <p className="font-spicy">R$10,00</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
      </section>

      <h2 className="text-center text-3xl font-spicy bg-yellow-950 text-red-100 py-2 my-2">
        Delícias de 150g
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3">
        {listBolo
          .slice(5)
          .map(({ id, src, description, title, subtitle, valor }) => (
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
                  <h3 className="text-xl font-semibold text-yellow-950 font-indie">
                    {title}
                  </h3>
                  <p className="font-indie">{description}</p>
                </div>
              </label>
              <div className="flex items-center justify-between">
                <button
                  className="bg-yellow-950 p-1 rounded w-20 text-red-50 hover:bg-yellow-900"
                  onClick={() =>
                    adicionarProduto({
                      id,
                      title,
                      subtitle,
                      valor,
                      src,
                      quantidade: 1,
                    })
                  }
                >
                  Adicionar
                </button>
                <div className="text-sm flex gap-2">
                  {id === 4 ? (
                    <>
                      <p className="line-through font-spicy">R$8,00</p>
                      <p className=" font-spicy">R$6,00</p>
                    </>
                  ) : (
                    <>
                      <p className="line-through font-spicy">R$ 8,00</p>
                      <p className="font-spicy">R$6,00</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
      </section>
    </article>
  );
};

export default Index;
