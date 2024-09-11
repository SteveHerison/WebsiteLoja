import Logo from "../../assets/Design sem nome (1).png";
import Lupa from "../../assets/Lupa.svg";
import Cart from "../../assets/cart.svg";

type HeaderProps = {
  handleOpenModal: () => void;
};

const Header = ({ handleOpenModal }: HeaderProps) => {
  return (
    <div className="w-full h-20 bg-red-50">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center ">
          <img
            src={Logo}
            alt="Logo"
            className="w-16 h-16 m-2 rounded-full border bg-white"
          />
        </div>
        <div className="flex items-center relative">
          <input
            type="text"
            className="border pl-8 pr-5 rounded-xl focus:outline-none focus:border-orange-950"
          />
          <img src={Lupa} alt="" className="w-5 h-5 absolute left-2" />
        </div>
        <button onClick={handleOpenModal}>
          <img src={Cart} alt="" className="w-6 h-6 mx-3" />
        </button>
      </div>
    </div>
  );
};

export default Header;
