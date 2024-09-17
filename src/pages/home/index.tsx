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
      <nav>
        <h2 className="text-3xl text-center">Bolos de Pote disponíveis</h2>
        <Index />
        {openModal && <Carrinho />}
      </nav>
      {alertAdd && <AlertAdd />}
    </main>
  );
};

export default Home;
