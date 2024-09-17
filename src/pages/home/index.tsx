import { useContext } from "react";
import Index from "../../components/Catalogo";
import { CarrinhoContext } from "../../contexts/UserContext";
import Carrinho from "../../components/Carrinho";
import AlertAdd from "../../components/alerts/add";

const Home = () => {
  const carrinhoContext = useContext(CarrinhoContext);

  if (!carrinhoContext) return null;

  const { openModal, alertAdd } = carrinhoContext;

  return (
    <main className="w-full h-full overflow-y-auto">
      <nav className="flex flex-col py-4 gap-5">
        <h2 className="text-4xl text-center font-spicy text-yellow-950">
          Delícias no Pote
        </h2>
        <Index />
        {openModal && <Carrinho />}
      </nav>
      {alertAdd && <AlertAdd />}
    </main>
  );
};

export default Home;
