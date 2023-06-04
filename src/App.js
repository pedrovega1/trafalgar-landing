import "./App.css";
import Service from "./components/services/service";
import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
function App() {
  return (
    <div className="bg-slate-200 ">
      <Navbar></Navbar>
      <Service></Service>
      <Carousel></Carousel>
    </div>
  );
}

export default App;
