import { ReactNode, useEffect, useState } from "react";
// import Footer from "../components/Footer";
import Header from "../components/Header";
import Promocao from "../components/Promocao";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [aviso, setAviso] = useState(true);

  useEffect(() => {
    // Exibe o aviso por 10 segundos
    const timer = setTimeout(() => {
      setAviso(false); // Oculta o aviso após 10 segundos
    }, 3000);

    // Limpa o timer ao desmontar o componente
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-screen w-screen relative">
      {aviso && <Promocao />}{" "}
      <div className="flex flex-col h-full w-full">
        <Header />
        {children}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Layout;
