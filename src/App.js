import "./App.css";
import Service from "./components/services/service";
import Navbar from "./components/navbar/Navbar";
import Example from "./components/Carousel/Carousel";

function App() {
  return (
    <div className="bg-slate-200 ">
      <Navbar></Navbar>
      <Service></Service>
      {/* <Example></Example> */}
    </div>
  );
}

export default App;
