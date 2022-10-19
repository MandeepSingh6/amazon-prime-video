import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RowsHome from "./components/RowsHome";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <RowsHome />
    </div>
  );
}

export default App;
