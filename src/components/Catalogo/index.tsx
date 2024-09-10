import { useState } from "react";
import { listBolo } from "../../data/bolos";

const Index = () => {
  // Estado para armazenar o valor total
  const [total, setTotal] = useState<number>(0);

  // Função para adicionar o valor do bolo ao total
  const handleAdd = (valor: number) => {
    setTotal((prevTotal) => prevTotal + valor);
  };

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
              <div className="text-center bg-red-50 rounded-b-xl">
                <h3 className="text-xl font-semibold text-yellow-950">
                  {title}
                </h3>
                {description}
              </div>
            </label>
            <div className="flex items-center justify-between">
              <button
                className="bg-yellow-950 p-1 rounded w-20 text-red-50"
                onClick={() => handleAdd(valor)}
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
      <div className="text-right p-4">
        <h2 className="text-xl font-bold">Total: R${total.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Index;
