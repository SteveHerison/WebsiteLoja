import Logo from "../../assets/Design sem nome (1).png";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <aside className="h-full w-full md:w-52 absolute md:relative flex">
      <div className="flex flex-col w-1/2 md:w-52  bg-gray-800 text-white items-center ">
        <div className="flex flex-col items-center w-full">
          <img
            src={Logo}
            alt=""
            className="w-24 h-24 m-2 rounded-full border bg-white"
          />
          <p className="text-lg"> Delicias da Manda </p>
        </div>
        <div className="w-full h-full flex flex-col justify-between">
          <div className="flex w-full items-center justify-center "></div>
          <Menu />
          <div className="h-20 items-center flex justify-center  ">poi</div>
        </div>
      </div>
      <div className=" w-1/2 h-full bg-black/20 md:absolute md:-z-10" />
    </aside>
  );
};

export default Navbar;
