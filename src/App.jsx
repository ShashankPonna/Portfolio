import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Particles from "./Particle";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen absolute bg-dark-100 flex justify-center">
      <div className="z-0" style={{ width: "100%", height: "100vh", position: "relative"  }}>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
