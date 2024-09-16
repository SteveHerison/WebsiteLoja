import { useContext } from "react";
import Logo from "../../assets/Logo.png";
import Lupa from "../../assets/Lupa.svg";
import Cart from "../../assets/cart.svg";
import { CarrinhoContext } from "../../contexts/UserContext";

const Header = () => {
  const carrinhoContext = useContext(CarrinhoContext);

  if (!carrinhoContext) return null;

  const { handleOpenModal } = carrinhoContext;

  return (
    <div className="w-full h-20 bg-red-50">
      <div className="flex items-center justify-between w-full px-4">
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="w-16 h-16 m-2 rounded-full border bg-white"
          />
        </div>
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Buscar"
            className="border pl-8 pr-5 rounded-xl focus:outline-none focus:border-orange-950"
          />
          <img src={Lupa} alt="Lupa" className="w-5 h-5 absolute left-2" />
        </div>
        <button>
          <img
            src={Cart}
            alt="Carrinho"
            className="w-6 h-6 mx-3"
            onClick={handleOpenModal}
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
