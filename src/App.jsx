import "./App.css";
import Footer from "./componentes/Footer";
import Homepage from "./componentes/homepage/Homepage";
import Navbar from "./componentes/Navbar";

function App() {
  return (
    <>
      <div className="w-screen overflow-hidden"></div>
      <Navbar></Navbar>
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
