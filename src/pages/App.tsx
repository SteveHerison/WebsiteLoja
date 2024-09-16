import Layout from "../layout";
import Home from "./home";
import { UserProvider } from "../contexts/UserContext";

const App = () => {
  return (
    <UserProvider>
      <Layout>
        <Home />
      </Layout>
    </UserProvider>
  );
};

export default App;
