import { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { UserProvider } from "../contexts/UserContext";

type LayoutProps = {
  children: ReactNode;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Layout = ({ children, setOpenModal }: LayoutProps) => {
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <UserProvider>
      <div className="flex h-screen w-screen relative">
        <div className="flex flex-col h-full w-full">
          <Header handleOpenModal={handleOpenModal} />
          {children}
          <Footer />
        </div>
      </div>
    </UserProvider>
  );
};

export default Layout;
