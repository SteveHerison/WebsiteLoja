import { ReactNode } from "react";
// import Footer from "../components/Footer";
import Header from "../components/Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen w-screen relative">
      <div className="flex flex-col h-full w-full">
        <Header />
        {children}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Layout;
