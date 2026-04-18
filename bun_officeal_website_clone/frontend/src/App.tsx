import Bun_use from "./components/home/bun_use";
import Hero_ from "./components/home/hero";
import Navbar from "./components/home/navbar";
import Toolkit from "./components/home/toolkit";
import "./index.css";
import "./style/home.css"

export function App() {
  return (
    <div >
      <Navbar/>
      <Hero_/>
      <Toolkit/>
      <Bun_use/>
    </div>
  );
}

export default App;
