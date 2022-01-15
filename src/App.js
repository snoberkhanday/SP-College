import { HashRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import WiserRouter from "./components/WiserRouter/WiserRouter";
function App() {
  return (
    <Router>
      <Header />
      <WiserRouter />
      <Footer />
    </Router>
  );
}

export default App;
