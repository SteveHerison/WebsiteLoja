import LogoCheck from "../../assets/check-svgrepo-com (1).svg";

const AlertAdd = () => {
  return (
    <div className="absolute top-2 left-1/2 -translate-x-1/2 max-w-full">
      <div className="p-1 text-red-200 bg-yellow-950 font-semibold rounded-xl w-full ">
        <span className="flex items-center">
          <p className="text-sm">Adicionado com sucesso!</p>
          <img src={LogoCheck} alt="" className="w-6 h-6 rounded-full" />
        </span>
      </div>
    </div>
  );
};

export default AlertAdd;
