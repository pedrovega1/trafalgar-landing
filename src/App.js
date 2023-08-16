import React from "react";
import "./App.css";
import Service from "./components/services/service";
import Navbar from "./components/navbar/Navbar";
import Example from "./components/Carousel/Carousel";

function App() {
  return (
    <div className="bg-slate-200">
      <Navbar />
      <Service />
      {/* <Example /> */}
      <footer className="text-center py-4">
        <p className="mb-2">
          Check out the design on Figma:{" "}
          <a
            href="https://www.figma.com/community/file/892358789568947362/Trafalgar-Landing-Page"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Trafalgar Landing Page
          </a>
        </p>
        <p>
          © {new Date().getFullYear()} my copyright. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
