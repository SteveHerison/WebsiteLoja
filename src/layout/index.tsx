import { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import Navbar from "../components/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen w-screen">
      {/* <Navbar /> */}
      <div className="flex flex-col h-full w-full">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
