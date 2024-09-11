import { useState } from "react";
import Layout from "../layout";
import Home from "./home";
import Carrinho from "../components/Carrinho";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="">
      <Layout setOpenModal={setOpenModal}>
        <Home />
        {openModal && <Carrinho />}
      </Layout>
    </div>
  );
};

export default App;
